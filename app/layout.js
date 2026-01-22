import './globals.css';
import { Cairo } from 'next/font/google'; // تأكد إنك عم تستخدم الخط اللي اخترناه (أو Inter)
import { GoogleAnalytics } from '@next/third-parties/google'; //

const cairo = Cairo({ subsets: ['arabic'] });

export const metadata = {
  title: 'Smart Store | أقوى الاشتراكات الرقمية', // هذا العنوان اللي بيطلع ببحث غوغل
  description: 'متجر Smart Store يوفر لك اشتراكات Canva, CapCut, Gemini بأرخص الأسعار مع تفعيل فوري وضمان ذهبي. تسوق الآن!', // هذا الوصف اللي تحته
  keywords: ['اشتراكات رقمية', 'كانفا برو', 'Canva Pro', 'CapCut', 'Gemini', 'متجر اشتراكات', 'ارخص الاشتراكات'], // كلمات مفتاحية للبحث
  icons: {
    icon: '/favicon.ico', // لازم تكون عندك صورة صغيرة اسمها favicon.ico بمجلد public
  },
  openGraph: {
    title: 'Smart Store - وفر فلوسك واشتري بذكاء',
    description: 'عروض حصرية على اشتراكات التصميم والذكاء الاصطناعي.',
    type: 'website',
    locale: 'ar_SA',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
      {/* 👇 2. إضافة الكود هنا (بدل G-xxx بالكود تبعك) */}
      <GoogleAnalytics gaId="G-505MGP0GR5" />
    </html>
  );
}