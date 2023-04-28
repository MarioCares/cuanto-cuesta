import { useState } from "react";
import { deleteProduct } from "../../services/products.js";

const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const callDeleteProduct = (id) => {
    setLoading(true);
    setStatus("");

    deleteProduct(id)
      .then(() => {
        setLoading(false);
        setStatus("ok");
      })
      .catch((error) => {
        setLoading(false);
        setStatus(error.code);
        // TODO: eliminar
        console.log("callDeleteProduct error: ", error.code);
      });
  };

  return [callDeleteProduct, loading, status];
};

export default useDeleteProduct;
