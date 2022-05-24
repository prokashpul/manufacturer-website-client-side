import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserInfo from "../../Components/Purchase/UserInfo";
import { request } from "../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../Utilities/Loader/Loader";

const Purchase = () => {
  const { id } = useParams();

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
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  const { name, dic, price, image, quantity, _id } = tool || {};
  //   console.log(tool);

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="py-20 bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:w-[1080px] w-[95%] mx-auto  shadow-xl">
        <div className=" bg-accent shadow-lg  md:w-50%">
          <figure>
            <img className="w-full h-[300px] p-5" src={image} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="font-extrabold text-3xl">{name}</h2>
            <p>{dic}</p>
            <h4 className="text-lg font-semibold">Per unit price: ${price}</h4>
            <h4 className="font-semibold">In Stock: ${quantity}</h4>
            <h4 className=" font-semibold">Minimum Order: 100 unit</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-40"
                  min="100"
                  max="200"
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
        <div className=" bg-accent shadow-lg md:w-50%">
          <div className="card-body">
            <h2 className="md:text-5xl text-4xl text-center my-5 font-bold">
              User Information
            </h2>
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
