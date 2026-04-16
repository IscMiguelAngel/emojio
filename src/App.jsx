import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { TRANSLATIONS } from './constants/translations'
import { Header, Footer } from './components'
import { useScrollToTop } from './hooks/useScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Cookies = lazy(() => import('./pages/Cookies'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" aria-label="Cargando..."></div>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('emojio_theme')
    return saved ? saved === 'dark' : true
  })
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('emojio_language') || 'es'
  })
  const [searchQuery, setSearchQuery] = useState('')
  const categoriesRef = useRef(null)

  const t = { ...TRANSLATIONS[language], language, setLanguage }

  useEffect(() => {
    localStorage.setItem('emojio_theme', darkMode ? 'dark' : 'light')
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('emojio_language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0f1623] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        language={language} 
        setLanguage={setLanguage}
        t={t}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        showCategoriesRef={categoriesRef}
      />
      <ScrollToTopWrapper />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home t={t} darkMode={darkMode} searchQuery={searchQuery} />} />
          <Route path="/privacy" element={<Privacy t={t} darkMode={darkMode} />} />
          <Route path="/terms" element={<Terms t={t} darkMode={darkMode} />} />
          <Route path="/cookies" element={<Cookies t={t} darkMode={darkMode} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer darkMode={darkMode} t={t} />
    </div>
  )
}

function ScrollToTopWrapper() {
  useScrollToTop()
  return null
}

export default App
