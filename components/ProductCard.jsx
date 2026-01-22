import React from 'react';

export default function ProductCard({ product }) {
  // هنا نجهز رابط الواتساب التلقائي
  // استبدل الرقم برقم أخيك مع رمز الدولة (بدون +)
  const phoneNumber = "963968546321"; 
  const message = `مرحباً Smart Store، أريد الاشتراك في عرض: ${product.name} بسعر ${product.price}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
      
      {/* شارة "الأكثر مبيعاً" تظهر فقط للمنتجات المميزة */}
      {product.isPopular && (
        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-br-xl rounded-tl-2xl z-10">
          🔥 خيار المصممين
        </div>
      )}
          {product.isForCoding && (
        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-br-xl rounded-tl-2xl z-10">
          💻 خيار المبرمجين
        </div>
      )}

      {/* صورة المنتج */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
            {/* تأكد أن الصور موجودة في مجلد public */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        
        {/* السعر والخصم */}
        <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
            <span className="text-blue-400 text-xl font-black">{product.price}</span>
        </div>

        <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
          {product.description}
        </p>

        {/* زر الشراء */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          اطلب الآن 🚀
        </a>
      </div>
    </div>
  );
}