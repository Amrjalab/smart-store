export const products = [
  {
    id: 1,
    name: "CapCut Pro",
    price: "20$ / سنة",
    originalPrice: "80$", // سعر وهمي للشطب عليه (إغراء)
    description: "حرر فيديوهاتك باحترافية مع مكتبة كاملة من الانتقالات، إزالة الخلفية بالذكاء الاصطناعي، وبدون علامة مائية.",
    image: "/images/capcut.png", // تأكد من وضع صورة بهذا الاسم في مجلد public
    category: "Design",
    isPopular: true // سنجعل هذا المنتج مميزاً في التصميم
  },
  {
    id: 2,
    name: "Canva Pro",
    price: "3$ / سنتين",
    originalPrice: "120$",
    description: "وصول غير محدود لـ 100 مليون صورة وفيديو، أداة Magic Eraser، وتصاميم السوشيال ميديا الجاهزة.",
    image: "/images/canva.png",
    category: "Design",
    isPopular: false
  },
  {
    id: 3,
    name: "Gemini Advanced",
    price: "10$ / سنة",
    originalPrice: "240$",
    description: "أذكى نموذج ذكاء اصطناعي من جوجل، تحليل ملفات، كتابة أكواد، وفهم عميق للصور والفيديو.",
    image: "/images/gemini.png",
    category: "AI Tools",
    isPopular: false,
    isForCoding: true,
  },
  {
    id: 4,
    name: "Notion AI Pro",
    price: "20$ / سنة",
    originalPrice: "200$",
    description: "تعزيز إنتاجيتك مع ميزات Notion AI المتقدمة: توليد المحتوى، تلخيص الملاحظات، وأتمتة المهام.",
    image: "/images/notion.png",
    category: "Design",
    isPopular: false
  }
];