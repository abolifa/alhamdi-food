"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-28 md:py-36 bg-white overflow-hidden"
    >
      {/* خلفية بتدرجات ناعمة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_65%)] pointer-events-none" />

      {/* المحتوى */}
      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-10">
        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-7 text-center md:text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            من نحن
          </h2>

          <p className="text-base text-gray-700 text-justify leading-relaxed">
            تأسست{" "}
            <span className="font-semibold text-gray-900">
              شركة الحامدي لاستيراد المواد الغذائية
            </span>{" "}
            لتكون إحدى الشركات الرائدة في مجال توريد المنتجات الغذائية من أفضل
            المصادر العالمية إلى السوق الليبي، مع الالتزام بأعلى معايير الجودة
            والصحة والسلامة.
          </p>

          <p className="text-base text-gray-700 text-justify leading-relaxed">
            بفضل خبرتنا وشراكاتنا الموثوقة مع كبار الموردين حول العالم، نحرص على
            تزويد عملائنا بمنتجات عالية الجودة تلبي احتياجاتهم، مع توفير خدمات
            مرنة وسريعة مبنية على الثقة والمصداقية.
          </p>

          <a
            href="#services"
            className="inline-block px-12 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            اكتشف خدماتنا
          </a>
        </motion.div>

        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md md:max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="/images/about.avif"
              alt="شركة الحامدي لاستيراد المواد الغذائية والمواشي واللحوم"
              className="object-cover w-full h-full"
            />
            {/* توهج ناعم حول الصورة */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
