"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe2, CheckCircle2, Headphones } from "lucide-react";

const WhyUs = () => {
  const perks = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      title: "خبرة موثوقة في الاستيراد",
      desc: "سنوات من النجاح في توريد المنتجات الغذائية والمواشي واللحوم من أفضل المصادر العالمية.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-red-600" />,
      title: "شبكة توريد عالمية",
      desc: "نتعاون مع موردين معتمدين حول العالم لضمان التنوع، الجودة، والتسليم في الوقت المحدد.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-red-600" />,
      title: "جودة مضمونة وسعر منافس",
      desc: "نوازن بين الجودة والسعر لتقديم قيمة حقيقية تليق بعملائنا في السوق الليبي.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-red-600" />,
      title: "خدمة عملاء متميزة",
      desc: "فريقنا مستعد لتقديم الدعم والاستشارات من لحظة الطلب حتى وصول المنتج إليك.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative w-full py-28 md:py-36 bg-white overflow-hidden"
    >
      {/* خلفية خفيفة متوهجة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          لماذا تختار{" "}
          <span className="text-red-600 font-extrabold">شركتنا</span>؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
        >
          لأننا نؤمن أن الجودة والثقة أساس كل علاقة ناجحة، نسعى دائماً لتقديم
          الأفضل من خلال منتجات موثوقة، أسعار عادلة، وخدمة راقية.
        </motion.p>

        {/* البطاقات */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-red-200 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">{perk.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {perk.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
