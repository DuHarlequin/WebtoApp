# WebtoApp

# Introducción

La extensión "WebToApp" permite a los usuarios convertir cualquier sitio web en una aplicación independiente que se abre en una ventana sin barra de navegación, ofreciendo una experiencia más limpia y enfocada. Este manual detalla cómo instalar, configurar y utilizar esta extensión.

## Requisitos

- Navegador Opera instalado en tu computadora.
- Conocimientos básicos para cargar extensiones en modo desarrollador.

## Instalación

### Paso 1: Descargar los archivos

Descarga el paquete de la extensión desde el repositorio o lugar de distribución.

Asegúrate de que incluye los siguientes archivos:

- `manifest.json`
- `popup.html`
- `popup.js`
- `background.js`
- `icon.png`

### Paso 2: Cargar la extensión en Opera

1. Abre Opera y escribe `opera://extensions` en la barra de direcciones.
2. Activa la opción "Modo desarrollador" en la parte superior derecha.
3. Haz clic en "Cargar extensión sin empaquetar".
4. Selecciona la carpeta que contiene los archivos de la extensión.

La extensión aparecerá en la lista y su icono se mostrará en la barra de extensiones.

## Uso de la extensión

### Paso 1: Abrir la extensión

Navega al sitio web que deseas convertir en una aplicación.

Haz clic en el icono de "WebToApp" en la barra de extensiones.

### Paso 2: Crear la aplicación

Aparecerá una ventana emergente con un botón que dice "Instalar".

Haz clic en el botón.

![1](https://github.com/user-attachments/assets/596392b5-d652-4a2d-9632-a4f1e0df85f2)

### Paso 3: Disfrutar la aplicación

La extensión abrirá el sitio web en una nueva ventana tipo "popup" sin barra de navegación ni pestañas.

Usa la ventana como si fuera una aplicación independiente.

![2](https://github.com/user-attachments/assets/1f9263df-6037-432a-b493-0a1992b13365)


## Personalización

Puedes modificar ciertos aspectos de la extensión para adaptarla a tus necesidades:

### Cambiar el tamaño de la ventana

1. Abre el archivo `background.js` en un editor de texto.
2. Localiza el siguiente fragmento:

   ```javascript
   chrome.windows.create({
     url: message.url,
     type: "popup",
     width: 800,
     height: 600
   });
   
3. Cambia los valores de `width` (ancho) y `height` (alto) según prefieras.
4. Guarda los cambios y recarga la extensión desde `opera://extensions`.

### Cambiar el icono

Sustituye el archivo `icon.png` por otro icono de tu preferencia.

Asegúrate de que el nuevo archivo tenga las mismas dimensiones.

Recarga la extensión.

## Solución de problemas

### La extensión no aparece en la barra de herramientas

Verifica que esté activada en `opera://extensions`.

### La ventana emergente no abre el sitio web

Asegúrate de que la extensión tenga los permisos necesarios activados.

Revisa el archivo `manifest.json` y confirma que la estructura sea correcta.

### La extensión no carga correctamente

Verifica que todos los archivos estén en la carpeta seleccionada al cargar la extensión.

Consulta la consola de errores del navegador en `opera://extensions` para más detalles.

## Contacto y soporte

Si tienes dudas o necesitas ayuda, puedes contactar al desarrollador o consultar la documentación en el repositorio oficial.

¡Gracias por usar "WebToApp"!
