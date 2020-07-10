import React, { useEffect, useContext } from "react";
import { Context } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(Context);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
