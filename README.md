# 🦁 Torah Kids Puppets

¡Bienvenidos al repositorio oficial de **Torah Kids Puppets**!

Este es un sitio web educativo interactivo diseñado para niños, donde pueden aprender sobre la Torá, las fiestas judías y valores importantes a través de juegos, videos y personajes divertidos como Yosef y Benny.

## 🚀 Tecnologías

Este proyecto está construido con tecnología moderna y rápida:
- **React**: Para la interfaz interactiva.
- **TypeScript**: Para un código seguro y robusto.
- **Tailwind CSS**: Para un diseño hermoso y responsivo.
- **Vite**: Para un desarrollo y construcción ultrarrápidos.

## 🛠️ Instalación Local

Si quieres correr este proyecto en tu computadora:

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/TU_USUARIO/torah-kids-puppets.git
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## 🌐 Cómo publicar en GitHub Pages

Para que tu sitio web sea visible para todo el mundo, sigue estos pasos:

### Opción A: Configuración Automática (Recomendada)

1.  Asegúrate de tener el archivo `.github/workflows/deploy.yml` en tu código.
    *   *Nota: Si no puedes subir la carpeta `.github` desde la web, crea un "New File" en GitHub y llámalo `.github/workflows/deploy.yml`.*
2.  Ve a la pestaña **Settings** (Configuración) de tu repositorio.
3.  En el menú de la izquierda, haz clic en **Pages**.
4.  En la sección **Build and deployment**, busca "Source".
5.  Cambia "Deploy from a branch" a **GitHub Actions**.
6.  ¡Listo! En unos minutos tu sitio estará en vivo.

### Opción B: Si tienes problemas con la carpeta .github

Si prefieres hacerlo manual o la Opción A no te funciona:

1.  En tu computadora, ejecuta:
    ```bash
    npm run build
    ```
2.  Esto creará una carpeta llamada `dist`.
3.  Sube el contenido de esa carpeta `dist` a una rama llamada `gh-pages` (o configúralo manualmente en Settings).

---
Hecho con ❤️ para la educación judía.