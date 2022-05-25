import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";

const client = axios.create({
  baseURL: "https://electric-tools-server.herokuapp.com/",
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      signOut(auth);
      localStorage.removeItem("token");
    }
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
