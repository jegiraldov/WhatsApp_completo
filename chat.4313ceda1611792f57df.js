/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/styles/chat.scss":
/*!**********************************!*\
  !*** ./src/app/styles/chat.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://maquetacion/./src/app/styles/chat.scss?");

/***/ }),

/***/ "./src/app/scripts/chat.js":
/*!*********************************!*\
  !*** ./src/app/scripts/chat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_chat_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/chat.scss */ \"./src/app/styles/chat.scss\");\n// import '../styles/style.scss';\n\n\nconst divsContainer = document.querySelector('#divs-conteiner');\nconst searchInput = document.getElementById('searchInput');\nlet usuarios = [];\n\nfetch('https://back-wpp.onrender.com/usuarios')\n  .then(response => response.json())\n  .then(data => { \n    usuarios = data;\n    dibujarUsuarios(data)\n  });\n\n//Evento que filtra conversaciones\nlet elSearch = document.getElementById(\"searchInput\");\nelSearch.addEventListener(\"keyup\", () => {\n  let value = elSearch.value.toLowerCase();\n  let newList = usuarios.filter(u => u.nombre.toLowerCase().includes(value));\n  console.log(newList, value)\n  dibujarUsuarios(newList);\n});\n\n//Función dibujar usuarios\nfunction dibujarUsuarios(data){\n  // Limpiar el contenido actual del divs-conteiner\n  divsContainer.innerHTML = '';\n\n  // Iterar sobre los datos de los usuarios\n  data.forEach(usuario => {\n    dibujarUsuario(usuario)\n  });\n}\n\n// Dibujar un usuario\nfunction dibujarUsuario(usuario){\n  const divMensajes = document.createElement('div');\n    divMensajes.classList.add('div-mensajes');\n\n    const img = document.createElement('img');\n    img.src = usuario.urlFoto;\n    img.alt = 'contacto__sinperfil';\n\n    const mensajes = document.createElement('div');\n    mensajes.classList.add('mensajes');\n\n    const mensajeUsuario = document.createElement('div');\n    mensajeUsuario.classList.add('mensaje-usuario');\n    mensajeUsuario.addEventListener(\"click\", ()=>{\n      clickUsuario(usuario);\n    });\n\n    const usuariosVisto = document.createElement('p');\n    usuariosVisto.classList.add('usuarios-visto', 'titulo', 'usuarios-no-visto');\n    usuariosVisto.textContent = usuario.nombre;\n\n\n    const visto = document.createElement('span');\n    visto.classList.add('visto');\n    const vistoIcon = document.createElement('i');\n    vistoIcon.classList.add('bi', 'bi-check-all');\n    visto.appendChild(vistoIcon);\n\n    const usuarioVisto = document.createElement('span');\n    usuarioVisto.classList.add('usuario-visto', 'usuario-no-visto');\n    usuarioVisto.textContent = usuario.estado;\n\n    mensajeUsuario.appendChild(usuariosVisto);\n    mensajeUsuario.appendChild(visto);\n    mensajeUsuario.appendChild(usuarioVisto);\n\n    const horarios = document.createElement('div');\n    horarios.classList.add('horarios');\n\n    const horaMensaje = document.createElement('span');\n    horaMensaje.classList.add('hora-mensaje');\n    horaMensaje.textContent = obtenerHoraMensaje();\n\n    horarios.appendChild(horaMensaje);\n\n    mensajes.appendChild(mensajeUsuario);\n    mensajes.appendChild(horarios);\n\n    divMensajes.appendChild(img);\n    divMensajes.appendChild(mensajes);\n\n\n    divsContainer.appendChild(divMensajes);\n}\n\n// Función para obtener la hora del mensaje\nfunction obtenerHoraMensaje() {\n\n  const date = new Date();\n  const hora = date.getHours();\n  const minutos = date.getMinutes();\n\n  return `${hora}:${minutos}`;\n}\n\n//Función para traer mensajes\nconst traerMensajes = async (usuario) =>{\n  const response = await fetch ('https://back-wpp.onrender.com/mensajes');\n  const data = await response.json();\n\n  const mensajes = data.find(conv => conv.idUser2 == usuario.id)\n\n  return mensajes ? mensajes.conversaciones : [];\n}\n\n\n//función que detecta click usuario y dibuja en el chat\nfunction dibujarMensajes (usuario, mensajes){\n  const element = document.getElementById('chat');\n  let html = `\n  <div class=\"rightSide\">\n    <div class=\"header\">\n      <div class=\"imgText\">\n      <div class=\"userImg\">\n          <img src=\"${usuario.urlFoto}\" class=\"cover\">\n      </div>\n        <h4>${usuario.nombre}<br><span>Online</span></h4>\n      </div> \n        <ul>\n          <img src=\"https://img.icons8.com/?size=512&id=132&format=png\" id = 'search'>\n          <button>\n          <img src=\"https://img.icons8.com/?size=512&id=23543&format=png\" id==\"close\">\n        </button>\n        </ul>\n    </div>\n\n    <div class=\"chatBox\">`\n\n    // dinámico\n    for (let i = 0; i < mensajes.length; i++) {\n      html += `\n        <div class=\"message ${mensajes[i].sendBy == 1 ? 'my_message' : 'friend_message'}\">\n            <p>${mensajes[i].message} <span>${mensajes[i].date}</span></p>\n        </div>\n        `;\n    }\n    // final\n    html += `\n    </div>\n    <div class=\"chatbox_input\">\n        <img src=\"https://img.icons8.com/?size=512&id=7868&format=png\" alt=\"Emojie feliz\">\n        <img src=\"https://img.icons8.com/?size=512&id=b28zVZDT4qz3&format=png\" alt=\"Gancho\">\n        <input type=\"text\" placeholder=\"Escribe un mensaje\" id=\"mensajeInput\">\n        <button id=\"enviarMensajeButton\">\n          <img src=\"https://img.icons8.com/?size=512&id=59854&format=png\">\n        </button>\n        <img src=\"https://img.icons8.com/?size=512&id=9622&format=png\" alt=\"micrófono\">\n    </div>\n  </div> `\n\n  element.innerHTML = html;\n}\n\n//-------------ENVIAR MENSAJE----------\n\n//función que detecta click usuario y dibuja en el chat\nasync function clickUsuario(usuario) {\n  let mensajes = await traerMensajes(usuario);\n  dibujarMensajes(usuario, mensajes);\n\n  const mensajeInput = document.getElementById('mensajeInput');\n  const botonEnviar = document.getElementById('enviarMensajeButton');\n\n  botonEnviar.addEventListener('click', () => {\n    enviarMensaje(usuario, mensajeInput.value);\n  });\n\n  mensajeInput.addEventListener('keydown', (event) => {\n    if (event.key === 'Enter') {\n      enviarMensaje(usuario, mensajeInput.value);\n    }\n  });\n}\n\n// ...\n\n//-------------FUNCIÓN PARA ENVIAR MENSAJE----------\nfunction enviarMensaje(usuario, mensaje) {\n  const chatBox = document.querySelector('.chatBox');\n  const mensajeNuevo = `\n    <div class=\"message my_message\">\n      <p>${mensaje} <span>${obtenerHoraMensaje()}</span></p>\n    </div>\n  `;\n  chatBox.insertAdjacentHTML('beforeend', mensajeNuevo);\n  // Limpia el contenido del campo de entrada de mensajes\n  document.getElementById('mensajeInput').value = '';\n}\n\n\n\n\n\n\n// Obtenemos las clases de las secciones para aparecer y desaparecer \n// const conversationsSection = document.querySelector('.contenido__izquierda');\n// const messagesSection = document.querySelector('.contenido-general--contenido__derecho');\n\n// ------------------//Solución que me dió ChatGPT3 para qie se muestre los chat al hacerle click en mobile\n// conversationsSection.addEventListener('click', function(event) {\n//   const conversation = event.target.closest('.div-mensajes');\n\n//   if (conversation) {\n//     // Ocultar el listado de conversaciones y mostrar la ventana de mensajes\n//     conversationsSection.style.display = 'none';\n//     messagesSection.style.display = 'block';\n\n//     // Obtener el usuario asociado a la conversación seleccionada\n//     const usuario = getUsuarioFromConversation(conversation);\n\n//     // Cargar los mensajes del usuario en la ventana de mensajes\n//     cargarMensajes(usuario);\n//   }\n// });\n\n// function getUsuarioFromConversation(conversation) {\n//   const usuarioId = conversation.dataset.usuarioId;\n//   // Buscar el usuario en tu lista de usuarios disponibles\n//   // y devolver el objeto usuario correspondiente\n//   return usuarios.find(usuario => usuario.id === usuarioId);\n// }\n\n// function cargarMensajes(usuario) {\n\n//   // Solicitud utilizando fetch:\n//   fetch(`http://localhost:5000/mensajes/${usuarios.id}`)\n//     .then(response => response.json())\n//     .then(data => {\n//       const mensajes = data.mensajes;\n//       // Llamar a la función dibujarMensajes para mostrar los mensajes en la ventana de mensajes\n//       dibujarMensajes(usuario, mensajes);\n//     })\n//     .catch(error => {\n//       console.error('Error al cargar los mensajes:', error);\n//     });\n// }\n\n\n\n\n\n//# sourceURL=webpack://maquetacion/./src/app/scripts/chat.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/scripts/chat.js");
/******/ 	
/******/ })()
;