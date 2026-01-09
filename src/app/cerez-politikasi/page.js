'use client';

import { FaCookieBite, FaCog, FaChartBar, FaBullhorn, FaShieldAlt, FaToggleOn } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function CerezPolitikasiPage() {
  const cookieTypes = [
    {
      icon: FaCog,
      title: 'Zorunlu Çerezler',
      description: 'Web sitesinin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler olmadan site doğru şekilde çalışamaz.',
      examples: ['Oturum yönetimi', 'Sepet bilgileri', 'Güvenlik çerezleri'],
      canDisable: false
    },
    {
      icon: FaChartBar,
      title: 'Analitik Çerezler',
      description: 'Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir.',
      examples: ['Google Analytics', 'Hotjar', 'Sayfa görüntüleme istatistikleri'],
      canDisable: true
    },
    {
      icon: FaBullhorn,
      title: 'Pazarlama Çerezleri',
      description: 'Kişiselleştirilmiş reklamlar göstermek için kullanılan çerezlerdir.',
      examples: ['Meta Pixel', 'Google Ads', 'Yeniden pazarlama çerezleri'],
      canDisable: true
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
              <FaCookieBite className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Çerez Politikası</h1>
            <p className="text-gray-300 text-lg">
              Web sitemizde çerezleri nasıl kullandığımız hakkında bilgi
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Intro */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Çerez Nedir?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Çerezler, web sitelerinin tarayıcınıza kaydettiği küçük metin dosyalarıdır. 
              Bu dosyalar, siteyi bir sonraki ziyaretinizde sizi tanımak, tercihlerinizi hatırlamak 
              ve size daha iyi bir deneyim sunmak için kullanılır.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>otomarket360.com</strong> olarak, kullanıcı deneyimini iyileştirmek, 
              site performansını analiz etmek ve kişiselleştirilmiş içerik sunmak için çerezler kullanmaktayız.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="space-y-6 mb-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <cookie.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{cookie.title}</h3>
                      {cookie.canDisable ? (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          Devre dışı bırakılabilir
                        </span>
                      ) : (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Zorunlu
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{cookie.description}</p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-700 mb-2 text-sm">Örnekler:</h4>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Party Cookies */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Üçüncü Taraf Çerezleri</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sitemizde aşağıdaki üçüncü taraf hizmetlerden çerezler kullanılmaktadır:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-700 mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-600">Site trafiği ve kullanıcı davranışlarını analiz etmek için kullanılır.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-700 mb-2">Hotjar</h4>
                <p className="text-sm text-gray-600">Kullanıcı deneyimini anlamak ve iyileştirmek için ısı haritaları oluşturur.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-700 mb-2">Meta (Facebook) Pixel</h4>
                <p className="text-sm text-gray-600">Reklam kampanyalarının etkinliğini ölçmek için kullanılır.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-700 mb-2">LiveChat</h4>
                <p className="text-sm text-gray-600">Canlı destek hizmeti sunmak için kullanılır.</p>
              </div>
            </div>
          </div>

          {/* Cookie Management */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaToggleOn className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Çerez Yönetimi</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz. Çoğu tarayıcı, çerezleri 
              kabul etme, reddetme veya silme seçenekleri sunar.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
              <p className="text-yellow-800 text-sm">
                <strong>Uyarı:</strong> Zorunlu çerezleri devre dışı bırakmanız durumunda 
                web sitemizin bazı özellikleri düzgün çalışmayabilir.
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-700 mb-3">Tarayıcı Bazında Çerez Ayarları:</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span><strong>Mozilla Firefox:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Çerezler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span><strong>Microsoft Edge:</strong> Ayarlar &gt; Gizlilik &gt; Çerezler</span>
              </li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Çerez Saklama Süreleri</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 rounded-tl-lg">Çerez Türü</th>
                    <th className="text-left p-3 rounded-tr-lg">Saklama Süresi</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-t border-gray-100">
                    <td className="p-3">Oturum çerezleri</td>
                    <td className="p-3">Tarayıcı kapatıldığında silinir</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-3">Kalıcı çerezler</td>
                    <td className="p-3">1-24 ay arası</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-3">Analitik çerezler</td>
                    <td className="p-3">2 yıla kadar</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-3">Pazarlama çerezleri</td>
                    <td className="p-3">90 gün - 2 yıl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-800 mb-2">İletişim</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              Çerez politikamız hakkında sorularınız için <strong>info@otomarket360.com</strong> adresinden 
              bizimle iletişime geçebilirsiniz.
            </p>
          </div>

          {/* Last Update */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Son güncelleme: Ocak 2025
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

