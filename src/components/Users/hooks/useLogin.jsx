import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase.js";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const callLogIn = (user) => {
    setLoading(true);
    setStatus("");

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        setLoading(false);
        setStatus("ok");
      })
      .catch((error) => {
        setLoading(false);
        setStatus(error.code);
      });
  };

  return [callLogIn, loading, status];
};

export default useLogin;
