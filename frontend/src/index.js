import React from "react";
import ReactDOM from "react-dom/client";  // Asegúrate de importar desde 'react-dom/client'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';  // Importamos Bootstrap para usar sus estilos

// Aquí usamos createRoot en lugar de render para React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
