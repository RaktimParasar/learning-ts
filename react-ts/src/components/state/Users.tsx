import { useState } from "react";

type AuthUsers = {
  name: string;
  email: string;
};

export const Users = () => {
  // const [user, setUser] = useState<AuthUsers | null>(null); // without type assertion
  const [user, setUser] = useState<AuthUsers>({} as AuthUsers); // with type assertion
  const handleLogin = () => {
    setUser({
      name: "Raktim",
      email: "xyz@email.com",
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </>
  );
};
