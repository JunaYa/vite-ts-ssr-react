import type { ReactNode } from "react";
import React, { useContext, useState } from "react";

export interface Context {
  name: string;
  setName: (val: string) => void;
}
const defaultVal = {
  name: "",
  setName: () => {},
} as Context;

const context = React.createContext(defaultVal);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState(defaultVal.name);
  const contextMemo = React.useMemo(() => ({ name, setName }), [name, setName]);
  return <Provider value={contextMemo}>{children}</Provider>;
};

export const useAppContext = () => useContext(context);
