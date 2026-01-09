// Firebase Categories Seed Script
// SADECE categories collection'ına ekleme yapar - products'a DOKUNMAZ
// Çalıştırmak için: node scripts/seedCategories.js

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, Timestamp } = require('firebase/firestore');

// Firebase Config - dominolastik projesi
const firebaseConfig = {
  apiKey: "AIzaSyAlb8h5trjojK_KbDu__15JolEsE5rAG38",
  authDomain: "dominolastik-d109d.firebaseapp.com",
  projectId: "dominolastik-d109d",
  storageBucket: "dominolastik-d109d.firebasestorage.app",
  messagingSenderId: "556504123794",
  appId: "1:556504123794:web:645f0109aa1b3e3893994b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lastik Alsana Kategorileri
const categories = [
  {
    categoryId: "kis-lastikleri",
    name: "Kış Lastikleri",
    description: "Kar ve buzlu yollarda maksimum güvenlik sağlayan kış lastikleri",
    icon: "❄️",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600",
    order: 1
  },
  {
    categoryId: "yaz-lastikleri",
    name: "Yaz Lastikleri",
    description: "Yüksek performans ve düşük yakıt tüketimi sunan yaz lastikleri",
    icon: "☀️",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600",
    order: 2
  },
  {
    categoryId: "dört-mevsim-lastikler",
    name: "Dört Mevsim Lastikleri",
    description: "Her mevsim güvenli sürüş için 4 mevsim lastikler",
    icon: "🔄",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    order: 3
  },
  {
    categoryId: "jant",
    name: "Jantlar",
    description: "Araçlarınız için şık ve dayanıklı jant modelleri",
    icon: "🛞",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=600",
    order: 4
  },
  {
    categoryId: "motor-yaglari",
    name: "Motor Yağları",
    description: "Motorunuzun performansını artıran kaliteli motor yağları",
    icon: "🛢️",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600",
    order: 5
  },
  {
    categoryId: "motorsiklet-lastikleri",
    name: "Motorsiklet Lastikleri",
    description: "Motorsikletiniz için yüksek tutuşlu lastikler",
    icon: "🏍️",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
    order: 6
  },
  {
    categoryId: "agir-vasita-lastikleri",
    name: "Ağır Vasıta Lastikleri",
    description: "Kamyon ve TIR'lar için dayanıklı ağır vasıta lastikleri",
    icon: "🚛",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600",
    order: 7
  },
  {
    categoryId: "is-makinesi-lastikleri",
    name: "İş Makinesi Lastikleri",
    description: "İş makineleri için endüstriyel lastikler",
    icon: "🚜",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600",
    order: 8
  }
];

async function seedCategories() {
  console.log('🛞 Lastik Alsana - Kategoriler ekleniyor...\n');
  console.log('⚠️  SADECE categories collection\'ına ekleme yapılıyor!');
  console.log('⚠️  products collection\'a DOKUNULMUYOR!\n');
  console.log('='.repeat(50));
  
  try {
    for (const category of categories) {
      const categoryData = {
        ...category,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // categoryId'yi document ID olarak kullan
      const docRef = doc(db, 'categories', category.categoryId);
      await setDoc(docRef, categoryData);
      
      console.log(`✅ ${category.name} (${category.categoryId}) eklendi`);
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('🎉 Tüm kategoriler başarıyla eklendi!');
    console.log(`📊 Toplam: ${categories.length} kategori`);
    console.log('\n🛞 Lastik Alsana kategorileri hazır!');
    
  } catch (error) {
    console.error('❌ Hata:', error);
  }
  
  process.exit(0);
}

// Script'i çalıştır
seedCategories();
