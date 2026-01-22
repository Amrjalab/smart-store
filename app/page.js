'use client'; 

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { products } from '../data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'الكل' },
    { id: 'Design', label: 'تصميم ومونتاج' },
    { id: 'AI Tools', label: 'ذكاء اصطناعي' }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(item => item.category === activeCategory);

  // دالة للسكرول الناعم لزر "تصفح العروض"
  const scrollToProducts = (e) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white" dir="rtl">
      
      {/* 1. قسم الواجهة (Hero Section) - رجعناه قوي متل الأول */}
      {/* أضفنا pt-32 عشان النافبار ما يغطي الكلام */}
      <header className="relative overflow-hidden pt-32 pb-20 text-center px-4">
        
        {/* خلفية الإضاءة الزرقاء (The Glow) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/20 via-black to-black -z-10 blur-3xl opacity-50"></div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Store</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          بوابتك للحصول على أقوى الاشتراكات الرقمية (Canva, CapCut, Gemini) بأسعار توفيرية، تفعيل فوري، وضمان كامل.
        </p>
        
        {/* زر تصفح العروض الكبير */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={scrollToProducts}
            className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            تصفح العروض 🔥
          </button>
        </div>

        {/* أزرار الفلترة (مدمجة هنا بشكل جميل) */}
        <div className="flex flex-wrap justify-center gap-4">
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

      {/* 2. قسم المنتجات */}
      <section id="products" className="container mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12 border-b border-gray-800 pb-4 inline-block mx-auto relative">
          أحدث العروض الحصرية
          {/* خط أزرق صغير تحت العنوان */}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
        </h2>
        
        {/* المنطق الذكي: لا يوجد منتجات / منتج واحد / سلايدر */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-xl">لا توجد منتجات في هذا القسم حالياً.</p>
          </div>
        ) : filteredProducts.length === 1 ? (
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <ProductCard product={filteredProducts[0]} />
            </div>
          </div>
        ) : (
          <ProductSlider products={filteredProducts} />
        )}
      </section>

      {/* 3. الأسئلة الشائعة */}
      <FAQ />

      {/* 4. آراء العملاء */}
      <section className="bg-gray-900/50 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">ماذا يقول عملاؤنا؟ ⭐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
              <p className="text-gray-300 mb-4">"اشتريت حساب Canva Pro، التفعيل وصلني خلال دقيقة وحدة! تعامل راقي جداً."</p>
              <div className="font-bold text-white">- أحمد س.</div>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
              <p className="text-gray-300 mb-4">"أفضل متجر تعاملت معه، الأسعار ولا غلطة مقارنة بالسوق."</p>
              <div className="font-bold text-white">- سارة م.</div>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
              <p className="text-gray-300 mb-4">"كنت خايف بالبداية بس الضمان حقيقي، شكراً Smart Store."</p>
              <div className="font-bold text-white">- محمد ك.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. الفوتر */}
      <Footer />

    </main>
  );
}