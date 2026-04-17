# Rutas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | Home | Página principal - listado de emojis por categoría |
| `/privacy` | Privacy | Política de privacidad |
| `/terms` | Terms | Términos de servicio |
| `/cookies` | Cookies | Política de cookies |
| `*` | - | Redirecciona a `/` |

## Configuración de rutas

```jsx
<Routes>
  <Route path="/" element={<Home t={t} darkMode={darkMode} searchQuery={searchQuery} />} />
  <Route path="/privacy" element={<Privacy t={t} darkMode={darkMode} />} />
  <Route path="/terms" element={<Terms t={t} darkMode={darkMode} />} />
  <Route path="/cookies" element={<Cookies t={t} darkMode={darkMode} />} />
  <Route path="*" element={<Navigate to="/" />} />
</Routes>
```

## Lazy Loading

Todas las páginas usan carga diferida:
```jsx
const Home = lazy(() => import('./pages/Home'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Cookies = lazy(() => import('./pages/Cookies'))
```

Componente de carga:
```jsx
<Suspense fallback={<LoadingFallback />}>
  {/* Routes */}
</Suspense>
```