# Servicios Externos

## API de Emojis

**URL:** `https://cdn.jsdelivr.net/npm/emojibase-data@latest/{locale}/compact.json`

**Locales disponibles:**
- `en` → inglés
- `es-mx` → español (el código `es` se convierte a `es-mx`)

**Ejemplo de respuesta:**
```json
[
  {
    "unicode": "😀",
    "label": "grinning face",
    "group": 0,
    "tags": ["face", "grin", "happy"]
  }
]
```

## CDN
- **jsDelivr** - CDN público para npm packages

## Recursos locales
- `localStorage` - Persistencia de tema e idioma
- `navigator.clipboard` - API del portapapeles para copiar emojis