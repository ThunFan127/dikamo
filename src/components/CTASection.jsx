import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const fanpageUrl =
  "https://www.facebook.com/people/Dikamo-N%C3%A2ng-t%E1%BA%A7m-n%C3%B4ng-s%E1%BA%A3n-Vi%E1%BB%87t/61590648158239/";

export default function CTASection() {
  return (
    <section
      id="lien-he"
      className="px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="cta-title"
    >
      <Reveal className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-teal to-leaf p-8 text-white shadow-soft sm:p-12 lg:p-16">
        <div
          className="absolute inset-0 soft-line-pattern opacity-15"
          aria-hidden="true"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2
              id="cta-title"
              className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]"
            >
              Bạn đang có một sản phẩm địa phương cần được kể câu chuyện tốt
              hơn?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/88 sm:text-lg">
              DIKAMO sẵn sàng đồng hành cùng HTX, doanh nghiệp và đối tác trong
              hành trình xây dựng thương hiệu nông sản Việt chuyên nghiệp hơn.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={fanpageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-primary shadow-card transition hover:-translate-y-0.5"
            >
              Liên hệ hợp tác <ArrowRight size={18} />
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center justify-center rounded-full border border-white/45 px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12"
            >
              Xem Case Study
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
