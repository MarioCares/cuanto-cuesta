import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase.js";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const callSetSignUp = (newUser) => {
    setLoading(true);
    setStatus("");

    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then(() => {
        setLoading(false);
        setStatus("ok");
      })
      .catch((error) => {
        setLoading(false);
        setStatus(error.code);
      });
  };

  return [callSetSignUp, loading, status];
};

export default useSignUp;
