import { Link } from 'react-router-dom'

export function Footer({ darkMode, t }) {
  return (
    <footer 
      className={`border-t mt-16 transition-colors duration-300 ${darkMode ? 'bg-[#0a0f1a] border-gray-800' : 'bg-gray-200 border-gray-300'}`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-5 w-full md:w-2/3 mx-auto">
            <Link to="/" className="flex justify-center items-center gap-3 mb-4" aria-label="Emojio - Inicio">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl" aria-hidden="true">
                    🤖
                </div>
                <h3 className="text-xl font-bold">Emojio</h3>
            </Link>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.footerDesc}
            </p>
        </div>
        <nav className={`text-center pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-300'}`} aria-label="Enlaces legales">
            <div className="flex flex-row justify-center gap-2 mb-2">
                <Link to="/privacy" className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {t.privacyPolicy}
                </Link>
                <Link to="/terms" className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {t.termsOfService}
                </Link>
                <Link to="/cookies" className={`text-sm transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    {t.cookieSettings}
                </Link>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                © <span>{ new Date().getFullYear() }</span> Emojio Platform. {t.footerCopyright}
            </p>
        </nav>
      </div>
    </footer>
  )
}
