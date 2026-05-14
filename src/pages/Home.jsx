import { useState, useMemo, useEffect, useCallback, useRef } from 'react'

const GROUP_MAP = {
  0: { icon: '😊', name: 'Emoticonos y emoción', nameEn: 'Smileys & Emotion' },
  1: { icon: '🤚', name: 'Personas y cuerpo', nameEn: 'People & Body' },
  2: { icon: '🧩', name: 'Componentes', nameEn: 'Components' },
  3: { icon: '🐾', name: 'Animales y naturaleza', nameEn: 'Animals & Nature' },
  4: { icon: '🍔', name: 'Comida y bebida', nameEn: 'Food & Drink' },
  5: { icon: '✈️', name: 'Viajes y lugares', nameEn: 'Travel & Places' },
  6: { icon: '⚽', name: 'Actividades', nameEn: 'Activities' },
  7: { icon: '💡', name: 'Objetos', nameEn: 'Objects' },
  8: { icon: '🔣', name: 'Símbolos', nameEn: 'Symbols' },
  9: { icon: '🏳️', name: 'Banderas', nameEn: 'Flags' },
}

function EmojiItem({ item, darkMode, t, copiedEmoji, onCopy }) {
  return (
    <div
      className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer ${darkMode
          ? 'bg-gray-800/50 hover:bg-gray-700 hover:scale-105'
          : 'bg-white hover:bg-gray-50 hover:scale-105'
        } shadow-sm`}
      onClick={() => onCopy(item.emoji)}
      onKeyDown={(e) => e.key === 'Enter' && onCopy(item.emoji)}
      tabIndex={0}
      role="listitem"
      aria-label={`${item.name}, ${t.copyButton}`}
    >
      <div className="text-5xl text-center mb-2" aria-hidden="true">{item.emoji}</div>
      <p className={`text-xs text-center truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {item.name}
      </p>

      {copiedEmoji === item.emoji && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-xl" role="alert">
          <span className="copied-feedback text-green-400 font-bold text-sm">
            {t.copiedButton}
          </span>
        </div>
      )}
    </div>
  )
}

