import { useState } from "react";
import { createProduct } from "../../services/products";

const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const callCreateProduct = (product) => {
    setLoading(true);
    setStatus("");

    createProduct(product)
      .then(() => {
        setLoading(false);
        setStatus("ok");
      })
      .catch((error) => {
        setLoading(false);
        setStatus(error.code);
      });
  };

  return [callCreateProduct, loading, status];
};

export default useCreateProduct;
