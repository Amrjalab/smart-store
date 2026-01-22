'use client'; 

import { useState } from 'react';
import ProductCard from '../components/ProductCard'; // ما زلنا نحتاجه لو أردنا عرض شيء آخر
import ProductSlider from '../components/ProductSlider'; // 👈 1. استدعاء السلايدر
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { products } from '../data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  // ... (نفس كود التصنيفات السابق تماماً) ...
  const categories = [
    { id: 'All', label: 'الكل' },
    { id: 'Design', label: 'تصميم ومونتاج' },
    { id: 'AI Tools', label: 'ذكاء اصطناعي' }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white" dir="rtl">
      
      {/* ... (Hero Section نفس القديم) ... */}
      <header className="relative overflow-hidden py-20 text-center px-4">
         {/* ... نفس الكود ... */}
         
         {/* أزرار الفلترة */}
         <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border ${
                activeCategory === cat.id 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105' 
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>


      {/* 2. Products Section (التغيير هنا) */}
   {/* 2. قسم المنتجات */}
      <section id="products" className="container mx-auto px-6 pb-24">
        
        {/* الحالة الأولى: لا يوجد منتجات */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-xl">لا توجد منتجات في هذا القسم حالياً.</p>
          </div>

        /* الحالة الثانية: منتج واحد فقط (نعرضه بمركز الشاشة وبحجم مرتب) */
        ) : filteredProducts.length === 1 ? (
          <div className="flex justify-start">
            <div className="w-full max-w-sm"> {/* max-w-sm يمنع الكرت من أن يصبح عملاقاً */}
              <ProductCard product={filteredProducts[0]} />
            </div>
          </div>

        /* الحالة الثالثة: أكثر من منتج (نشغل السلايدر) */
        ) : (
          <ProductSlider products={filteredProducts} />
        )}

      </section>

      <FAQ />
      <Footer />

    </main>
  );
}