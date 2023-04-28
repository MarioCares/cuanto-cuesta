import { useEffect, useState } from "react";
import { Button, Form } from "react-bulma-components";
import LoaderSpinner from "../../Visual/LoaderSpinner";
import AlertDialog, {
  AlertDialogInitialValues,
} from "../../Visual/AlertDialog.jsx";
import useUpdateProduct from "../hooks/useUpdateProduct";
import PropTypes from "prop-types";

const Update = ({ id, currentProductName }) => {
  const [productName, setProductName] = useState(currentProductName);
  const [alertData, setAlertData] = useState(AlertDialogInitialValues);
  const [showAlert, setShowAlert] = useState(false);
  const [callEditProduct, loading, status] = useUpdateProduct();

  useEffect(() => {
    if (status === "ok") {
      setAlertData({
        message: "Producto Actualizado!",
        color: "success",
        title: "",
      });
      setShowAlert(true);
    }
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    callEditProduct(id, { productName });
  };

  const handleChange = ({ target: { value } }) => {
    setProductName(value);
  };

  if (loading)
    return (
      <LoaderSpinner
        title="Actualizando producto"
        subtitle="Esperando respuesta"
      />
    );

  return (
    <>
      <AlertDialog data={alertData} isOpen={showAlert} />
      <form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Label>Nombre Producto</Form.Label>
          <Form.Control>
            <Form.Input
              name="product-name"
              onChange={handleChange}
              value={productName}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Button color="warning">Actualizar</Button>
          </Form.Control>
        </Form.Field>
      </form>
    </>
  );
};

Update.propTypes = {
  id: PropTypes.string.isRequired,
  currentProductName: PropTypes.string.isRequired,
};

export default Update;
