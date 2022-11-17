import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextType } from "../context";
import { getAuthUserRequest } from "../utils";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const controller = new AbortController();
  const { user, setUser } = useContext<AuthContextType>(AuthContext);

  function onFetchUserInfo() {
    setIsLoading(true);
    getAuthUserRequest()
      .then(({ data }) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    onFetchUserInfo();
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, isLoading };
};

export default useAuth;
