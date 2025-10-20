# proyecto_web
PachaQutec – Turismo Arequipa

Este proyecto es una aplicación web desarrollada con React, enfocada en mostrar destinos turísticos y culturales de Arequipa.
Forma parte de un proyecto académico del curso Desarrollo Basado en Plataformas.


---

Tecnologías utilizadas

React.js – Biblioteca principal para la interfaz.

React Router DOM – Para la navegación entre páginas.

HTML y CSS – Estructura y estilos.

JavaScript (ES6+) – Lógica del cliente.



---
 Estructura principal

App.js: Define las rutas principales del proyecto (/login, /registro, /intereses, /for-you).

Registro.js: Página donde el usuario puede crear su cuenta.

Login.js: Página para iniciar sesión.

Intereses.js: Permite seleccionar intereses turísticos.

ForYouPage.js: Muestra contenido personalizado según los intereses.




 Lógica general

Se usa useNavigate() de react-router-dom para movernos entre páginas.

En Registro, al enviar el formulario se redirige a /intereses.

En Intereses, el usuario puede seleccionar opciones (se almacenan en un estado con useState).

Al presionar “Continuar”, se navega a la página “For You”.





Cómo ejecutar

1. Clonar el repositorio:

git clone <URL-del-repositorio>


2. Instalar dependencias:

npm install


3. Ejecutar el proyecto:

npm start



 Créditos

Proyecto académico – Universidad Católica San Pablo
Curso: Desarrollo Basado en Plataformas
© 2025 Todos los derechos reservados.
