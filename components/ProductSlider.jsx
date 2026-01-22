'use client';

import React, { useRef } from 'react';
import ProductCard from './ProductCard';

export default function ProductSlider({ products }) {
  const sliderRef = useRef(null);

  // دالة التحريك (يمين ويسار)
  const slide = (direction) => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      // نحسب عرض الكرت الواحد بناءً على عرض الشاشة الحالي
      const scrollAmount = current.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      
      // التحريك (مع مراعاة الاتجاه RTL)
      // في المواقع العربية: زر "اليسار" يعني التالي، وزر "اليمين" يعني السابق
      const scrollValue = direction === 'next' ? -scrollAmount : scrollAmount;
      
      current.scrollBy({ left: scrollValue, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      
      {/* 1. زر التنقل (يمين - السابق) */}
      <button 
        onClick={() => slide('prev')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1/2 disabled:opacity-30"
        aria-label="Previous"
      >
        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* 2. حاوية المنتجات (السلايدر نفسه) */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // إخفاء شريط التمرير
      >
        {products.map((product) => (
        <div 
            key={product.id} 
            // 👇 التغيير الجوهري هنا:
            // min-w-[85%] للموبايل: يعني الكرت بياخد 85% وبيترك 15% للكرت اللي بعده يبين
            className="min-w-[85%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center"
          >
            {/* عرض 100% للموبايل، 50% للتابلت، 33% للابتوب */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* 3. زر التنقل (يسار - التالي) */}
      <button 
        onClick={() => slide('next')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1/2"
        aria-label="Next"
      >
        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

    </div>
  );
}