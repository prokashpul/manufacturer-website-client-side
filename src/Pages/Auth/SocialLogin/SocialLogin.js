import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import useToken from "../../../Hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  if (loading) {
    return <button className="btn btn-outline loading">loading</button>;
  }
  if (error) {
    toast.error(error.message);
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <button
      onClick={() => signInWithGoogle()}
      className="btn btn-outline md:shadow-md"
    >
      <img src="https://i.ibb.co/cvbHMw3/Google.png" alt="" />
    </button>
  );
};

export default SocialLogin;
