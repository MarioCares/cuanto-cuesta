import { useEffect, useState } from "react";
import useCreateProduct from "../hooks/useCreateProduct";
import { useAuth } from "../../../context/AuthContext";
import { Button, Form } from "react-bulma-components";
import LoaderSpinner from "../../Visual/LoaderSpinner";
import AlertDialog, {
  AlertDialogInitialValues,
} from "../../Visual/AlertDialog.jsx";

const Create = () => {
  const [productName, setProductName] = useState("");
  const [alertData, setAlertData] = useState(AlertDialogInitialValues);
  const [showAlert, setShowAlert] = useState(false);
  const [callCreateProduct, loading, status] = useCreateProduct();
  const { user } = useAuth();

  useEffect(() => {
    if (status === "ok") {
      setAlertData({
        message: "Producto Creado!",
        color: "success",
        title: "",
      });
      setShowAlert(true);
    }
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    callCreateProduct({ productName, userId: user.uid });
  };

  const handleChange = ({ target: { value } }) => {
    setProductName(value);
  };

  if (loading)
    return (
      <LoaderSpinner
        title="Creando nuevo producto"
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
            <Form.Input name="product-name" onChange={handleChange} />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Button color="primary">Guardar</Button>
          </Form.Control>
        </Form.Field>
      </form>
    </>
  );
};

export default Create;
