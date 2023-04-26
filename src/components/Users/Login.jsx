import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertDialog, { AlertDialogInitialValues } from "../Visual/AlertDialog";
import { AuthErrors } from "./AuthErrors";
import useLogIn from "./hooks/useLogIn";
import { LoginBox, HeroBodyBox } from "./styles/LoginStyled";
import { Button, Form, Heading, Hero, Level } from "react-bulma-components";
import LoaderSpinner from "../Visual/LoaderSpinner.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState(AlertDialogInitialValues);
  const [callLogIn, loading, status] = useLogIn();

  useEffect(() => {
    if (status === "ok") navigate("/");
    else if (status !== "") {
      setShowAlert(true);
      setAlertData(AuthErrors[status]);
    }
  }, [navigate, status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    callLogIn({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  if (loading)
    return <LoaderSpinner title="Login usuario" subtitle="Enviando petición" />;

  return (
    <>
      <Hero size="fullheight">
        <HeroBodyBox text="center">
          <LoginBox>
            <AlertDialog data={alertData} isOpen={showAlert} />
            <Heading size="1">Ingreso de Miembros</Heading>
            <form onSubmit={handleSubmit}>
              <Form.Field>
                <Form.Control>
                  <Form.Input
                    size="medium"
                    rounded
                    type="email"
                    id="email"
                    name="email"
                    autoFocus
                    autoComplete="email"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                  <Form.Input
                    size="medium"
                    rounded
                    type="password"
                    id="password"
                    name="password"
                    autoFocus
                    autoComplete="password"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Button fullwidth color="primary" size="medium" rounded submit>
                Ingresar
              </Button>
            </form>
            <Level>
              <Level.Item textAlign="center">
                <Link to="/users/resetPassword">Olvidé mi contraseña</Link>
              </Level.Item>
              <Level.Item textAlign="center">
                <Link to="/users/register">No tienes cuenta? Regístrate!</Link>
              </Level.Item>
            </Level>
          </LoginBox>
        </HeroBodyBox>
      </Hero>
    </>
  );
};

export default Login;
