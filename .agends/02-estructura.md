# Estructura del Proyecto

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
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Descripción de carpetas

- **components/**: Componentes reutilizables (Header, Footer)
- **constants/**: Traducciones y configuración de idiomas
- **hooks/**: Custom hooks (useScrollToTop)
- **pages/**: Páginas de la aplicación con lazy loading