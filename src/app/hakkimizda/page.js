'use client';

import { FaBuilding, FaUsers, FaHandshake, FaAward, FaShieldAlt, FaTruck } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function HakkimizdaPage() {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Güvenilirlik',
      description: 'Müşterilerimize her zaman kaliteli ve güvenilir ürünler sunuyoruz.'
    },
    {
      icon: FaUsers,
      title: 'Müşteri Odaklılık',
      description: 'Müşteri memnuniyeti bizim için her şeyden önce gelir.'
    },
    {
      icon: FaTruck,
      title: 'Hızlı Teslimat',
      description: 'Siparişlerinizi en kısa sürede kapınıza ulaştırıyoruz.'
    },
    {
      icon: FaAward,
      title: 'Kalite',
      description: 'Yalnızca en kaliteli ve onaylı ürünleri sizlere sunuyoruz.'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
              <FaBuilding className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-gray-300 text-lg">
              Oto Market 360 olarak motorsiklet ve otomotiv tutkunlarına hizmet veriyoruz.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Company Story */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaHandshake className="text-red-500" />
              Biz Kimiz?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-800">Oto Market 360 Limited Şirketi</strong>, motorsiklet ve otomotiv tutkunlarına yönelik, 
                kask, koruyucu giyim, eldiven, lastik ve aksesuar gibi ürünlerde uzmanlaşmış güvenilir bir e-ticaret platformudur.
              </p>
              <p>
                Kurulduğu günden itibaren müşterilerine hem güvenli hem de sorunsuz bir alışveriş deneyimi sunmak için 
                modern altyapılar ve yüksek güvenlik standartlarıyla hizmet vermekteyiz.
              </p>
              <p>
                Türkiye'nin dört bir yanına hızlı ve güvenli teslimat yapıyoruz. Müşteri memnuniyetini her zaman 
                ön planda tutarak, sektörde güvenilir bir marka olmayı başardık.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Değerlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Misyonumuz</h3>
              <p className="text-red-100 leading-relaxed">
                Motorsiklet ve otomotiv tutkunlarına en kaliteli ürünleri, en uygun fiyatlarla ve 
                mükemmel müşteri deneyimiyle sunmak.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Vizyonumuz</h3>
              <p className="text-slate-300 leading-relaxed">
                Türkiye'nin en güvenilir ve tercih edilen motorsiklet ve otomotiv 
                ekipmanları platformu olmak.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Rakamlarla Biz</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">10+</div>
                <div className="text-sm text-gray-600 mt-1">Yıllık Tecrübe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600 mt-1">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Ürün Çeşidi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">81</div>
                <div className="text-sm text-gray-600 mt-1">İl'e Teslimat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

