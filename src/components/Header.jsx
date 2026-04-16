import { Link } from 'react-router-dom'
import { LANGUAGES } from '../constants'

export function Header({ darkMode, setDarkMode, language, setLanguage, t, setSearchQuery, searchQuery }) {
  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${darkMode ? 'bg-[#0f1623]/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3" aria-label="Emojio - Inicio">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl" aria-hidden="true">
              🤖
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hidden sm:block">
              Emojio
            </h1>
          </Link>
        </div>
        
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative flex items-center">
            <label htmlFor="emoji-search" className="sr-only">
              {t.searchPlaceholder}
            </label>
            <input
              id="emoji-search"
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg" aria-hidden="true">🔍</span>
            
            <div className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center rounded-md px-2 py-1 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <label htmlFor="language-select" className="sr-only">
                {t.language === 'es' ? 'Cambiar idioma' : 'Change language'}
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value)
                  setSearchQuery('')
                }}
                className={`bg-transparent border-none outline-none cursor-pointer text-sm ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {LANGUAGES.map(lang => (
                  <option key={lang.value} value={lang.value} className={darkMode ? 'bg-gray-800' : 'bg-white'}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? (t.language === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (t.language === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            }`}
          >
            <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
