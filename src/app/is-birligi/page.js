'use client';

import { FaHandshake, FaStore, FaTruck, FaChartLine, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function IsBirligiPage() {
  const partnershipTypes = [
    {
      icon: FaStore,
      title: 'Tedarikçi Ortaklığı',
      description: 'Kaliteli ürünlerinizi platformumuzda satışa sunun.',
      benefits: ['Geniş müşteri kitlesine erişim', 'Profesyonel pazarlama desteği', 'Güvenli ödeme sistemi']
    },
    {
      icon: FaTruck,
      title: 'Lojistik Ortaklığı',
      description: 'Kargo ve lojistik hizmetlerinde iş birliği yapın.',
      benefits: ['Yüksek hacimli gönderim', 'Uzun vadeli anlaşma', 'Düzenli iş akışı']
    },
    {
      icon: FaChartLine,
      title: 'Kurumsal Satış',
      description: 'Filo ve kurumsal müşterilerimize özel çözümler.',
      benefits: ['Toplu alım indirimleri', 'Özel fiyatlandırma', 'Öncelikli destek']
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
              <FaHandshake className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">İş Birliği</h1>
            <p className="text-gray-300 text-lg">
              Birlikte büyümek için iş ortaklığı fırsatları
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Intro */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Neden Oto Market 360 ile Çalışmalısınız?</h2>
            <p className="text-gray-600 leading-relaxed">
              Oto Market 360 olarak, iş ortaklarımızla karşılıklı fayda sağlayan uzun vadeli ilişkiler kurmayı hedefliyoruz. 
              Motorsiklet ve otomotiv sektöründe güçlü bir marka olarak, tedarikçilerimize ve iş ortaklarımıza 
              geniş bir müşteri kitlesine erişim imkanı sunuyoruz.
            </p>
          </div>

          {/* Partnership Types */}
          <div className="space-y-6 mb-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-700 mb-3 text-sm">Avantajlar:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 md:p-8 text-white mb-8">
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="w-8 h-8" />
              <h2 className="text-2xl font-bold">İletişime Geçin</h2>
            </div>
            <p className="text-red-100 mb-6">
              İş birliği teklifleriniz için bizimle iletişime geçebilirsiniz. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <a 
              href="mailto:isbirligi@otomarket360.com" 
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
              isbirligi@otomarket360.com
            </a>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-800 mb-2">İş Birliği Süreci</h3>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-2">
              <li>1. İş birliği talebinizi e-posta ile iletin</li>
              <li>2. Ekibimiz talebinizi değerlendirecektir</li>
              <li>3. Uygun görülmesi halinde detaylı görüşme yapılacaktır</li>
              <li>4. Karşılıklı anlaşma sonrası iş birliği başlar</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

