import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForYouPage.css";

function ForYouPage() {
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalLugarAbierto, setModalLugarAbierto] = useState(null);
  const [lugaresReservados, setLugaresReservados] = useState([]);
  
  // Estados para el chat
  const [modalChatAbierto, setModalChatAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([
    { id: 1, texto: "Hola, soy tu asistente virtual de viajes, ¿en qué te puedo ayudar el día de hoy?", esUsuario: false }
  ]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const [favoritos, setFavoritos] = useState([
    {
      id: 1,
      nombre: "Lagunas de Salinas",
      imagen: "https://skyperu.com/wp-content/uploads/2022/11/IMAGEN-PORTADA_con-https://skyperu.comhttps://gondolatours.pe/wp-content/uploads/2018/12/salinas_2.jpg/wp-content/uploads/2022/11/279410403_317072800558530_5578964687260798936_n-1024x1024.jpglogo-2.pnghttps://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTZ_npZCJg4WGMFh0Mx2Sks1JVzuOFqVIdr4EB5bn1PnsEUwYoTCpBRDgbAao7PwU6m9xG9okMe7DFDTHi0D_-GQZJTDrcPTbCbXuArIA"
    },
    {
      id: 2,
      nombre: "Monasterio de Santa Catalina",
      imagen: "https://elbuho.pe/wp-content/uploads/2020/09/santa-catalina3.jpg"
    },
    {
      id: 3,
      nombre: "Museo Santuarios Andinos",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQYKRt7pE8KITR1yR-efcetaNowyhX2sB9Q&s"
    }
  ]);

  const toggleModal = () => {
    setModalAbierto(!modalAbierto);
  };

  const abrirModalLugar = (lugar) => {
    setModalLugarAbierto(lugar);
  };

  const cerrarModalLugar = () => {
    setModalLugarAbierto(null);
  };

  const reservarTour = (lugar) => {
    const nuevaReserva = {
      id: Date.now(),
      nombre: lugar.nombre,
      imagen: lugar.imagen,
      fechaReserva: new Date().toLocaleDateString('es-ES'),
      estado: "Confirmado",
      fechaTour: "Próxima semana",
      codigoReserva: `RES-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    };
    
    setLugaresReservados(prev => [nuevaReserva, ...prev]);
    setModalAbierto(false);
    setModalLugarAbierto(null);
    
    alert(`¡Tour reservado exitosamente!\nCódigo de reserva: ${nuevaReserva.codigoReserva}`);
  };

  const cancelarReserva = (id) => {
    setLugaresReservados(prev => prev.filter(reserva => reserva.id !== id));
  };

  // Función para añadir a favoritos
  const añadirAFavoritos = (lugar) => {
    // Verificar si ya está en favoritos
    if (!favoritos.some(fav => fav.id === lugar.id)) {
      const nuevoFavorito = {
        id: lugar.id,
        nombre: lugar.nombre,
        imagen: lugar.imagen
      };
      setFavoritos(prev => [...prev, nuevoFavorito]);
      alert(`${lugar.nombre} añadido a favoritos`);
    } else {
      alert(`${lugar.nombre} ya está en favoritos`);
    }
  };

  // Función para eliminar de favoritos
  const eliminarDeFavoritos = (id) => {
    setFavoritos(prev => prev.filter(fav => fav.id !== id));
    alert("Eliminado de favoritos");
  };

  // Funciones para el chat
  const toggleModalChat = () => {
    setModalChatAbierto(!modalChatAbierto);
  };

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() === "") return;
    
    // Agregar mensaje del usuario
    const mensajeUsuario = {
      id: Date.now(),
      texto: nuevoMensaje,
      esUsuario: true
    };
    
    setMensajes(prev => [...prev, mensajeUsuario]);
    setNuevoMensaje("");
    
    // Respuesta automática del asistente
    setTimeout(() => {
      const respuestaAsistente = {
        id: Date.now() + 1,
        texto: "Función en desarrollo - pronto podré ayudarte con todas tus consultas de viajes!",
        esUsuario: false
      };
      setMensajes(prev => [...prev, respuestaAsistente]);
    }, 1000);
  };

  const manejarTeclaEnter = (e) => {
    if (e.key === "Enter") {
      enviarMensaje();
    }
  };

  // Datos completos para los lugares con información detallada
  const lugares = [
    {
      id: 1,
      nombre: "Barrio san Lázaro",
      imagen: "https://www.amarujourneyperu.com/blog/wp-content/uploads/lazaro1.webp",
      descripcion: "El barrio más antiguo de Arequipa, conocido como el 'Barrio del Silencio' por sus calles tranquilas y arquitectura colonial.",
      ubicacion: "Centro histórico de Arequipa",
      horarios: "Siempre abierto",
      precios: "Gratuito",
      recomendaciones: [
        "Visitar en la tarde para mejores fotos",
        "Recorrer las callecitas empedradas",
        "Conocer la iglesia de San Lázaro"
      ],
      atractivos: [
        "Arquitectura colonial",
        "Calles empedradas",
        "Ambiente tranquilo",
        "Fotografía cultural"
      ]
    },
    {
      id: 2,
      nombre: "Casa del Moral",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4XG-leyshxl1GTKYI_E__EgONe-ddric4A&s",
      descripcion: "Una de las casonas coloniales más importantes de Arequipa, famosa por su portada tallada en piedra volcánica.",
      ubicacion: "Calle Moral 318, Centro Histórico",
      horarios: "Lunes a Sábado: 9:00 AM - 5:00 PM",
      precios: "Adultos: S/ 10.00, Estudiantes: S/ 5.00",
      recomendaciones: [
        "Apreciar la arquitectura colonial",
        "Visitar el museo interno",
        "Tomar fotos de la fachada"
      ],
      atractivos: [
        "Portada barroca",
        "Patio colonial",
        "Museo de arte",
        "Arquitectura arequipeña"
      ]
    },
    {
      id: 3,
      nombre: "Museo Santuarios Andinos",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQYKRt7pE8KITR1yR-efcetaNowyhX2sB9Q&s",
      descripcion: "Museo que alberga a la famosa Momia Juanita, una joven inca sacrificada en el volcán Ampato.",
      ubicacion: "Calle La Merced 110, Centro Histórico",
      horarios: "Lunes a Sábado: 9:00 AM - 6:00 PM, Domingo: 9:00 AM - 3:00 PM",
      precios: "General: S/ 20.00, Estudiantes: S/ 10.00",
      recomendaciones: [
        "Tour guiado recomendado",
        "No tomar fotos a la momia",
        "Abrigarse por el clima controlado"
      ],
      atractivos: [
        "Momia Juanita",
        "Artefactos incas",
        "Historia andina",
        "Exposiciones culturales"
      ]
    }
  ];

  // Datos del Cañón del Colca para el modal
  const canionDelColca = {
    id: 4,
    nombre: "Cañón del Colca",
    imagen: "https://www.peru.travel/Contenido/Atractivo/Imagen/es/8/1.2/Principal/Ca%C3%B1on%20del%20Colca.jpg"
  };

  return (
    <div className="foryou-container">
      {/* Header con navegación */}
      <header className="foryou-header">
        <div className="logo">
          <div className="mountain"></div>
          <h1>
            <span className="black">Pacha</span>
            <span className="orange">Qutec</span>
          </h1>
        </div>
        <nav className="navigation">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#lugares" className="nav-link">Lugares</a>
          <a href="#favoritos" className="nav-link">Favoritos</a>
          <a href="#contactanos" className="nav-link">Contáctanos</a>
          <button 
            className="nav-link" 
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
            onClick={() => navigate("/login")}
          >
            Cerrar sesión
          </button>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="foryou-main">
        {/* Banner Cañon del Colca CON IMAGEN */}
        <section 
          className="banner-colca-con-imagen"
          style={{ 
            backgroundImage: `url(https://www.peru.travel/Contenido/Atractivo/Imagen/es/8/1.2/Principal/Ca%C3%B1on%20del%20Colca.jpg)`
          }}
        >
          <div className="banner-overlay">
            <div className="banner-content-con-imagen">
              <h1>Cañon del Colca</h1>
              <button className="ver-mas-btn-con-imagen" onClick={toggleModal}>
                ver más
              </button>
            </div>
          </div>
        </section>

        {/* Línea divisoria */}
        <div className="divisor"></div>

        {/* Sección de Lugares Reservados */}
        {lugaresReservados.length > 0 && (
          <>
            <section className="reservados-section">
              <h2 className="section-title">Tus Reservas Confirmadas</h2>
              <div className="reservados-grid">
                {lugaresReservados.map((reserva) => (
                  <div key={reserva.id} className="reserva-card">
                    <div className="reserva-image">
                      <img src={reserva.imagen} alt={reserva.nombre} />
                      <div className="reserva-badge">{reserva.estado}</div>
                    </div>
                    <div className="reserva-info">
                      <h3>{reserva.nombre}</h3>
                      <div className="reserva-details">
                        <p><strong>Fecha de reserva:</strong> {reserva.fechaReserva}</p>
                        <p><strong>Fecha del tour:</strong> {reserva.fechaTour}</p>
                        <p><strong>Código de reserva:</strong> {reserva.codigoReserva}</p>
                      </div>
                      <button 
                        className="btn-cancelar"
                        onClick={() => cancelarReserva(reserva.id)}
                      >
                        Cancelar Reserva
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <div className="divisor"></div>
          </>
        )}

        {/* Sección Lugares */}
        <section className="lugares-section">
          <h2 className="section-title">Lugares</h2>
          <div className="lugares-grid">
            {lugares.map((lugar) => (
              <div 
                key={lugar.id} 
                className="lugar-card"
                onClick={() => abrirModalLugar(lugar)}
              >
                <div className="lugar-image">
                  <img src={lugar.imagen} alt={lugar.nombre} />
                </div>
                <h3>{lugar.nombre}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Línea divisoria */}
        <div className="divisor"></div>

        {/* Sección Tus favoritos */}
        <section className="favoritos-section">
          <h2 className="section-title">Tus favoritos</h2>
          <div className="favoritos-grid">
            {favoritos.map((favorito) => (
              <div key={favorito.id} className="favorito-card">
                <div className="favorito-image">
                  <img src={favorito.imagen} alt={favorito.nombre} />
                </div>
                <h3>{favorito.nombre}</h3>
                <button 
                  className="btn-eliminar-favorito"
                  onClick={() => eliminarDeFavoritos(favorito.id)}
                >
                  Eliminar de Favoritos
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Línea divisoria */}
        <div className="divisor"></div>

        {/* Sección Tus reseñas */}
        <section className="resenas-section-simple">
          <h2 className="section-title">Tus reseñas</h2>
          <div className="resena-card-simple">
            <h3 className="resena-lugar-title">Volcán Misti</h3>
            <p className="resena-autor">Alessandro P.</p>
            <p className="resena-texto">
              Visitar el volcán Misti fue impresionante. Las vistas de Arequipa y los volcanes cercanos son espectaculares, y la caminata llena de aventura y aire puro. Una experiencia inolvidable que combina naturaleza, cultura y emoción.
            </p>
          </div>
        </section>
      </main>

      {/* Modal para Cañón del Colca */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={toggleModal}>×</button>
            
            <div className="modal-header">
              <h2>Cañón del Colca</h2>
              <p>Uno de los cañones más profundos del mundo</p>
            </div>

            <div className="modal-body">
              <div className="modal-imagenes">
                <img src="https://www.peru.travel/Contenido/Atractivo/Imagen/es/8/1.2/Principal/Ca%C3%B1on%20del%20Colca.jpg" alt="Cañón del Colca" />
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/99/54/af/canon-del-colca.jpg?w=1200&h=-1&s=1" alt="Vista del cañón" />
              </div>

              <div className="modal-info">
                <div className="info-section">
                  <h3>📍 Ubicación</h3>
                  <p>Provincia de Caylloma, Arequipa, Perú</p>
                </div>

                <div className="info-section">
                  <h3>🕒 Horarios de Atención</h3>
                  <p><strong>Lunes a Domingo:</strong> 6:00 AM - 5:00 PM</p>
                  <p><strong>Mejor época para visitar:</strong> Abril - Noviembre</p>
                </div>

                <div className="info-section">
                  <h3>🎫 Precios de Entrada</h3>
                  <p><strong>Turistas nacionales:</strong> S/ 20.00</p>
                  <p><strong>Turistas extranjeros:</strong> S/ 70.00</p>
                  <p><strong>Estudiantes:</strong> S/ 10.00</p>
                </div>

                <div className="info-section">
                  <h3>🚗 Rutas de Acceso</h3>
                  <p><strong>Desde Arequipa:</strong> 3-4 horas en auto</p>
                  <p><strong>Ruta más popular:</strong> Arequipa - Chivay - Cruz del Cóndor</p>
                  <p><strong>Tours disponibles:</strong> Full day, 2 días/1 noche</p>
                </div>

                <div className="info-section">
                  <h3>⭐ Atractivos Principales</h3>
                  <ul>
                    <li>Mirador Cruz del Cóndor</li>
                    <li>Aguas termales de La Calera</li>
                    <li>Pueblos tradicionales: Chivay, Yanque, Maca</li>
                    <li>Observación de cóndores</li>
                    <li>Trekking por el cañón</li>
                  </ul>
                </div>

                <div className="info-section">
                  <h3>💡 Recomendaciones</h3>
                  <ul>
                    <li>Llevar protector solar y sombrero</li>
                    <li>Ropa abrigadora para las mañanas</li>
                    <li>Zapatos cómodos para caminar</li>
                    <li>Dinero en efectivo para compras locales</li>
                    <li>Cámara fotográfica</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn-reservar" 
                onClick={() => reservarTour(canionDelColca)}
              >
                Reservar Tour
              </button>
              <button 
                className="btn-favorito"
                onClick={() => añadirAFavoritos(canionDelColca)}
              >
                Añadir a Favoritos
              </button>
              <button className="btn-cerrar" onClick={toggleModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal genérico para los lugares */}
      {modalLugarAbierto && (
        <div className="modal-overlay" onClick={cerrarModalLugar}>
          <div className="modal-contenido modal-lugar" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={cerrarModalLugar}>×</button>
            
            <div className="modal-header">
              <h2>{modalLugarAbierto.nombre}</h2>
              <p>{modalLugarAbierto.descripcion}</p>
            </div>

            <div className="modal-body">
              <div className="modal-imagen-unica">
                <img src={modalLugarAbierto.imagen} alt={modalLugarAbierto.nombre} />
              </div>

              <div className="modal-info">
                <div className="info-section">
                  <h3>📍 Ubicación</h3>
                  <p>{modalLugarAbierto.ubicacion}</p>
                </div>

                <div className="info-section">
                  <h3>🕒 Horarios de Atención</h3>
                  <p>{modalLugarAbierto.horarios}</p>
                </div>

                <div className="info-section">
                  <h3>🎫 Precios de Entrada</h3>
                  <p>{modalLugarAbierto.precios}</p>
                </div>

                <div className="info-section">
                  <h3>⭐ Atractivos Principales</h3>
                  <ul>
                    {modalLugarAbierto.atractivos.map((atractivo, index) => (
                      <li key={index}>{atractivo}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h3>💡 Recomendaciones</h3>
                  <ul>
                    {modalLugarAbierto.recomendaciones.map((recomendacion, index) => (
                      <li key={index}>{recomendacion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn-reservar" 
                onClick={() => reservarTour(modalLugarAbierto)}
              >
                Reservar Tour
              </button>
              <button 
                className="btn-favorito"
                onClick={() => añadirAFavoritos(modalLugarAbierto)}
              >
                Añadir a Favoritos
              </button>
              <button className="btn-cerrar" onClick={cerrarModalLugar}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal del Chat */}
      {modalChatAbierto && (
        <div className="modal-overlay-chat" onClick={toggleModalChat}>
          <div className="modal-contenido-chat" onClick={(e) => e.stopPropagation()}>
            <div className="chat-header">
              <h3>Asistente Virtual</h3>
              <button className="modal-cerrar-chat" onClick={toggleModalChat}>×</button>
            </div>
            
            <div className="chat-body">
              {mensajes.map((mensaje) => (
                <div 
                  key={mensaje.id} 
                  className={`mensaje ${mensaje.esUsuario ? 'mensaje-usuario' : 'mensaje-asistente'}`}
                >
                  <div className="mensaje-contenido">
                    {mensaje.texto}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="chat-footer">
              <div className="input-chat-container">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                  onKeyPress={manejarTeclaEnter}
                  className="input-chat"
                />
                <button 
                  onClick={enviarMensaje}
                  className="btn-enviar-chat"
                  disabled={nuevoMensaje.trim() === ""}
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Asistente Virtual */}
      <div className="asistente-virtual-fijo">
        <div className="asistente-tooltip">
          Hola, soy tu asistente virtual de viajes, ¿en qué te puedo ayudar el día de hoy?
        </div>
        <button className="asistente-btn" onClick={toggleModalChat}>
          💬
        </button>
      </div>

      {/* Footer */}
      <footer className="foryou-footer">
        <p>
          Proyecto académico - Desarrollo Basado en Plataformas Universidad Católica San Pablo<br />
          Copyright© 2025. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default ForYouPage;