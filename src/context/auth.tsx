import type { ReactNode } from "react";
import React, { useContext, useState } from "react";

interface User {
  id: string;
  name: string;
}

export interface AuthContextProps {
  user: User;
  setUser: (val: User) => void;
}

const defaultVal = {
  user: {} as User,
  setUser: () => {},
} as AuthContextProps;

const context = React.createContext<AuthContextProps>(defaultVal);

const { Provider } = context;

export const AuthContextWrapper = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(defaultVal.user);
  const authMemo = React.useMemo(() => ({ user, setUser }), [user, setUser]);
  return <Provider value={authMemo}>{children}</Provider>;
};

export const useAuthContext = () => useContext(context);
