import { Link } from 'react-router-dom'

export default function Privacy({ t, darkMode }) {
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
        {t.privacyPolicy}
      </h1>

      <div className={`space-y-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            1. {t.language === 'es' ? 'Información que recopilamos' : 'Information We Collect'}
          </h2>
          <p>
            {t.language === 'es' 
              ? 'Emojio no recopila ningún dato personal. No requiremos registro, no usamos cookies de seguimiento, y no recopilamos información de identificación personal.'
              : 'Emojio does not collect any personal data. We do not require registration, we do not use tracking cookies, and we do not collect personally identifiable information.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            2. {t.language === 'es' ? 'Cookies locales' : 'Local Storage'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Utilizamos localStorage únicamente para guardar tus preferencias de tema (oscuro/claro) e idioma. Estos datos se almacenan exclusivamente en tu dispositivo y no se transmiten a ningún servidor.'
              : 'We use localStorage only to save your theme (dark/light) and language preferences. This data is stored exclusively on your device and is not transmitted to any server.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            3. {t.language === 'es' ? 'Servicios de terceros' : 'Third-Party Services'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'No utilizamos servicios de análisis, publicidad, ni ningún tercero que recopile información. Los únicos datos que se transmiten son las peticiones a la API de Emojibase para cargar la lista de emojis.'
              : 'We do not use analytics services, advertising, or any third parties that collect information. The only data transmitted is requests to the Emojibase API to load the emoji list.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            4. {t.language === 'es' ? 'Compartir datos' : 'Sharing Data'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'No compartimos ningún dato porque no recopilamos ninguno.'
              : 'We do not share any data because we do not collect any.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            5. {t.language === 'es' ? 'Seguridad' : 'Security'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Dado que no recopilamos datos personales, no hay información sensible que proteger.'
              : 'Since we do not collect personal data, there is no sensitive information to protect.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            6. {t.language === 'es' ? 'Tus derechos' : 'Your Rights'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Puedes borrar las preferencias almacenadas en localStorage desde la configuración de tu navegador en cualquier momento.'
              : 'You can delete the preferences stored in localStorage from your browser settings at any time.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            7. {t.language === 'es' ? 'Cambios' : 'Changes'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Cualquier cambio en esta política de privacidad será actualizado en esta página.'
              : 'Any changes to this privacy policy will be updated on this page.'}
          </p>
        </section>
      </div>
    </div>
  )
}
