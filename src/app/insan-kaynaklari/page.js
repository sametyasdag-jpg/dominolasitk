'use client';

import { FaUsers, FaBriefcase, FaGraduationCap, FaHeart, FaRocket, FaPaperPlane } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function InsanKaynaklariPage() {
  const benefits = [
    {
      icon: FaRocket,
      title: 'Kariyer Gelişimi',
      description: 'Sürekli öğrenme ve gelişim fırsatları sunuyoruz.'
    },
    {
      icon: FaHeart,
      title: 'Pozitif Çalışma Ortamı',
      description: 'Dinamik ve motive edici bir ekip ortamı.'
    },
    {
      icon: FaGraduationCap,
      title: 'Eğitim Desteği',
      description: 'Mesleki gelişim için eğitim programları.'
    },
    {
      icon: FaBriefcase,
      title: 'Rekabetçi Ücret',
      description: 'Sektörde rekabetçi maaş ve yan haklar.'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
              <FaUsers className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">İnsan Kaynakları</h1>
            <p className="text-gray-300 text-lg">
              Lastik Alsana ailesine katılın!
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* About Working */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Neden Lastik Alsana?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lastik Alsana olarak, çalışanlarımızın en değerli varlığımız olduğuna inanıyoruz. 
              Dinamik, yenilikçi ve gelişime açık bir çalışma ortamı sunarak, ekip arkadaşlarımızın 
              hem profesyonel hem de kişisel gelişimlerini destekliyoruz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaBriefcase className="text-red-500" />
              Açık Pozisyonlar
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBriefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Şu An Açık Pozisyon Bulunmuyor</h3>
              <p className="text-gray-500 text-sm">
                Ancak özgeçmişinizi bize gönderebilirsiniz. Uygun pozisyon açıldığında sizinle iletişime geçeriz.
              </p>
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 md:p-8 text-white mb-8">
            <div className="flex items-center gap-4 mb-4">
              <FaPaperPlane className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Başvuru Yapın</h2>
            </div>
            <p className="text-red-100 mb-6">
              Lastik Alsana ailesine katılmak için özgeçmişinizi aşağıdaki e-posta adresine gönderebilirsiniz.
            </p>
            <a 
              href="mailto:kariyer@lastikalsana.com" 
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
            >
              <FaPaperPlane className="w-4 h-4" />
              kariyer@lastikalsana.com
            </a>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Başvuru Sürecimiz</h3>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-2">
              <li>• Özgeçmişinizi e-posta ile gönderin</li>
              <li>• İK ekibimiz başvurunuzu değerlendirecektir</li>
              <li>• Uygun görülmeniz halinde mülakat için davet edileceksiniz</li>
              <li>• Başarılı adaylar Lastik Alsana ailesine katılır</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

