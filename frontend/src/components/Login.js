import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook para redirección

  // Función de manejo del submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Por favor, completa ambos campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      if (response.data.success) {
        // Guardar datos en localStorage
        localStorage.setItem("user", JSON.stringify(response.data));

        // Redirigir al Dashboard
        navigate("/dashboard");
      } else {
        setErrorMessage("Credenciales incorrectas.");
      }
    } catch (error) {
      setErrorMessage("Hubo un problema al iniciar sesión.");
    }
  };

  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }} className="d-flex justify-content-center align-items-center">
      <Container className="p-4 bg-dark text-white rounded shadow-lg" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Introduce tu usuario"
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Introduce tu contraseña"
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Iniciar sesión
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
