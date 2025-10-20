import React, { useState } from "react";
// MODIFICACIÓN INICIO: Importación de useNavigate para navegación
import { useNavigate } from "react-router-dom";
// MODIFICACIÓN FIN
import "./Intereses.css";

function Intereses() {
  // MODIFICACIÓN INICIO: Hook para navegar entre rutas
  const navigate = useNavigate();
  // MODIFICACIÓN FIN
  const [seleccionados, setSeleccionados] = useState([]);

  const opciones = [
    {
      id: 1,
      titulo: "Monasterio de Santa Catalina",
      descripcion: "Lugares Emblemáticos",
      imagen: "https://www.peru.travel/Contenido/General/Imagen/es/564/1.1/santa-catalina.jpg"
    },
    {
      id: 2,
      titulo: "Picanterías tradicionales",
      descripcion: "Gastronomía arequipeña",
      imagen: "https://larepublica.cronosmedia.glr.pe/migration/images/KKMCLVFVQ5GOXHOTEFU56J4H44.jpg"
    },
    {
      id: 3,
      titulo: "Volcán Misti",
      descripcion: "Icono natural de Arequipa",
      imagen: "https://media-cdn.tripadvisor.com/media/photo-s/13/72/f9/f4/vista-de-volcan-misti.jpg"
    }
  ];

  const toggleSeleccion = (id) => {
    if (seleccionados.includes(id)) {
      setSeleccionados(seleccionados.filter(item => item !== id));
    } else {
      setSeleccionados([...seleccionados, id]);
    }
  };

  return (
    <div className="intereses-container">
      {/* Logo y título */}
      <div className="intereses-header">
        <div className="logo">
          <div className="mountain"></div>
          <h1>
            <span className="black">Pacha</span>
            <span className="orange">Qutec</span>
          </h1>
        </div>
        <p className="subtitle">TURISMO AREQUIPA</p>
      </div>

      {/* Título principal */}
      <div className="titulo-principal">
        <h1>Escoge cuál te gusta más</h1>
      </div>

      {/* Opciones de intereses */}
      <div className="opciones-grid">
        {opciones.map((opcion) => (
          <div 
            key={opcion.id}
            className={`opcion-card ${seleccionados.includes(opcion.id) ? 'seleccionada' : ''}`}
            onClick={() => toggleSeleccion(opcion.id)}
          >
            <div className="opcion-imagen">
              <img src={opcion.imagen} alt={opcion.titulo} />
              <div className="check-icon">
                {seleccionados.includes(opcion.id) && '✓'}
              </div>
            </div>
            <div className="opcion-contenido">
              <h3>{opcion.titulo}</h3>
              <p>{opcion.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Línea divisoria */}
      <div className="divisor"></div>

      {/* MODIFICACIÓN INICIO: Botón continuar que navega a /for-you */}
      <div className="continuar-container">
        <button 
          className="btn-continuar"
          onClick={() => navigate("/for-you")}
        >
          Continuar
        </button>
      </div>
      {/* MODIFICACIÓN FIN */}

      {/* Footer */}
      <footer className="intereses-footer">
        <p>
          Proyecto académico - Desarrollo Basado en Plataformas <br />
          Universidad Católica San Pablo <br />
          Copyright© 2025. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Intereses;