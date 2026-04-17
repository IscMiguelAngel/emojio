# Estado Global

El componente `App.jsx` gestiona el estado global de la aplicación:

## Estados

| Estado | Tipo | Descripción |
|--------|------|-------------|
| `darkMode` | boolean | Tema oscuro/claro |
| `language` | string | Idioma actual ('es' o 'en') |
| `searchQuery` | string | Término de búsqueda |
| `categoriesRef` | ref | Referencia para navegación |

## Persistencia (localStorage)

- `emojio_theme`: 'dark' | 'light'
- `emojio_language`: 'es' | 'en'

## Prop context

El objeto `t` contiene todas las traducciones más:
- `language` - función setLanguage
- `setLanguage` - para cambiar idioma

```jsx
const t = { ...TRANSLATIONS[language], language, setLanguage }
```

## Propagación a componentes

- `Header`: darkMode, setDarkMode, language, setLanguage, t, searchQuery, setSearchQuery
- `Home`: t, darkMode, searchQuery
- `Privacy`, `Terms`, `Cookies`: t, darkMode
- `Footer`: darkMode, t