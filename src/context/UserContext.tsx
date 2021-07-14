import React, { useState, createContext, useContext } from "react";

type UserContextValue = {
  user?: User;

  setUser: (user?: User) => void;
}

const UserContext = createContext<UserContextValue>({
  user: undefined,
  setUser: () => {},
});

export function UserProvider({ children }: { children : React.ReactNode }) {
  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}