import { Link } from 'react-router-dom'

export default function Terms({ t, darkMode }) {
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
        {t.termsOfService}
      </h1>

      <div className={`space-y-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            1. {t.language === 'es' ? 'Aceptación' : 'Acceptance'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Al acceder y utilizar Emojio, aceptas vincularte por estos términos de servicio. Si no estás de acuerdo con alguno de estos términos, por favor no utilices el servicio.'
              : 'By accessing and using Emojio, you agree to be bound by these terms of service. If you do not agree to any of these terms, please do not use the service.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            2. {t.language === 'es' ? 'Descripción del servicio' : 'Description of Service'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Emojio es una herramienta gratuita que permite buscar, explorar y copiar emojis al portapapeles. No requiere pago ni registro para su uso.'
              : 'Emojio is a free tool that allows you to search, explore, and copy emojis to the clipboard. No payment or registration is required to use the service.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            3. {t.language === 'es' ? 'Uso aceptable' : 'Acceptable Use'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Está permitido: buscar y copiar emojis para uso personal. Está prohibido: utilizar bots o scrapers automatizados para acceder de forma masiva al servicio.'
              : 'Allowed: searching and copying emojis for personal use. Prohibited: using bots or automated scrapers to access the service in bulk.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            4. {t.language === 'es' ? 'Propiedad intelectual' : 'Intellectual Property'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Los emojis son estándar Unicode y son de dominio público. El diseño, código y marca Emojio son propiedad de Emojio. Los datos de emojis provienen de Emojibase bajo licencia MIT.'
              : 'Emojis are Unicode standard and are in the public domain. The design, code, and Emojio brand are property of Emojio. Emoji data comes from Emojibase under MIT license.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            5. {t.language === 'es' ? 'Limitación de responsabilidad' : 'Limitation of Liability'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'El servicio se ofrece "tal cual", sin garantía de disponibilidad. Emojio no garantiza que el servicio esté disponible en todo momento sin interrupciones.'
              : 'The service is provided "as is", without guarantee of availability. Emojio does not guarantee that the service is available at all times without interruptions.'}
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            6. {t.language === 'es' ? 'Modificaciones' : 'Modifications'}
          </h2>
          <p>
            {t.language === 'es'
              ? 'Emojio se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al ser publicados en esta página.'
              : 'Emojio reserves the right to modify these terms at any time. Changes will take effect when published on this page.'}
          </p>
        </section>
      </div>
    </div>
  )
}
