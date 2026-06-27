import { motion } from "framer-motion";
import heroCover from "../assets/hero-dikamo-cover.png";

const fanpageUrl =
  "https://www.facebook.com/people/Dikamo-N%C3%A2ng-t%E1%BA%A7m-n%C3%B4ng-s%E1%BA%A3n-Vi%E1%BB%87t/61590648158239/";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFF] via-white to-[#EEF8FF] pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      <div
        className="absolute inset-0 network-pattern opacity-[0.025]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-28 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-teal/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[22px] border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:rounded-[28px] lg:rounded-[32px]"
        >
          <img
            src={heroCover}
            alt="DIKAMO - Định vị bản sắc nông sản Việt"
            className="block aspect-[16/9] max-h-[660px] w-full bg-white object-cover"
          />

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-32 bg-gradient-to-t from-white/45 via-white/20 to-transparent md:block"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hero-cover-cta absolute bottom-14 left-[5%] z-10 -translate-x-1/2 items-center justify-center gap-4 lg:bottom-16 lg:left-[7%]"
          >
            <a
              href="#case-study"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#2F97C9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,151,201,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2589BA]"
            >
              Xem case study
            </a>
            <a
              href={fanpageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-sky-200 bg-white/92 px-7 py-3.5 text-sm font-semibold text-[#1E3A4A] shadow-[0_10px_25px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-50"
            >
              Liên hệ hợp tác
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hero-mobile-cta mt-5 flex-col items-center justify-center gap-3"
        >
          <a
            href="#case-study"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#2F97C9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,151,201,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2589BA] sm:w-auto"
          >
            Xem case study
          </a>
          <a
            href={fanpageUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-sky-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#1E3A4A] shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-50 sm:w-auto"
          >
            Liên hệ hợp tác
          </a>
        </motion.div>
      </div>
    </section>
  );
}
