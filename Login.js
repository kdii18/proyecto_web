// Importo React y la función useNavigate para poder moverme entre páginas
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css"; // Estilos del login

function Login() {
  // Hook de navegación, me permite cambiar de ruta sin recargar la página
  const navigate = useNavigate();

  // Función que se ejecuta cuando envío el formulario de login
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Acá podría ir la validación de usuario (por ahora no la implemento)
    // Luego de iniciar sesión, redirijo al usuario a la página de intereses
    navigate("/intereses");
  };

  return (
    <div className="container">
      {/* Encabezado con el logo y el título del proyecto */}
      <div className="header">
        <div className="logo">
          <div className="mountain"></div>
          <h1>
            <span className="black">Pacha</span>
            <span className="orange">Qutec</span>
          </h1>
        </div>
        <p className="subtitle">TURISMO AREQUIPA</p>
      </div>

      {/* Sección principal de la página */}
      <div className="content">
        {/* Imagen lateral con descripción */}
        <div className="image-section">
          <img
            src="https://media.istockphoto.com/id/809109190/es/foto/catedral-en-plaza-de-armas-arequipa-per%C3%BA.jpg?s=612x612&w=0&k=20&c=UhQv_Yvq36FvFbOLjegTH0txHrv5AyztBaWuayUmN9Y="
            alt="Arequipa"
          />
          <p>
            ¡Descubre Arequipa! <br /> Patrimonio cultural de la humanidad
          </p>
        </div>

        {/* Formulario de inicio de sesión */}
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <label>Correo electrónico</label>
            <input type="email" placeholder="tucorreo@email.com" required />

            <label>Contraseña</label>
            <input type="password" placeholder="............." required />

            <button type="submit" className="btn">
              Iniciar sesión
            </button>
          </form>

          {/* Opciones adicionales debajo del formulario */}
          <div className="extra">
            <p>¿Olvidaste tu contraseña?</p>
            <p>¿No tienes cuenta?</p>

            {/* Botón que lleva al registro */}
            <button className="btn" onClick={() => navigate("/registro")}>
              Crear una cuenta nueva
            </button>
          </div>
        </div>
      </div>

      {/* Pie de página con créditos */}
      <footer>
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

// Exporto el componente para poder usarlo en otras partes del proyecto
export default Login;
