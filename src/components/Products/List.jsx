/* eslint-disable react-refresh/only-export-components */

import { Button, Table } from "react-bulma-components";
import { Link, useLoaderData } from "react-router-dom";
import ContentHeader from "../Visual/ContentHeader";
import { getProducts } from "../services/products";

const List = () => {
  const { products } = useLoaderData();
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
      text: "Listado",
      linkTo: "",
    },
  ];

  const ButtonAddProduct = () => (
    <Button renderAs={Link} color="primary" to="/products/create">
      Nuevo
    </Button>
  );

  return (
    <>
      <ContentHeader breadcrumbs={breadcrumbs} button={<ButtonAddProduct />} />
      <hr />
      <Table.Container>
        <Table size="fullwidth" bordered>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.length ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.productName}</td>
                  <td>{product.id}</td>
                </tr>
              ))
            ) : (
              <td colSpan="2">Aún no registras productos</td>
            )}
          </tbody>
        </Table>
      </Table.Container>
    </>
  );
};

const loader = async () => {
  const products = await getProducts();
  return { products };
};

export { List as default, loader };
