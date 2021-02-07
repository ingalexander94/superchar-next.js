import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children, authState: { token = "", user = null } }) => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState({ token, user });

  return (
    <AuthContext.Provider value={{ show, setShow, auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
