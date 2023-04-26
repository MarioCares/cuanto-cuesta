import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../config/firebase.js";

const usePasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const callPasswordReset = (email) => {
    setLoading(true);
    setStatus("");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        setStatus("ok");
      })
      .catch((error) => {
        setLoading(false);
        setStatus(error.code);
      });
  };

  return [callPasswordReset, loading, status];
};

export default usePasswordReset;