function CategorySection({ category, darkMode, t, copiedEmoji, onCopy }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const displayEmojis = category.emojis

  return (
    <section ref={sectionRef} key={category.id} className="mb-10" aria-labelledby={`category-${category.id}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl" aria-hidden="true">{category.icon}</span>
        <h2 id={`category-${category.id}`} className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {category.name}
        </h2>
      </div>

      <div
        id={`category-${category.id}-emojis`}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
        role="list"
      >
        {displayEmojis.map((item) => (
          <EmojiItem
            key={item.emoji}
            item={item}
            darkMode={darkMode}
            t={t}
            copiedEmoji={copiedEmoji}
            onCopy={onCopy}
          />
        ))}
      </div>
    </section>
  )
}


export default function Home({ t, darkMode, searchQuery }) {
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [emojis, setEmojis] = useState([])
  const [loading, setLoading] = useState(true)
  const [copiedEmoji, setCopiedEmoji] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const mainRef = useRef(null)
  const sectionRefs = useRef({})

  const fetchEmojis = useCallback(async (locale) => {
    setLoading(true)
    try {
      if (locale === 'es')
        locale = 'es-mx'

      const response = await fetch(`https://cdn.jsdelivr.net/npm/emojibase-data@latest/${locale}/compact.json`)
      const data = await response.json()
      setEmojis(data)
    } catch (err) {
      console.error('Failed to fetch emojis:', err)
      setEmojis([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEmojis(t.language)
  }, [t.language, fetchEmojis])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const categorizedEmojis = useMemo(() => {
    const grouped = {}

    emojis.forEach((emoji) => {
      const group = emoji.group
      if (group === undefined || group === null) return
      if (!GROUP_MAP[group]) return

      if (!grouped[group]) {
        grouped[group] = {
          id: group,
          name: t[`group_${group}`],
          icon: GROUP_MAP[group].icon,
          emojis: []
        }
      }
      grouped[group].emojis.push({
        emoji: emoji.unicode,
        name: emoji.label,
        tags: emoji.tags || []
      })
    })

    return Object.values(grouped).sort((a, b) => a.id - b.id)
  }, [emojis, t])

  const filteredCategories = useMemo(() => {
    if (!debouncedQuery.trim()) return categorizedEmojis

    const query = debouncedQuery.toLowerCase()
    return categorizedEmojis
      .map(category => ({
        ...category,
        emojis: category.emojis.filter(e =>
          e.name.toLowerCase().includes(query) ||
          (e.tags && e.tags.some(tag => tag.toLowerCase().includes(query)))
        )
      }))
      .filter(category => category.emojis.length > 0)
  }, [categorizedEmojis, debouncedQuery])

  // IntersectionObserver para detectar la categoría visible
  useEffect(() => {
    const refs = sectionRefs.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.categoryId)
            setActiveCategory(id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    Object.values(refs).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [filteredCategories])

  const totalEmojis = emojis.length

  const handleCopy = useCallback(async (emoji) => {
    try {
      await navigator.clipboard.writeText(emoji)
      setCopiedEmoji(emoji)
      setTimeout(() => setCopiedEmoji(null), 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [])

  // Función para hacer scroll a la sección de categoría
  // Ajusta el scroll para dejar visible el título de la categoría debajo del header sticky
  const handleCategoryClick = (id) => {
    const section = sectionRefs.current[id]
    if (section) {
      const yOffset = -20 // Ajusta este valor según la altura del header (en px)
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6">
      {/* Aside de categorías */}
      <aside className={`hidden md:block w-56 flex-shrink-0`} aria-label={t.categories}>
        <nav className="sticky top-24">
          <h2 className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.categories}</h2>
          <ul className="flex flex-col gap-1">
            {filteredCategories.map((category) => {
              const isActive = activeCategory === category.id
              return (
                <li key={category.id}>
                  <button
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-left border-l-3 ${isActive
                        ? darkMode
                          ? 'bg-blue-500/20 text-blue-300 font-semibold border-blue-400'
                          : 'bg-blue-50 text-blue-700 font-semibold border-blue-500'
                        : darkMode
                          ? 'hover:bg-gray-700 text-gray-400 border-transparent'
                          : 'hover:bg-gray-200 text-gray-600 border-transparent'
                      }`}
                    onClick={() => handleCategoryClick(category.id)}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className={`text-xl transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} aria-hidden="true">{category.icon}</span>
                    <span className="truncate">{category.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      {/* Main de emojis */}
      <main ref={mainRef} className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center py-20" role="status" aria-live="polite">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.loading}</p>
            </div>
          </div>
        ) : filteredCategories.length === 0 ? (
          <div className="text-center py-16" role="status">
            <p className="text-6xl mb-4" aria-hidden="true">🔍</p>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.noResults.replace('{query}', searchQuery)}</p>
          </div>
        ) : (
          <div role="feed" aria-label="Categorías de emojis">
            {filteredCategories.map((category) => (
              <section
                key={category.id}
                ref={el => sectionRefs.current[category.id] = el}
                data-category-id={category.id}
                className="mb-10 pt-24 -mt-24 scroll-mt-24"
                aria-labelledby={`category-${category.id}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">{category.icon}</span>
                  <h2 id={`category-${category.id}`} className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{category.name}</h2>
                </div>
                <div
                  id={`category-${category.id}-emojis`}
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
                  role="list"
                >
                  {category.emojis.map((item) => (
                    <EmojiItem
                      key={item.emoji}
                      item={item}
                      darkMode={darkMode}
                      t={t}
                      copiedEmoji={copiedEmoji}
                      onCopy={handleCopy}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {!loading && emojis.length > 0 && (
          <section className="mt-16 text-center" aria-labelledby="about-heading">
            <h2 id="about-heading" className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t.language === 'es' ? 'Sobre Emojio' : 'About Emojio'}
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.language === 'es'
                ? `Encuentra el emoji perfecto para tus mensajes, redes sociales y documentos. ${totalEmojis} emojis organizados en 10 categorías. Simple, rápido y gratuito.`
                : `Find the perfect emoji for your messages, social media, and documents. ${totalEmojis} emojis organized in 10 categories. Simple, fast, and free.`}
            </p>
          </section>
        )}
      </main>
    </div>
  )
}
