import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import Loader from "../../../Utilities/Loader/Loader";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (error) {
    toast.error(error.message);
  }
  if (loading) {
    return <Loader></Loader>;
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    toast.success(`Hi 1 ! ${user?.displayName}`);
    reset();
  };
  if (user) {
    navigate("/");
  }
  console.log(user);

  return (
    <div className="hero my-10 ">
      <div className="card flex-shrink-0 w-[95%] md:w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="text"
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

              <label className="label">
                <p className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-accent">Login</button>
            </div>
          </form>
          <p>
            Have not an account?
            <Link
              to="/sin-up"
              className="text-text-secondary hover:text-primary ml-3 font-bold"
            >
              Create Account !
            </Link>
          </p>
          <div class="divider">OR</div>
          <div className="flex justify-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
