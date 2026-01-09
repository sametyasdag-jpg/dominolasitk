const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, updateDoc, query, where } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAlb8h5trjojK_KbDu__15JolEsE5rAG38",
  authDomain: "dominolastik-d109d.firebaseapp.com",
  projectId: "dominolastik-d109d",
  storageBucket: "dominolastik-d109d.firebasestorage.app",
  messagingSenderId: "556504123794",
  appId: "1:556504123794:web:645f0109aa1b3e3893994b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fixCategoryId() {
  console.log('🔧 Categories collection düzeltiliyor...\n');
  
  try {
    // Tüm kategorileri al
    const categoriesRef = collection(db, 'categories');
    const snapshot = await getDocs(categoriesRef);
    
    for (const docSnap of snapshot.docs) {
      const data = docSnap.data();
      
      // "dort-mevsim-lastikleri" olan categoryId'yi bul
      if (data.categoryId === 'dort-mevsim-lastikleri') {
        console.log(`📝 Bulunan document: ${docSnap.id}`);
        console.log(`   Eski categoryId: ${data.categoryId}`);
        
        // categoryId'yi düzelt
        await updateDoc(doc(db, 'categories', docSnap.id), {
          categoryId: 'dört-mevsim-lastikleri'
        });
        
        console.log(`   ✅ Yeni categoryId: dört-mevsim-lastikleri`);
        console.log('\n🎉 Kategori başarıyla güncellendi!');
        process.exit(0);
        return;
      }
    }
    
    console.log('⚠️ "dort-mevsim-lastikleri" categoryId\'li kategori bulunamadı.');
    
    // Mevcut kategorileri listele
    console.log('\n📋 Mevcut kategoriler:');
    snapshot.docs.forEach(docSnap => {
      const data = docSnap.data();
      console.log(`   - ${data.categoryId}: ${data.name}`);
    });
    
  } catch (error) {
    console.error('❌ Hata:', error);
  }
  
  process.exit(0);
}

fixCategoryId();
