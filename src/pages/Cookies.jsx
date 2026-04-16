import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cookies({ t, darkMode }) {
  const [saved, setSaved] = useState(false)

  const clearPreferences = () => {
    localStorage.removeItem('emojio_theme')
    localStorage.removeItem('emojio_language')
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link 
        to="/" 
        className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-colors ${
          darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
        }`}
      >
        ← {t.backToHome}
      </Link>

      <h1 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {t.cookieSettings}
      </h1>

      <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <section className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t.language === 'es' ? 'Cookies y almacenamiento local' : 'Cookies and Local Storage'}
            </span>
          </div>
          <p className="text-sm opacity-70">
            {t.language === 'es' 
              ? 'Emojio utiliza localStorage únicamente para guardar tus preferencias de tema (oscuro/claro) e idioma. No se utilizan cookies de terceros, análisis, ni publicidad.'
              : 'Emojio uses localStorage only to save your theme (dark/light) and language preferences. No third-party cookies, analytics, or advertising are used.'}
          </p>
        </section>

        <section className="pt-4">
          <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.language === 'es' ? 'Datos almacenados locally' : 'Locally Stored Data'}
          </h2>
          <div className="overflow-x-auto">
            <table className={`w-full text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <th className="text-left py-3 pr-4">{t.language === 'es' ? 'Nombre' : 'Name'}</th>
                  <th className="text-left py-3 pr-4">{t.language === 'es' ? 'Propósito' : 'Purpose'}</th>
                  <th className="text-left py-3">{t.language === 'es' ? 'Ubicación' : 'Location'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                  <td className="py-3 pr-4">emojio_theme</td>
                  <td className="py-3 pr-4">{t.language === 'es' ? 'Tema UI (oscuro/claro)' : 'UI Theme (dark/light)'}</td>
                  <td className="py-3">{t.language === 'es' ? 'localStorage' : 'localStorage'}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">emojio_language</td>
                  <td className="py-3 pr-4">{t.language === 'es' ? 'Idioma preferido' : 'Preferred Language'}</td>
                  <td className="py-3">{t.language === 'es' ? 'localStorage' : 'localStorage'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="pt-4">
          <button
            onClick={clearPreferences}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}
          >
            {t.language === 'es' ? 'Borrar preferencias guardadas' : 'Clear Saved Preferences'}
          </button>
        </div>

        {saved && (
          <p className="text-green-500 font-medium">
            ✅ {t.language === 'es' ? 'Preferencias borradas' : 'Preferences cleared'}
          </p>
        )}

        <section className="pt-8">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.language === 'es'
              ? 'Para más información sobre cómo manejamos tus datos, consulta nuestra Política de Privacidad.'
              : 'For more information about how we handle your data, check our Privacy Policy.'}
          </p>
        </section>
      </div>
    </div>
  )
}
