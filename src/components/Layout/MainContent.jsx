import { Container, Heading, Hero, Tile } from "react-bulma-components";
import { useAuth } from "../../context/AuthContext.jsx";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InfoCardsStyled, WelcomeStyled } from "./styles/MainContentStyled.jsx";
import ContentHeader from "../Visual/ContentHeader.jsx";

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

  useEffect(() => {
    if (!user) navigate("/users/login");
  }, [navigate, user]);

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
                <Heading>Productos</Heading>
              </Link>
              <Heading subtitle>233</Heading>
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
