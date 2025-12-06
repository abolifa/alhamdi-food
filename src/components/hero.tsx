"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden"
    >
      {/* تدرج خلفي متحرك */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-black via-[#0a0a0a] to-[#111]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      />

      {/* توهج أحمر خلفي */}
      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 blur-[220px] rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* الخلفية المنقسمة */}
      <div className="absolute inset-0 flex">
        {/* النصف الأيسر – صورة الشحن أو المنتجات */}
        <motion.div
          className="w-1/2 bg-[url('/images/hero.jpeg')] bg-cover bg-center"
          style={{
            opacity: 1,
            mixBlendMode: "overlay",
          }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        />
        {/* النصف الأيمن – صورة المواشي */}
        <motion.div
          className="w-1/2 bg-[url('/images/cattle.jpeg')] bg-cover bg-center"
          style={{
            opacity: 0.45,
            mixBlendMode: "soft-light",
          }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
      </div>

      {/* محتوى النص */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/meta/logo.png"
            alt="شعار شركة الحامدي"
            width={220}
            height={220}
            className="mx-auto mb-3 w-80 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          لاستيراد المواد الغذائية ذ.م.م
        </motion.p>

        <motion.a
          href="#about"
          className="inline-block px-10 py-3 text-lg font-semibold rounded-full bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-blue-800/30"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
        >
          اكتشف المزيد
        </motion.a>
      </div>

      {/* خطوط زخرفية متحركة */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 3, delay: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </motion.div>
    </section>
  );
}
