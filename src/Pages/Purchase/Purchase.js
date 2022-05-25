import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserInfo from "../../Components/Purchase/UserInfo";
import { request } from "../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../Utilities/Loader/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Title from "../../Utilities/PathTitle/PathTitle";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    data: tool,
    isLoading,
    isError,
  } = useQuery("tools", async () => {
    const res = await request({ url: `/purchase/${id}` });
    return res?.data;
  });

  const { name, dic, price, image, quantity, _id } = tool || {};
  Title(name);
  const userEmail = user.email;
  //Load tool data
  const {
    data: userData,
    isLoadingUser,
    isErrorUse,
  } = useQuery("user", async () => {
    const res = await request({ url: `/user/${userEmail}` });
    return res.data;
  });
  if (isLoading || isLoadingUser) {
    return <Loader></Loader>;
  }
  if (isError || isErrorUse) {
    toast.error(isError?.message);
  }
  //   console.log(tool);

  const onSubmit = async (data) => {
    console.log(data);
    const userUp = async () => {
      const userName = user?.displayName;
      const productName = tool?.displayName;
      const email = user?.email;
      const image = tool?.image;
      const price = tool?.price;
      const quantity = data?.quantity;
      const totalPrice = price * quantity;
      const productId = tool?._id;
      const res = await request({
        url: `/purchase`,
        method: "post",
        data: {
          image,
          price,
          productName,
          userName,
          email,
          quantity,
          totalPrice,
          productId,
        },
      });
      reset();
      //put data
      if (res.status === 200) {
        const userUp = async () => {
          const newQuantity = parseInt(tool.quantity) - parseInt(data.quantity);
          tool.quantity = newQuantity;
          const res = await request({
            url: `/tools/${_id}`,
            method: "put",
            data: { tool },
          });
          // console.log(tool);
          // console.log(res.data);
          return res.data;
        };
        userUp();

        toast.success("Order successful");
        navigate("/dashboard/my-order");
        return res.data;
      } else {
        toast.error("Some thing wrong");
      }
    };
    userUp();
  };

  return (
    <div className="py-20 bg-primary">
      <h2 className="font-extrabold text-3xl text-center my-10">
        Order Now {name}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:w-[1080px] w-[95%] mx-auto  shadow-xl">
        <div className=" bg-accent shadow-lg  md:w-50%">
          <figure>
            <img className="w-full h-[300px] p-5" src={image} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="font-extrabold text-3xl">{name}</h2>
            <p>{dic}</p>
            <h4 className="text-lg font-semibold">Per unit price: ${price}</h4>
            <h4 className="font-semibold">In Stock: {quantity}</h4>
            <h4 className=" font-semibold">Minimum Order: 100 unit</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-40"
                  min="100"
                  max={quantity}
                  {...register("quantity", {
                    required: "You must specify a quantity field",
                  })}
                />
                {/* errors will return when field validation fails  */}
                {errors.quantity && (
                  <span className="mt-1 text-error">
                    {errors.quantity.message}
                  </span>
                )}
              </div>
              <div className="card-actions justify-start mt-5">
                <button type="submit" className="btn btn-primary text-accent">
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" bg-amber-100 shadow-lg md:w-50%">
          <div className="card-body">
            <h2 className="md:text-3xl text-2xl text-center my-5 font-bold">
              User Information
            </h2>
            <UserInfo userData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
