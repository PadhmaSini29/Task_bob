import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // Update the currentUser state
    setCurrentUser({
      id: 3,
      name: "Padhmasini",
      profilePic: "https://images.pexels.com/photos/1253364/pexels-photo-1253364.jpeg?auto=compress&cs=tinysrgb&w=600",
    });

    console.log("Logged in as:", currentUser); // Check if currentUser is updated
  };

  useEffect(() => {
    // Update localStorage when currentUser changes
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  console.log("Current user:", currentUser); // Log current user for debugging

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
