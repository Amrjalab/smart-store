import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-6 pb-24 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">أسئلة يتكرر طرحها 🤔</h2>
      <div className="space-y-4">
          
          {/* السؤال الأول */}
          <details className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center p-6 text-lg font-bold text-white list-none">
                  <span>ما هي طرق الدفع المتوفرة؟ 💰</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  نقبل الدفع حصراً عبر خدمة <strong>شام كاش (Sham Cash)</strong> لضمان سرعة التحويل وسهولة التعامل.
              </div>
          </details>

          {/* السؤال الثاني */}
          <details className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center p-6 text-lg font-bold text-white list-none">
                  <span>هل الدفع قبل أم بعد الاستلام؟ 🤝</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  بشكل عام، الدفع يكون <strong>مسبقاً</strong> لجميع الاشتراكات. <br/>
                  <span className="text-blue-400 font-bold">ولكن لدينا استثناء:</span> في اشتراك <strong>Canva Pro</strong>، يمكنك استلام الحساب وتفعيله أولاً، ثم تحويل المبلغ بعد التأكد!
              </div>
          </details>

          {/* السؤال الثالث */}
          <details className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center p-6 text-lg font-bold text-white list-none">
                  <span>أين يقع مركزكم؟ 📍</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  نحن متجر إلكتروني بالكامل! لا يوجد لدينا مركز فعلي، نعمل أونلاين لخدمتكم أينما كنتم وبأسرع وقت.
              </div>
          </details>

           {/* السؤال الرابع */}
           <details className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center p-6 text-lg font-bold text-white list-none">
                  <span>هل الاشتراكات نظامية ومضمونة؟ ✅</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  نعم، وبكل تأكيد. جميع اشتراكاتنا قانونية ورسمية 100% ونقدم ضماناً كاملاً طوال فترة اشتراكك.
              </div>
          </details>

      </div>
    </section>
  );
}