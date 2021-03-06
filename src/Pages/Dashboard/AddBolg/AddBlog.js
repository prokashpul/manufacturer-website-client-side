import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Title from "../../../Utilities/PathTitle/PathTitle";

const AddBlog = () => {
  Title("Add Reviews");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userUp = async () => {
      const name = user?.displayName;
      const dic = data?.dis;
      const title = data?.title;
      const email = user?.email;
      const res = await request({
        url: `/blogs/`,
        method: "post",
        data: { name, dic, email, title },
      });
      reset();
      if (res.data) {
        toast.success("Add Posts successful");
        navigate("/blogs");
        return res.data;
      } else {
        toast.error("Error");
        return;
      }
    };
    userUp();
  };
  return (
    <div className="hero my-10 ">
      <div className="card flex-shrink-0 w-[95%] md:w-[85%]  shadow-2xl bg-base-100">
        <h2 className="text-center font-bold text-3xl mt-5">Add Blogs</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title :</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full"
                  {...register("title", {
                    required: "You must specify a Title field",
                  })}
                />
                {errors.title && (
                  <span className="mt-1 text-error">
                    {errors.title.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered h-24"
                {...register("dis", {
                  required:
                    "You must specify a Description less than 1000 letter field",
                })}
              />
              {errors.dis && (
                <span className="mt-1 text-error">{errors.dis.message}</span>
              )}
            </div>

            <div className="form-control mt-6  mx-auto w-full">
              <button
                type="submit"
                className="btn btn-primary text-accent w-[50%]"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
