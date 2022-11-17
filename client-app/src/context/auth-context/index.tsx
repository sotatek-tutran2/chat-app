import { createContext, ReactElement, useState } from "react";
import { User } from "../../interfaces";

export type AuthContextType = {
  user?: User;
  setUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

export function AuthCtxProvider({ children }: { children: ReactElement }) {
  const [user, setUser] = useState<User>();
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: (data: User) => setUser(data),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
