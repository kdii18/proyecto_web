// Importo React y la función useNavigate para poder moverme entre páginas
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css"; // Estilos específicos del registro

function Registro() {
  // Hook que me permite navegar entre rutas dentro de la aplicación
  const navigate = useNavigate();

  // Función que se ejecuta cuando el usuario envía el formulario de registro
  const handleSubmit = (e) => {
    e.preventDefault(); // Evito que la página se recargue al enviar el formulario

    // Aquí podría ir la validación de los datos del registro (nombre, correo, contraseñas, etc.)
    // Por ahora, solo redirijo al usuario a la página de intereses
    navigate("/intereses");
  };

  return (
    <div className="registro-container">
      {/* Encabezado con el logo del proyecto */}
      <div className="registro-header">
        <div className="logo">
          <div className="mountain"></div>
          <h1>
            <span className="black">Pacha</span>
            <span className="orange">Qutec</span>
          </h1>
        </div>
        <p className="subtitle">TURISMO AREQUIPA</p>
      </div>

      {/* Sección principal con el formulario */}
      <div className="registro-form-section">
        <form className="registro-form" onSubmit={handleSubmit}>
          {/* Campo para el nombre o apodo */}
          <div className="form-group">
            <label>Nombre o apodo</label>
            <input type="text" placeholder="pepito123" required />
          </div>

          {/* Campo para el correo electrónico */}
          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="tucorreo@email.com" required />
          </div>

          {/* Campo para la contraseña */}
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="............." required />
          </div>

          {/* Campo para confirmar la contraseña */}
          <div className="form-group">
            <label>Repetir contraseña</label>
            <input type="password" placeholder="............." required />
          </div>

          {/* Casilla para aceptar los términos del proyecto */}
          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Acepto los Términos de Uso del proyecto académico.
            </label>
          </div>

          {/* Botón para enviar el formulario y crear la cuenta */}
          <button type="submit" className="btn-registro">
            Crear cuenta
          </button>
        </form>

        {/* Enlace alternativo para ir al login si ya tiene cuenta */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>¿Ya tienes cuenta?</p>
          <button
            className="btn-registro"
            style={{ backgroundColor: "#666" }}
            onClick={() => navigate("/login")}
          >
            Ir a Iniciar sesión
          </button>
        </div>
      </div>

      {/* Pie de página con créditos */}
      <footer className="registro-footer">s
        <p>
          Proyecto académico - Desarrollo Basado en Plataformas <br />
          Universidad Católica San Pablo <br />
          Copyright© 2025.
          Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

// Exporto el componente Registro para poder usarlo en otras partes del proyecto
export default Registro;
