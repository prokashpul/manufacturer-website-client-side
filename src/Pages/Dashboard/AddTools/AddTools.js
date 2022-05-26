import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Title from "../../../Utilities/PathTitle/PathTitle";

const AddTools = () => {
  Title("Add ItemS");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userUp = async () => {
      const name = data?.name;
      const dic = data?.dis;
      const image = data?.image;
      const price = data?.price;
      const quantity = data?.quantity;
      const minOrder = data?.minOrder;
      const res = await request({
        url: `/tools/`,
        method: "post",
        data: { name, dic, image, price, quantity, minOrder },
      });
      reset();
      if (res.data) {
        toast.success("Add tools successful");
        Navigate("/dashboard/my-profile");
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
        <h2 className="text-center font-bold text-3xl mt-5">Add new Item</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                max="60"
                {...register("name", {
                  required: "You must specify a name field",
                })}
              />
              {errors.name && (
                <span className="mt-1 text-error">{errors.name.message}</span>
              )}
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
                  max: 200,
                  required:
                    "You must specify a Description less than 200 letter field",
                })}
              />
              {errors.dis && (
                <span className="mt-1 text-error">{errors.dis.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image :</span>
              </label>
              <input
                type="text"
                placeholder="Image Url"
                className="input input-bordered"
                {...register("image", {
                  required: "You must specify a Image field",
                })}
              />
              {errors.image && (
                <span className="mt-1 text-error">{errors.image.message}</span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price :</span>
                </label>
                <input
                  type="number"
                  placeholder="Price Per uint"
                  className="input input-bordered"
                  min="1"
                  {...register("price", {
                    required: "You must specify a Price field",
                  })}
                />
                {errors.price && (
                  <span className="mt-1 text-error">
                    {errors.price.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity :</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered"
                  min="1"
                  {...register("quantity", {
                    required: "You must specify a quantity  field",
                  })}
                />
                {errors.quantity && (
                  <span className="mt-1 text-error">
                    {errors.quantity.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Order quantity :</span>
                </label>
                <input
                  type="number"
                  min="100"
                  placeholder="Minimum Order quantity"
                  className="input input-bordered"
                  {...register("minOrder", {
                    required: "You must specify a Minimum Order quantity field",
                  })}
                />
                {errors.minOrder && (
                  <span className="mt-1 text-error">
                    {errors.minOrder.message}
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

export default AddTools;
