import { useState } from "react";
import { getProducts } from "../../services/products";

const useGetProduct = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");

  const callGetProducts = (userId) => {
    getProducts(userId)
      .then((products) => {
        setLoading(false);
        setProducts(products);
        setStatus("ok");
      })
      .catch((error) => {
        setLoading(false);
        setStatus(error.code);
        // TODO: eliminar
        console.log("useGetProducts callGetProducts error:", error.code);
      });
  };

  return [callGetProducts, loading, status, products];
};

export default useGetProduct;
