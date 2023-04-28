import { useState } from "react";
import { updateProduct } from "../../services/products";

const useUpdateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const callUpdateProduct = (id, product) => {
    setLoading(true);
    setStatus("");

    updateProduct(id, product)
      .then(() => {
        setLoading(false);
        setStatus("ok");
      })
      .catch((error) => {
        setLoading(false);
        setStatus(error.code);
      });
  };

  return [callUpdateProduct, loading, status];
};

export default useUpdateProduct;
