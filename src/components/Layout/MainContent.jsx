import { Container, Heading, Hero, Icon, Tile } from "react-bulma-components";
import { useAuth } from "../../context/AuthContext.jsx";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InfoCardsStyled, WelcomeStyled } from "./styles/MainContentStyled.jsx";
import ContentHeader from "../Visual/ContentHeader.jsx";
import useGetProducts from "../Products/hooks/useGetProducts.jsx";
import LoaderSpinner from "../Visual/LoaderSpinner.jsx";
import ErrorPanel from "../Visual/ErrorPanel.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  const breadcrumbs = [
    {
      text: "Cuanto Cuesta",
      linkTo: "/",
    },
    {
      text: "Escritorio",
      linkTo: "",
    },
  ];

  const { user } = useAuth();
  const navigate = useNavigate();
  const [callGetProducts, loading, status, products] = useGetProducts();

  useEffect(() => {
    if (!user) navigate("/users/login");
    else callGetProducts(user.uid);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, user]);

  if (loading) return <LoaderSpinner title="Obteniendo información" />;
  if (["invalid-argument", "resource-exhausted"].includes(status)) {
    return <ErrorPanel title="No puedo obtener datos" subtitle="" />;
  }

  return (
    <>
      <ContentHeader breadcrumbs={breadcrumbs} />
      <WelcomeStyled color="info" size="small">
        <Hero.Body>
          <Container>
            <Heading>Hola, Pepito</Heading>
            <Heading subtitle>Qué hacemos?</Heading>
          </Container>
        </Hero.Body>
      </WelcomeStyled>
      <InfoCardsStyled>
        <Tile kind="ancestor" textAlign="center">
          <Tile kind="parent">
            <Tile kind="child" className="box">
              <Link to="/products">
                <Heading>
                  <span className="icon-text">
                    <span color="link">{products.length}</span>
                    <Icon color="link">
                      <FontAwesomeIcon icon={faForward} />
                    </Icon>
                  </span>
                </Heading>
              </Link>
              <Heading subtitle>Productos</Heading>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile kind="child" className="box">
              <Heading>Productos 2</Heading>
              <Heading subtitle>1</Heading>
            </Tile>
          </Tile>
        </Tile>
      </InfoCardsStyled>
    </>
  );
};

export default MainContent;
