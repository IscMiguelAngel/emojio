# Características

## Funcionalidades principales
- **Búsqueda de emojis** por palabra clave y tags
- **Exploración por categorías** - 10 categorías organizadas
- **Copiar al portapapeles** con un clic
- **Feedback visual** al copiar (animación de "Copiado")

## Categorías de emojis
1. 😊 Emoticonos y emoción
2. 🤚 Personas y cuerpo
3. 🧩 Componentes
4. 🐾 Animales y naturaleza
5. 🍔 Comida y bebida
6. ✈️ Viajes y lugares
7. ⚽ Actividades
8. 💡 Objetos
9. 🔣 Símbolos
10. 🏳️ Banderas

## Personalización
- **Tema oscuro/claro** - persistente en localStorage
- **Multilingüe** - español (es) e inglés (en)
- **Diseño responsivo** - optimizado para móvil y desktop

## Rendimiento
- **Lazy loading** de páginas (React.lazy + Suspense)
- **Carga diferida** de emojis por categoría
- **IntersectionObserver** para cargar emojis al hacer scroll
- **Debounce** en búsqueda (300ms)