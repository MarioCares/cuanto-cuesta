import PropTypes from "prop-types";
import { Button, Heading } from "react-bulma-components";
import useDeleteProduct from "../hooks/useDeleteProduct.jsx";
import LoaderSpinner from "../../Visual/LoaderSpinner.jsx";
import AlertDialog, {
  AlertDialogInitialValues,
} from "../../Visual/AlertDialog.jsx";
import { useEffect, useState } from "react";

const Delete = ({ id, product }) => {
  const [alertData, setAlertData] = useState(AlertDialogInitialValues);
  const [showAlert, setShowAlert] = useState(false);
  const [callDeleteProduct, loading, status] = useDeleteProduct();

  useEffect(() => {
    if (status === "ok") {
      setAlertData({
        message: "Producto Eliminado!",
        color: "success",
        title: "",
      });
      setShowAlert(true);
    }
  }, [status]);

  const handleDelete = () => {
    callDeleteProduct(id);
  };

  if (loading)
    return (
      <LoaderSpinner
        title="Eliminando producto"
        subtitle="Esperando respuesta"
      />
    );
  return (
    <>
      <AlertDialog data={alertData} isOpen={showAlert} />
      <Heading>Eliminar {product}</Heading>
      <Heading subtitle>
        Las recetas en las cuales exista el producto no se eliminarán
      </Heading>
      <Button color="danger" onClick={handleDelete}>
        Continuar
      </Button>
    </>
  );
};

Delete.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};

export default Delete;
