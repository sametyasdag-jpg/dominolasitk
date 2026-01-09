/**
 * GÜVENLİ SCRIPT - SADECE reviews FIELD'INI GÜNCELLER
 * 
 * Bu script:
 * - HİÇBİR ürünü SİLMEZ
 * - HİÇBİR field'ı DEĞİŞTİRMEZ (reviews hariç)
 * - SADECE reviews değeri 0 olan ürünleri günceller
 * - reviews değerini 500-1700 arası random yapar
 * 
 * ⚠️ DİKKAT: updateDoc() fonksiyonu SADECE belirtilen field'ı günceller,
 *    diğer tüm field'lar (name, price, images, stock, vb.) AYNI KALIR!
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDRwrJIH59pSMucFIFkeDWGd2f5uoBc3zc",
  authDomain: "otomotivsepeti-8048d.firebaseapp.com",
  projectId: "otomotivsepeti-8048d",
  storageBucket: "otomotivsepeti-8048d.firebasestorage.app",
  messagingSenderId: "455300473454",
  appId: "1:455300473454:web:95649300aa59a71f7ffc7f",
  measurementId: "G-VKF0V9CK8V"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 500-1700 arası random sayı üret
function getRandomReviews() {
  return Math.floor(Math.random() * (1700 - 500 + 1)) + 500;
}

async function updateProductReviews() {
  console.log('🔒 GÜVENLİ GÜNCELLEME BAŞLIYOR...');
  console.log('⚠️  Bu script SADECE reviews=0 olan ürünlerin reviews field\'ını günceller.');
  console.log('⚠️  Diğer hiçbir field\'a (name, price, images, stock, vb.) DOKUNMAZ!\n');
  
  try {
    // 1. Mevcut ürünleri getir
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    
    const totalProducts = snapshot.size;
    console.log(`📦 Toplam ${totalProducts} ürün bulundu.`);
    
    if (totalProducts === 0) {
      console.log('❌ Hiç ürün bulunamadı!');
      return;
    }
    
    // 2. Önce reviews=0 olan ürünleri say ve listele
    const productsWithZeroReviews = [];
    
    for (const docSnap of snapshot.docs) {
      const productData = docSnap.data();
      const currentReviews = productData.reviews;
      
      // reviews değeri tam olarak 0 olanları bul
      if (currentReviews === 0) {
        productsWithZeroReviews.push({
          id: docSnap.id,
          name: productData.name || 'İsimsiz Ürün',
          currentReviews: currentReviews
        });
      }
    }
    
    console.log(`🔍 reviews=0 olan ürün sayısı: ${productsWithZeroReviews.length}`);
    console.log(`📊 reviews>0 olan ürün sayısı: ${totalProducts - productsWithZeroReviews.length} (bunlara dokunulmayacak)\n`);
    
    if (productsWithZeroReviews.length === 0) {
      console.log('✅ Tüm ürünlerin reviews değeri zaten 0\'dan büyük. Güncelleme yapılmadı.');
      process.exit(0);
      return;
    }
    
    // 3. SADECE reviews=0 olan ürünlerin reviews field'ını güncelle
    let updated = 0;
    let errors = 0;
    const updateLog = [];
    
    console.log('🔄 Güncelleme başlıyor...\n');
    
    for (const product of productsWithZeroReviews) {
      const newReviews = getRandomReviews();
      
      try {
        // SADECE reviews field'ını güncelle - updateDoc diğer field'lara DOKUNMAZ
        const productDocRef = doc(db, 'products', product.id);
        await updateDoc(productDocRef, {
          reviews: newReviews  // SADECE bu field güncellenir!
        });
        
        updated++;
        updateLog.push({
          name: product.name.substring(0, 50) + (product.name.length > 50 ? '...' : ''),
          oldReviews: 0,
          newReviews: newReviews
        });
        
        // Her 10 üründe bir ilerleme göster
        if (updated % 10 === 0) {
          console.log(`✅ ${updated}/${productsWithZeroReviews.length} ürün güncellendi...`);
        }
        
      } catch (err) {
        errors++;
        console.error(`❌ Hata (${product.name}):`, err.message);
      }
    }
    
    // 4. Sonuçları göster
    console.log('\n========================================');
    console.log('📊 SONUÇ:');
    console.log('========================================');
    console.log(`📦 Toplam ürün sayısı: ${totalProducts} (DEĞİŞMEDİ)`);
    console.log(`🔍 reviews=0 olan ürün sayısı: ${productsWithZeroReviews.length}`);
    console.log(`✅ Başarıyla güncellenen: ${updated} ürün`);
    console.log(`❌ Hata olan: ${errors} ürün`);
    console.log(`⏭️  Atlanılan (reviews>0): ${totalProducts - productsWithZeroReviews.length} ürün`);
    console.log('========================================\n');
    
    // 5. Güncellenen ürünlerin listesini göster
    if (updateLog.length > 0) {
      console.log('📋 GÜNCELLENMİŞ ÜRÜNLER:');
      console.log('------------------------');
      updateLog.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}`);
        console.log(`   reviews: ${item.oldReviews} → ${item.newReviews}`);
      });
      console.log('------------------------\n');
    }
    
    console.log('🎉 İşlem tamamlandı!');
    console.log('✅ Hiçbir ürün silinmedi');
    console.log('✅ Sadece reviews=0 olan ürünlerin reviews değeri güncellendi');
    console.log('✅ Diğer tüm field\'lar (name, price, images, stock, vb.) AYNI KALDI');
    
  } catch (error) {
    console.error('❌ Kritik hata:', error);
  }
  
  process.exit(0);
}

// Scripti çalıştır
updateProductReviews();

