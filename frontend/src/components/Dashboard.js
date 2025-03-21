import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Cargar datos del usuario desde localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // Redirigir si no hay usuario
    }
  }, [navigate]);

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("user"); // Eliminar datos del usuario
    navigate("/"); // Volver al login
  };

  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }} className="d-flex justify-content-center align-items-center">
      <Container className="p-4 bg-dark text-white rounded shadow-lg text-center">
        <h2>Bienvenido, {user?.username}!</h2>
        <p>Tu contraseña es: {user?.password}</p>
        <Button variant="danger" onClick={handleLogout}>Cerrar sesión</Button>
      </Container>
    </div>
  );
};

export default Dashboard;
