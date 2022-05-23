import axios from "axios";

const client = axios.create({
  baseURL: "https://electric-tools-server.herokuapp.com/",
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
