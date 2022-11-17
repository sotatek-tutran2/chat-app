import { useEffect, useState } from "react";
import { User } from "../interfaces";
import { getAuthUserRequest } from "../utils";

const useAuth = () => {
  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const controller = new AbortController();

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
