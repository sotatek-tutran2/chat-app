import { useEffect, useState } from "react";
import { getAuthUserRequest } from "../utils";

const useAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getAuthUserRequest()
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { user };
};

export default useAuth;
