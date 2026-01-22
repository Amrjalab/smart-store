'use client';

import Link from 'next/link';

export default function Navbar() {

  // دالة للتنقل للأقسام (مثل العروض والأسئلة)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // دالة خاصة للطلوع للأعلى (تضمن العودة للبداية 100%)
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkStyle = "text-gray-300 hover:text-white transition-colors cursor-pointer";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* اللوجو: يرجعك للأعلى باستخدام الدالة الجديدة */}
        <Link 
          href="/" 
          onClick={scrollToTop} 
          className="text-2xl font-black text-white"
        >
          Smart <span className="text-blue-500">Store</span>
        </Link>

        {/* الروابط */}
        <div className="hidden md:flex gap-8 items-center">
          
          <a 
            href="/" 
            onClick={scrollToTop} // 👈 استخدمنا دالة الصعود للأعلى هنا
            className={linkStyle}
          >
            الرئيسية
          </a>

          <a 
            href="/" 
            onClick={(e) => scrollToSection(e, 'products')} 
            className={linkStyle}
          >
            العروض
          </a>

          <a 
            href="/" 
            onClick={(e) => scrollToSection(e, 'faq')} 
            className={linkStyle}
          >
            الأسئلة
          </a>

        </div>

        {/* زر الواتساب */}
        <a 
          href="https://wa.me/963968546321" 
          target="_blank"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-all"
        >
          تواصل معنا
        </a>

      </div>
    </nav>
  );
}