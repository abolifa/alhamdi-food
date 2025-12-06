"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Store } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";

const Contact = () => {
  const [formData, setFormData] = useState({
    to: "info@alhamdifood.com.ly",
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const mapRef = useRef<HTMLDivElement | null>(null);

  // -------------------------------------------------
  // LEAFLET (NO API KEY)
  // -------------------------------------------------
  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      // tripoli coordinates
    }).setView([32.83009353929, 13.22788657054861], 13);

    // Tile Layer (Free)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -40],
    });

    // Marker
    L.marker([32.83009353929, 13.22788657054861], { icon: customIcon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: Tajawal; font-size: 14px;">المقر الرئيسي - طرابلس</div>`
      )
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  // -------------------------------------------------
  // FORM HANDLERS
  // -------------------------------------------------

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://eratech.com.ly/send-form.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (res.ok) {
        setSent(true);
        setFormData({
          to: "info@alhamdifood.com.ly",
          name: "",
          email: "",
          phone: "",
          message: "",
          company: "",
        });
      } else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(202,56,51,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,44,111,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-custom2 mb-14"
        >
          تواصل معنا
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border shadow-xl"
          >
            <input
              name="name"
              type="text"
              placeholder="الاسم"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1"
            />

            {/* honeypot */}
            <input
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
              style={{ position: "absolute", left: "-9999px", width: "1px" }}
            />

            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1"
            />

            <input
              name="phone"
              type="text"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1"
            />

            <textarea
              name="message"
              rows={8}
              placeholder="الرسالة"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-[#001d5b] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
            >
              {loading
                ? "جاري الإرسال..."
                : sent
                ? "تم الإرسال بنجاح"
                : error
                ? "حدث خطأ، حاول مرة أخرى"
                : "إرسال"}
            </button>
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-custom1 mb-4">
                معلومات الاتصال
              </h3>

              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-custom2" />
                <p className="text-muted-foreground">طرابلس - ليبيا</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-custom2" />
                <a
                  href="tel:+218926050115"
                  dir="ltr"
                  className="text-muted-foreground underline underline-offset-2 hover:text-custom2"
                >
                  +218 92 605 0115
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-custom2" />
                <a
                  href="tel:+90505415315747"
                  dir="ltr"
                  className="text-muted-foreground underline underline-offset-2 hover:text-custom2"
                >
                  +905 054 153 15747
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-custom2" />
                <a
                  href="mailto:info@alhamdifood.com.ly"
                  className="text-muted-foreground underline underline-offset-2 hover:text-custom2"
                >
                  info@alhamdifood.com.ly
                </a>
              </div>
            </div>

            {/* MAP */}
            <div
              ref={mapRef}
              className="w-full h-[350px] rounded-3xl border border-border shadow-xl overflow-hidden"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
