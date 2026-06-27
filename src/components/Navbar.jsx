import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/dikamo-logo.png";
import { navLinks } from "../data/siteContent";

const fanpageUrl =
  "https://www.facebook.com/people/Dikamo-N%C3%A2ng-t%E1%BA%A7m-n%C3%B4ng-s%E1%BA%A3n-Vi%E1%BB%87t/61590648158239/";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = scrolledRef.current ? window.scrollY > 56 : window.scrollY > 88;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleNavigate = (event, href) => {
    event.preventDefault();
    closeMenu();

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const offset = isScrolled ? 96 : 104;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled ? "pointer-events-none border-transparent" : "border-b border-slate-200/60"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.94)",
        boxShadow: isScrolled ? "none" : "0 8px 24px rgba(30, 58, 74, 0.05)",
        backdropFilter: isScrolled ? "none" : "blur(18px)",
        WebkitBackdropFilter: isScrolled ? "none" : "blur(18px)",
      }}
    >
      <nav
        className={`pointer-events-auto mx-auto flex items-center justify-between border transition-all duration-300 ease-out ${
          isScrolled
            ? "mt-4 h-16 w-[calc(100%-48px)] max-w-[1100px] rounded-full border-slate-200/70 px-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "mt-0 h-[68px] w-full max-w-[1140px] rounded-none border-transparent px-5 sm:px-6"
        }`}
        style={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0)",
          willChange: "width, max-width, height, margin-top, border-radius, box-shadow, background-color",
        }}
        aria-label="Điều hướng chính"
      >
        <a
          href="#top"
          onClick={(event) => handleNavigate(event, "#top")}
          className="flex shrink-0 items-center"
          aria-label="Trang chủ DIKAMO"
        >
          <img
            src={logo}
            alt="Logo DIKAMO"
            className="block w-auto object-contain transition-all duration-300 ease-out"
            style={{
              height: isScrolled ? "30px" : "34px",
              maxHeight: "34px",
              maxWidth: isScrolled ? "150px" : "160px",
            }}
          />
        </a>

        <div className={`hidden items-center transition-all duration-300 ease-out lg:flex ${isScrolled ? "gap-2" : "gap-7 xl:gap-8"}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavigate(event, link.href)}
              className={`rounded-full text-sm font-semibold text-[#1E3A4A] transition-all duration-300 hover:bg-primary/8 hover:text-primary ${
                isScrolled ? "px-3 py-2" : "px-1 py-2"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={fanpageUrl}
          target="_blank"
          rel="noreferrer"
          className={`hidden rounded-full bg-gradient-to-r from-[#1E3A4A] to-[#24566c] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(30,58,74,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:from-primary hover:to-teal hover:shadow-[0_14px_30px_rgba(47,151,201,0.22)] lg:inline-flex ${
            isScrolled ? "px-4 py-2.5" : "px-[18px] py-2.5"
          }`}
        >
          Liên hệ hợp tác
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white text-[#1E3A4A] shadow-sm transition duration-300 hover:border-primary/30 hover:text-primary lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div
          className={`pointer-events-auto absolute left-1/2 grid -translate-x-1/2 gap-1 rounded-[24px] border border-slate-200/75 p-3 shadow-[0_18px_42px_rgba(30,58,74,0.13)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
            isScrolled ? "top-20 w-[calc(100%-48px)] max-w-[1100px]" : "top-full mt-2 w-[calc(100%-32px)] max-w-[520px]"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavigate(event, link.href)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#1E3A4A] transition duration-300 hover:bg-primary/8 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={fanpageUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-gradient-to-r from-primary to-teal px-5 py-3 text-center text-sm font-semibold text-white shadow-card transition duration-300 hover:-translate-y-0.5"
          >
            Liên hệ hợp tác
          </a>
        </div>
      )}
    </header>
  );
}
