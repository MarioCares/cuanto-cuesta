import ContentHeader from "../Visual/ContentHeader.jsx";
import { Button, Form } from "react-bulma-components";
import { useEffect, useState } from "react";
import useCreateProduct from "./hooks/useCreateProduct.jsx";
import LoaderSpinner from "../Visual/LoaderSpinner.jsx";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const breadcrumbs = [
    {
      text: "Cuanto Cuesta",
      linkTo: "/",
    },
    {
      text: "Productos",
      linkTo: "/products",
    },
    {
      text: "Creación",
      linkTo: "",
    },
  ];
  const [productName, setProductName] = useState("");
  const navigate = useNavigate();
  const [callCreateProduct, loading, status] = useCreateProduct();

  useEffect(() => {
    if (status === "ok") navigate("/products");
  }, [navigate, status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    callCreateProduct({ productName });
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
      <ContentHeader breadcrumbs={breadcrumbs} />
      <hr />
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
