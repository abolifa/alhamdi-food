const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="relative w-full bg-linear-to-b from-background via-muted/10 to-background border-t border-border pt-24 overflow-hidden"
    >
      <div className="mt-16 text-center text-sm text-white bg-[#304185] border-t border-border py-6 flex items-center justify-center">
        © {new Date().getFullYear()} شركة الحامدي – جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
