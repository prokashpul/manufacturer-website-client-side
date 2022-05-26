import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Title from "../../../Utilities/PathTitle/PathTitle";

const AddReview = () => {
  Title("Add Reviews");
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    const userUp = async () => {
      const dic = data?.dis;
      const review = data?.review;
      const name = user?.displayName;
      const email = user?.email;
      const image =
        user?.photoURL || "https://i.ibb.co/7jMg9Xq/circled-user.png";
      const res = await request({
        url: `/user/review`,
        method: "post",
        data: { dic, review, name, email, image },
      });
      reset();
      if (res.data) {
        toast.success("Add review successful");
        // Navigate("/dashboard/");
        return res.data;
      } else {
        toast.error("Some thing wrong");
      }
    };
    userUp();
  };
  return (
    <div className="hero my-10 ">
      <div className="card flex-shrink-0 w-[95%] md:w-[85%]  shadow-2xl bg-base-100">
        <h2 className="text-center font-bold text-3xl mt-5">Add Review</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered h-24"
                {...register("dis", {
                  max: 200,
                  required:
                    "You must specify a Description less than 200 letter field",
                })}
              />
              {errors.dis && (
                <span className="mt-1 text-error">{errors.dis.message}</span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review Rate :</span>
                </label>
                <input
                  type="number"
                  placeholder="Set Review Rate"
                  className="input input-bordered"
                  min="1"
                  max="5"
                  {...register("review", {
                    required: "You must specify a Review Rate field",
                  })}
                />
                {errors.review && (
                  <span className="mt-1 text-error">
                    {errors.review.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-6  mx-auto w-full">
              <button
                type="submit"
                className="btn btn-primary text-accent w-[50%]"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
