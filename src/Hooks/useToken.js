import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;

    if (email) {
      axios
        .post(`https://electric-tools-server.herokuapp.com/login`)
        .then((res) => {
          const token = res?.data?.accessToken;
          localStorage.setItem("token", token);
          setToken(token);
        });
    }
  }, [user?.user?.email]);
  return [token];
};

export default useToken;
