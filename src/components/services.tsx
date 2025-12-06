"use client";

import { motion } from "framer-motion";
import ServiceSection from "./service-section";

const Service = () => {
  return (
    <section id="services" className="relative w-full bg-white overflow-hidden">
      {/* خلفيات ناعمة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,150,150,0.05),transparent_70%)] pointer-events-none" />

      {/* العنوان الرئيسي */}
      <div className="container mx-auto px-6 relative z-10 text-center py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          خدماتنا <span className="text-blue-600">الرئيسية</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
        >
          نقدم حلولًا متكاملة في مجال استيراد وتوزيع المواد الغذائية والمواشي
          واللحوم من أفضل الموردين في العالم، مع ضمان الجودة والسرعة والموثوقية
          في كل خطوة.
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "5rem", opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 mx-auto h-[3px] bg-blue-600 rounded-full"
        />
      </div>

      {/* أقسام الخدمات */}
      <div className="relative z-10">
        <ServiceSection
          id="import"
          title="استيراد المواد الغذائية"
          description="نستورد أجود المنتجات الغذائية من الأسواق العالمية لتلبية احتياجات السوق الليبي، مع التركيز على الجودة العالية وسلامة التخزين والنقل."
          image="/services/service-1.jpg"
          color="rgba(11,20,63,0.85)" // #0B143F
        />

        <ServiceSection
          id="livestock"
          title="استيراد المواشي واللحوم"
          description="نوفر لحوماً ومواشي حية من مصادر موثوقة وبيطرية معتمدة، مع تطبيق معايير صحية صارمة لضمان منتجات طازجة وآمنة للمستهلك."
          image="/services/service-2.webp"
          color="rgba(11,20,63,0.85)" // #0B143F
          reversed
        />

        <ServiceSection
          id="distribution"
          title="التوزيع والتخزين المبرد"
          description="نمتلك شبكة توزيع متكاملة ومستودعات مبردة تضمن حفظ المنتجات بجودتها الكاملة حتى تصل إلى المتاجر والمستهلكين بأفضل حال."
          image="/services/service-3.jpg"
          color="rgba(11,20,63,0.85)" // #0B143F
        />
      </div>
    </section>
  );
};

export default Service;
