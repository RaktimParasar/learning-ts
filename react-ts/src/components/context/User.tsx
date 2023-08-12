import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Raktim",
      email: "qw@email.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User's name is {userContext.user?.name}</div>
      <div>User's email is {userContext.user?.email}</div>
    </>
  );
};
