import React from "react";
import axios from "./axios";

import Context from "./Context";

function ContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isManager, setIsManager] = React.useState(false);

  const chackUser = async () => {
    try {
      let res = await axios.get("/chack-auth");
      if (res.data && res.data.role && res.data.role == "manager") {
        setIsAuth(true);
        setIsManager(true);
      } else {
        setIsManager(false);
        setIsAuth(true);
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    let token = localStorage.getItem("token") || null;
    if (!token) return;
    chackUser();
  }, []);

  return (
    <Context.Provider value={{ isAuth, setIsAuth, isManager, setIsManager }}>
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;
