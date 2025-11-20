API Testing Tool — Mini Postman en Angular 🚀

Una aplicación web moderna y minimalista inspirada en Postman, diseñada para probar APIs REST (GET, POST, PUT, DELETE, PATCH) directamente desde el navegador, sin backend adicional.
Construida completamente con Angular 19, TypeScript, SCSS y HttpClient.

🎯 Características principales

✔️ Enviar peticiones HTTP reales
✔️ Soporte para: GET, POST, PUT, DELETE, PATCH
✔️ Agregar headers personalizados
✔️ Enviar body en formato JSON
✔️ Ver respuesta en tiempo real
✔️ Mostrar:

Código de estado

Tiempo de respuesta

Headers de respuesta

Body formateado tipo JSON-Viewer

✔️ Interfaz moderna estilo “glass UI”
✔️ Diseño responsivo y minimalista

🛠️ Tecnologías utilizadas

Angular 19+

TypeScript

SCSS

Angular HttpClient

RxJS

Glass UI + efectos minimalistas

📦 Requerimientos

Antes de ejecutar este proyecto asegúrate de tener instalado:

✔ Node.js (versión recomendada 18 o 20)

Descargar desde: https://nodejs.org/

✔ Angular CLI

Instalar globalmente:

npm install -g @angular/cli

✔ Git

Descargar desde:
https://git-scm.com/

🚀 Instalación y ejecución local

Clona este repositorio:

git clone https://github.com/tu-usuario/proyecto_final_pw2.git


Entra al proyecto:

cd proyecto_final_pw2


Instala las dependencias:

npm install


Ejecuta la app:

ng serve -o


Automáticamente abrirá:
👉 http://localhost:4200

📁 Estructura principal del proyecto
src/
 ├── app/
 │   ├── core/
 │   │   ├── services/       # ApiService
 │   │   └── models/         # Interfaces de request/response
 │   ├── features/
 │   │   ├── request-form/   # Formulario de API
 │   │   └── response-viewer # Vista de respuesta
 │   ├── app.html            # Layout principal
 │   ├── app.ts              # Componente raíz
 │   └── app.config.ts       
 └── styles.scss             # Estilos globales

🧩 Funcionalidad
👉 Enviar Petición

El usuario puede:

Escribir URL

Seleccionar método

Agregar headers

Escribir un JSON en el body (cuando aplica)

👉 Recibir respuesta

La app muestra:

Código de estado (200, 400, 500…)

Texto del status (OK, Bad Request, etc)

Tiempo total en milisegundos

Headers formateados

Body en JSON pretty

✨ Diseño

El proyecto utiliza un estilo visual inspirado en:

Neo-brutalismo suave

Paneles “glass”

Degradados minimalistas

Grid sutil de fondo

Tipografía Poppins

Incluye animaciones de entrada y hover elegantes.

👨‍💻 Autor

Natán López
Proyecto final — Programación Web 2
Universidad ✨

📄 Licencia

Este proyecto no incluye licencia.
Puedes usarlo para fines educativos.
