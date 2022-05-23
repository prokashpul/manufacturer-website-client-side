import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import useToken from "../../../Hooks/useToken";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Registration = () => {
  Title("Create A new Account ");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, upError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  if (loading || updating) {
    return <Loader></Loader>;
  }
  const onSubmit = async (data) => {
    const email = data?.email;
    const password = data?.password;
    await createUserWithEmailAndPassword(email, password);
    const name = data?.name;
    await updateProfile({ displayName: name });
    reset();
  };

  if (token) {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    console.log(user);
    const userUp = async () => {
      const res = await request({
        url: `/user/${email}`,
        method: "put",
        data: { email, name },
      });
      return res.data;
    };
    userUp();
    navigate(from, { replace: true });
  }
  if (error || upError) {
    toast.error(error.message || upError.message);
  }
  return (
    <div className="hero my-10 ">
      <div className="card flex-shrink-0 w-[95%] md:w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center font-bold text-3xl mt-5">
          Registration Now !
        </h2>
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
                {...register("name", {
                  required: "You must specify a name field",
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.name && (
                <span className="mt-1 text-error">{errors.name.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: "You must specify a email field",
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="mt-1 text-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.password && (
                <span className="mt-1 text-error">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-accent">
                Sin Up
              </button>
            </div>
          </form>
          <p>
            Already Have an account?
            <Link
              to="/login"
              className="text-text-secondary hover:text-primary ml-3 font-bold"
            >
              Log In !
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="flex justify-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
