import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const EditProfile = () => {
  const [user] = useAuthState(auth);
  const userEmail = user.email;
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { data, isLoading, isError } = useQuery("user", async () => {
    const res = await request({ url: `/user/${userEmail}` });
    return res.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  Title("Edit Profile", data?.name);
  const onSubmit = (data) => {
    console.log(data);
    const phone = data?.phone;
    const address = data?.address;
    const about = data?.about;
    const image = user?.photoURL;
    const userUp = async () => {
      const res = await request({
        url: `/user/${user?.email}`,
        method: "put",
        data: { phone, address, about, image },
      });
      reset();
      toast.success("Profile Update successful");
      navigate("/dashboard/my-profile");
      return res.data;
    };
    userUp();
  };
  return (
    <div className="hero my-10 ">
      <div className="card flex-shrink-0 w-[95%] md:w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center font-bold text-3xl mt-5">
          Hi ! <span className="text-primary"></span> {data?.name}
        </h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={data?.name}
                disabled
                className="input input-bordered"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="email"
                defaultValue={data?.email}
                disabled
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Phone"
                min="10"
                className="input input-bordered"
                {...register("phone")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">About</span>
              </label>
              <input
                type="text"
                placeholder="About"
                className="input input-bordered"
                {...register("about")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
                {...register("address")}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-accent">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
