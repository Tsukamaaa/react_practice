import { createContext } from "react";
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextNmae = "aaa";
  return (
    <>
      <UserContext.Provider value={contextNmae}>
        {children}
      </UserContext.Provider>
    </>
  );
};
