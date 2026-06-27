import { ArrowRight, Quote } from "lucide-react";
import beforeAfter from "../assets/caseStudy/yenKhoa/case-before-after.jpg";
import showcase from "../assets/caseStudy/yenKhoa/case-mam-ca-loc-showcase.jpg";
import Reveal from "./Reveal";

const transformationCards = [
  {
    title: "Before",
    text: "Bao bì cũ thiếu điểm nhấn, thông tin chưa rõ ràng và chưa kể được câu chuyện sản phẩm.",
  },
  {
    title: "DIKAMO",
    text: "Tái thiết kế bao bì, đồng bộ nhận diện và bổ sung QR Product Story để tăng tính minh bạch.",
    featured: true,
  },
  {
    title: "After",
    text: "Diện mạo sản phẩm chuyên nghiệp hơn, dễ truyền thông hơn và tăng niềm tin khi tiếp cận đối tác.",
  },
];

export default function CaseStudySection() {
  return (
    <section id="case-study" className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-28" aria-labelledby="case-study-title">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="mb-4 inline-flex rounded-full border border-accent/25 bg-accent/12 px-4 py-2 text-sm font-semibold text-[#1E3A4A]">
              Yến Khoa / Cà Mau / Packaging & Product Story
            </p>
            <h2 id="case-study-title" className="text-balance text-3xl font-bold leading-tight text-[#1E3A4A] sm:text-4xl lg:text-[2.55rem]">
              Case Study: Mắm cá lóc Thới Bình
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Tái định vị bao bì và câu chuyện sản phẩm cho đặc sản địa phương Cà Mau.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-3 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
            <img
              src={showcase}
              alt="Showcase sản phẩm mắm cá lóc Thới Bình trong bối cảnh sông nước"
              className="max-h-[650px] min-h-[320px] w-full rounded-[26px] object-cover"
            />
            <div className="absolute left-4 top-4 max-w-[calc(100%-32px)] rounded-full border border-white/70 bg-white/88 px-4 py-2 shadow-sm backdrop-blur-md sm:bottom-6 sm:left-6 sm:top-auto sm:max-w-[calc(100%-48px)] sm:rounded-[20px] sm:px-5 sm:py-4 sm:shadow-card">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-teal sm:text-xs sm:tracking-[0.14em]">
                Packaging Showcase
              </p>
              <p className="mt-1 hidden text-base font-bold text-[#1E3A4A] sm:block sm:text-lg">
                Mắm cá lóc Thới Bình — Yến Khoa
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-5 md:grid-cols-3">
            {transformationCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-[24px] border p-6 shadow-sm transition duration-300 hover:-translate-y-1 ${
                  card.featured
                    ? "border-primary/25 bg-gradient-to-br from-primary/8 via-white to-teal/8 shadow-[0_16px_42px_rgba(47,151,201,0.10)]"
                    : "border-slate-200/80 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-[#1E3A4A]">{card.title}</h3>
                  {card.featured && <ArrowRight className="h-5 w-5 text-primary" />}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <div className="rounded-[28px] border border-slate-200/70 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-5">
              <div className="relative rounded-[22px] bg-slate-50/70 p-2">
                <img
                  src={beforeAfter}
                  alt="So sánh bao bì trước và sau của Mắm cá lóc Thới Bình"
                  className="mx-auto h-auto max-h-[520px] w-full rounded-[18px] object-contain"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/92 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary shadow-sm backdrop-blur">
                  Before / After
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,0.07)]">
              <h3 className="text-2xl font-bold leading-tight text-[#1E3A4A]">
                Không chỉ là một thiết kế bao bì mới
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                DIKAMO giúp sản phẩm được nhìn nhận rõ hơn qua hình ảnh, thông tin minh bạch và câu chuyện bản sắc địa phương.
              </p>
              <blockquote className="mt-7 rounded-[22px] border border-accent/20 bg-accent/10 p-5">
                <Quote className="h-5 w-5 text-accent" />
                <p className="mt-3 text-base font-semibold leading-7 text-[#1E3A4A]">
                  “Không chỉ thay bao bì, DIKAMO giúp sản phẩm được nhìn nhận đúng hơn với giá trị thật.”
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
