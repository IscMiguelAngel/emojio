# Emojio

Emojio es una aplicación web para buscar, copiar y pegar emojis en tus redes sociales, documentos y mensajes. Rápido, limpio y gratis.

## Características

- Búsqueda de emojis por palabra clave
- Explora emojis por categorías
- Un clic para copiar al portapapeles
- Tema oscuro/claro
- Soporte multilingüe (español, inglés)
- Diseño responsivo
- Carga diferida para óptimo rendimiento

## Stack Tecnológico

- **React** 18.2.0
- **React Router DOM** 7.13.1
- **Vite** 5.1.0
- **TailwindCSS** 3.4.1
- **PostCSS** 8.4.35

## Estructura del Proyecto

```
emojio/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── index.js
│   ├── constants/
│   │   ├── index.js
│   │   ├── languages.js
│   │   └── translations.js
│   ├── hooks/
│   │   ├── index.js
│   │   └── useScrollToTop.js
│   ├── pages/
│   │   ├── Cookies.jsx
│   │   ├── Home.jsx
│   │   ├── Privacy.jsx
│   │   └── Terms.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── dist/                 # Build de producción
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd emojio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre http://localhost:5173 en tu navegador

## Scripts Disponibles

| Comando | Descripción |
|--------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run preview` | Previsualizar build de producción |

## Compilar para Producción

```bash
npm run build
```

El build de producción se generará en la carpeta `dist/`.

## Licencia

MIT