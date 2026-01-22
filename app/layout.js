import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// 1. استيراد الخط من جوجل مباشرة
const cairo = Cairo({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"], // أوزان الخط (عادي، عريض، عريض جداً)
});

// 2. إعدادات الميتا (عنوان الموقع ووصفه في جوجل)
export const metadata = {
  title: "Smart Store | أفضل الاشتراكات الرقمية",
  description: "متجر Smart Store لبيع اشتراكات Canva, ChatGPT, CapCut بأرخص الأسعار وضمان كامل.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      {/* 3. تطبيق الخط على جسم الموقع بالكامل */}
      <body className={cairo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}