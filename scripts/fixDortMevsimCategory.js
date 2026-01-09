const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, deleteDoc, setDoc } = require('firebase/firestore');

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

async function fixCategories() {
  console.log('🔧 Dört Mevsim kategorileri düzeltiliyor...\n');
  
  try {
    // Get all categories
    const categoriesRef = collection(db, 'categories');
    const snapshot = await getDocs(categoriesRef);
    
    console.log('📋 Mevcut kategoriler:');
    const categoriesToDelete = [];
    let correctCategoryExists = false;
    
    for (const docSnap of snapshot.docs) {
      const data = docSnap.data();
      const catId = data.categoryId || docSnap.id;
      
      console.log(`   - ${docSnap.id}: categoryId="${catId}", name="${data.name}"`);
      
      // Check for mevsim related categories
      if (catId.includes('mevsim')) {
        if (catId === 'dört-mevsim-lastikler') {
          correctCategoryExists = true;
          console.log('     ✅ Bu doğru kategori');
        } else {
          categoriesToDelete.push(docSnap.id);
          console.log('     ❌ Bu silinecek (yanlış categoryId)');
        }
      }
    }
    
    // Delete wrong categories
    if (categoriesToDelete.length > 0) {
      console.log('\n🗑️ Yanlış kategoriler siliniyor...');
      for (const docId of categoriesToDelete) {
        await deleteDoc(doc(db, 'categories', docId));
        console.log(`   ✅ Silindi: ${docId}`);
      }
    }
    
    // Create correct category if it doesn't exist
    if (!correctCategoryExists) {
      console.log('\n📝 Doğru kategori oluşturuluyor...');
      const categoryData = {
        categoryId: 'dört-mevsim-lastikler',
        name: 'Dört Mevsim Lastikleri',
        icon: '🔄',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        description: 'Her mevsim güvenli sürüş için 4 mevsim lastikler',
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await setDoc(doc(db, 'categories', 'dört-mevsim-lastikler'), categoryData);
      console.log('   ✅ Kategori oluşturuldu: dört-mevsim-lastikler');
    }
    
    console.log('\n🎉 İşlem tamamlandı!');
    
  } catch (error) {
    console.error('❌ Hata:', error);
  }
  
  process.exit(0);
}

fixCategories();
