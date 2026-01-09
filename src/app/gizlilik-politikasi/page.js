'use client';

import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaEye, FaFileContract } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function GizlilikPolitikasiPage() {
  const sections = [
    {
      icon: FaDatabase,
      title: 'Toplanan Veriler',
      content: `Oto Market 360 olarak, hizmetlerimizi sunmak için aşağıdaki kişisel verileri toplayabiliriz:
      
• Ad, soyad ve iletişim bilgileri (telefon, e-posta, adres)
• Ödeme bilgileri (kredi kartı bilgileri işlem sırasında kullanılır, saklanmaz)
• Sipariş geçmişi ve alışveriş tercihleri
• Cihaz ve tarayıcı bilgileri
• IP adresi ve konum bilgileri`
    },
    {
      icon: FaEye,
      title: 'Verilerin Kullanım Amacı',
      content: `Topladığımız kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:

• Sipariş işlemlerinin gerçekleştirilmesi ve teslimat
• Müşteri hizmetleri desteği sağlanması
• Ürün ve hizmetlerimizin iyileştirilmesi
• Yasal yükümlülüklerin yerine getirilmesi
• Kampanya ve promosyon bilgilendirmeleri (izniniz dahilinde)`
    },
    {
      icon: FaUserShield,
      title: 'Veri Güvenliği',
      content: `Kişisel verilerinizin güvenliği bizim için son derece önemlidir:

• 256 bit SSL şifreleme teknolojisi kullanılmaktadır
• Kredi kartı bilgileri veri tabanımızda saklanmaz
• Verileriniz yetkisiz erişime karşı korunmaktadır
• Düzenli güvenlik güncellemeleri yapılmaktadır
• Çalışanlarımız veri güvenliği konusunda eğitimlidir`
    },
    {
      icon: FaFileContract,
      title: 'Üçüncü Taraflarla Paylaşım',
      content: `Kişisel verileriniz aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:

• Kargo ve teslimat hizmetleri için gerekli bilgiler
• Ödeme işlemleri için bankalar ve ödeme kuruluşları
• Yasal zorunluluklar gereği yetkili merciler
• İzniniz dahilinde iş ortaklarımız`
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
              <FaShieldAlt className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Gizlilik Politikası</h1>
            <p className="text-gray-300 text-lg">
              Kişisel verilerinizin korunması bizim için önemlidir.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Intro */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-800">Giriş</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Oto Market 360 Limited Şirketi olarak, müşterilerimizin gizliliğine ve kişisel verilerinin korunmasına 
              büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi 
              kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}

          {/* User Rights */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Haklarınız</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Kişisel verilerinizin işlenip işlenmediğini öğrenme
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Kişisel verilerinizin düzeltilmesini veya silinmesini isteme
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                İşlenen verilerin aleyhine sonuç çıkmasına itiraz etme
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-800 mb-2">İletişim</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              Gizlilik politikamız hakkında sorularınız için <strong>info@otomarket360.com</strong> adresinden 
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

