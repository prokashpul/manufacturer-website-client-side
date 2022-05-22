import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import useToken from "../../../Hooks/useToken";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  Title("Login Now");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  if (error) {
    toast.error(error.message);
  }
  if (loading) {
    return <Loader></Loader>;
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    toast.success(`Hello  ! welcome to Pro Electronic`);
    reset();
  };

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="hero my-10 ">
      <div className="card flex-shrink-0 w-[95%] md:w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center font-bold text-3xl mt-5">Login Now !</h2>
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
            Don't Have an account?
            <Link
              to="/sin-up"
              className="text-text-secondary hover:text-primary ml-3 font-bold"
            >
              Create Account !
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

export default Login;
