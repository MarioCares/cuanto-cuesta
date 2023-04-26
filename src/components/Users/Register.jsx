import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "./hooks/useSignUp";
import AlertDialog, { AlertDialogInitialValues } from "../Visual/AlertDialog";
import { AuthErrors } from "./AuthErrors.js";
import { Button, Form, Heading, Hero, Level } from "react-bulma-components";
import { HeroBodyBox, LoginBox } from "./styles/LoginStyled";
import LoaderSpinner from "../Visual/LoaderSpinner.jsx";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState(AlertDialogInitialValues);
  const [callSignUp, loading, status] = useSignUp();

  useEffect(() => {
    if (status === "ok") navigate("/users/login");
    else if (status !== "") {
      setShowAlert(true);
      setAlertData(AuthErrors[status]);
    }
  }, [navigate, status]);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callSignUp(user);
  };

  if (loading)
    return (
      <LoaderSpinner
        title="Registro de usuarios"
        subtitle="Enviando petición"
      />
    );

  return (
    <>
      <>
        <Hero size="fullheight">
          <HeroBodyBox text="center">
            <LoginBox>
              <AlertDialog data={alertData} isOpen={showAlert} />
              <Heading size="1">Registro de Usuarios</Heading>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </Form.Control>
                </Form.Field>
                <Button fullwidth color="primary" size="medium" rounded submit>
                  Registrar Cuenta
                </Button>
              </form>
              <Level>
                <Level.Item textAlign="center">
                  <Link to="/users/login">Volver al Login</Link>
                </Level.Item>
              </Level>
            </LoginBox>
          </HeroBodyBox>
        </Hero>
      </>
    </>
  );
};

export default Register;
