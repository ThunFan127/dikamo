import { pillars } from "../data/siteContent";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section
      id="ve-dikamo"
      className="section-padding relative overflow-hidden bg-white"
      aria-labelledby="about-title"
    >
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            Về DIKAMO
          </p>
          <h2
            id="about-title"
            className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.65rem]"
          >
            Một giải pháp tích hợp giữa thương hiệu, công nghệ và bản sắc địa
            phương.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            DIKAMO không chỉ thiết kế bao bì hay làm website riêng lẻ. Chúng tôi
            kết hợp tư duy thương hiệu, thiết kế nhận diện, storytelling sản
            phẩm và công nghệ số để giúp nông sản địa phương chuyển hóa chất
            lượng thật thành giá trị cảm nhận rõ ràng hơn trong mắt người tiêu
            dùng, đối tác và thị trường.
          </p>
        </Reveal>

        <Reveal className="relative rounded-[2rem] border border-slate-200 bg-soft p-5 shadow-card sm:p-8">
          <div
            className="absolute inset-0 soft-line-pattern rounded-[2rem] opacity-60"
            aria-hidden="true"
          />
          <div className="relative grid gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`rounded-[1.45rem] border border-white/80 bg-white/88 p-5 shadow-sm backdrop-blur ${
                    index === 1 ? "sm:ml-10" : index === 2 ? "sm:ml-20" : ""
                  }`}
                >
                  <div className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal/10 text-teal">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 leading-7 text-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
