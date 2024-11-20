import { createContext, useContext, useState } from "react";
const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Sagar",
    email: "sagar@gmail.com",
    dob: "19/03/2024",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
