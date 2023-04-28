import { Button, Icon, Table } from "react-bulma-components";
import ContentHeader from "../Visual/ContentHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext.jsx";
import useGetProducts from "./hooks/useGetProducts.jsx";
import LoaderSpinner from "../Visual/LoaderSpinner.jsx";
import ErrorPanel from "../Visual/ErrorPanel.jsx";
import { useEffect, useState } from "react";
import CustomModal from "../Visual/CustomModal.jsx";
import {
  Create as CreateModal,
  Update as UpdateModal,
  Delete as DeleteModal,
} from "./modal/index.js";

const List = () => {
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
  const [modal, setModal] = useState({
    isOpen: false,
    content: <></>,
    title: "",
  });
  const { user } = useAuth();
  const [callGetProducts, loading, status, products] = useGetProducts();

  useEffect(() => {
    callGetProducts(user.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const ButtonAddProduct = () => (
    <Button
      color="primary"
      onClick={() => {
        setModal({ title: "Nuevo", isOpen: true, content: <CreateModal /> });
      }}
    >
      Nuevo
    </Button>
  );

  const handleEdit = (id, productName) => {
    setModal({
      title: "Editar",
      isOpen: true,
      content: <UpdateModal id={id} currentProductName={productName} />,
    });
  };

  const handleDelete = (id, productName) => {
    setModal({
      title: "Borrar Producto",
      isOpen: true,
      content: <DeleteModal id={id} product={productName} />,
    });
  };

  const handleOnCloseModal = () => {
    setModal({ ...modal, isOpen: false });
    callGetProducts(user.uid);
  };

  if (loading) return <LoaderSpinner title="Obteniendo información" />;
  if (["invalid-argument", "resource-exhausted"].includes(status)) {
    return <ErrorPanel title="No puedo obtener datos" subtitle="" />;
  }

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
                <tr key={product.id} data-id={product.id}>
                  <td>{product.productName}</td>
                  <td>
                    <Button.Group>
                      <Button
                        color="warning"
                        onClick={() => {
                          handleEdit(product.id, product.productName);
                        }}
                      >
                        <Icon>
                          <FontAwesomeIcon icon={faEdit} />
                        </Icon>
                      </Button>
                      <Button
                        color="danger"
                        onClick={() => {
                          handleDelete(product.id, product.productName);
                        }}
                      >
                        <Icon>
                          <FontAwesomeIcon icon={faRemove} />
                        </Icon>
                      </Button>
                    </Button.Group>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Aún no registras productos</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Table.Container>
      <CustomModal
        onClose={handleOnCloseModal}
        isOpen={modal.isOpen}
        title={modal.title}
      >
        {modal.content}
      </CustomModal>
    </>
  );
};

export default List;
