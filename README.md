<h1 align="center" id="title">Totem Duoc Maps</h1>

<p align="center"><img src="https://duocmaps.s3.amazonaws.com/www/assets/img/duoc.png" alt="project-image"></p>

<p id="description">*brindar apoyo a las personas que requieran encontrar una sala o un punto de interés específico dentro de la institución permitiéndoles visualizar la ubicación exacta de los mismos.</p>

<p align="center"><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/CSS-239120?&amp;style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="shields"><img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&amp;logo=angular&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&amp;logo=ionic&amp;logoColor=white" alt="shields"></p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Mapa 360°
*   Buscar sala por piso
*   Puntos de interes
*   consjeros de carrera
*   ver calendario con eventos
*   horario de profesores
*   preguntas frecuentes
*   horario de las salas

<h2>🛠️ Installation Steps:</h2>

<p>1. Descarga Del Proyecto</p>

<p>2. Instalar Node Modules</p>

```
npm install
```
<p>2.1. Dependencia Adicional</p>

```
npm install @ionic/angular@5.9.4

```

<p>3. Ejecutar proyecto</p>

```
ionic serve 
```
<h2>🌐Subir a Firebase hosting:</h2>

<p>1. Instalar Firebase cli</p>

```
npm install -g firebase-tools
```

<p>2.Iniciar sesión en Firebase (cuenta de Dodo)</p>

```
firebase login
```
<p>3.Inicializar el Proyecto</p>

<p>Dirígete a la carpeta del proyecto que deseas subir a Firebase Hosting. Luego, inicializa Firebase en tu proyecto:</p>

```
firebase init
```
Esto abrirá una serie de opciones de configuración. Selecciona las siguientes opciones:

* Hosting: Selecciona la opción para configurar Firebase Hosting.

* Configurar un sitio para la web: Elige admin Duoc Maps.

* Directorio público: Ingresa el nombre de la carpeta donde se encuentra tu proyecto. Si es una aplicación web, esta carpeta suele ser build, dist o public, dependiendo de tu configuración.

* Configuración de una SPA (Single Page Application): No.

<p>4.Subir el Proyecto a Firebase Hosting</p>

```
firebase deploy
```
