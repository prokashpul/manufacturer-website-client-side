import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (loading) {
    return <button class="btn btn-outline loading">loading</button>;
  }
  if (error) {
    toast.error(error.message);
  }
  if (user) {
    navigate("/");
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
