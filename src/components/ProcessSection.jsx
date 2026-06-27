import { processSteps } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ProcessSection() {
  return (
    <section id="quy-trinh" className="section-padding relative overflow-hidden bg-gradient-to-br from-primary/8 via-white to-teal/8" aria-labelledby="process-title">
      <div className="absolute inset-0 network-pattern opacity-35" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Quy trình"
          title="Từ khảo sát thực tế đến thương hiệu có thể triển khai"
          description="DIKAMO xây dựng quy trình làm việc rõ ràng để mỗi dự án không chỉ đẹp về hình ảnh, mà còn phù hợp với năng lực vận hành thực tế của HTX và doanh nghiệp địa phương."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.06} className="relative">
                {index < processSteps.length - 1 && (
                  <span className="absolute left-8 top-16 hidden h-px w-[calc(100%+24px)] bg-primary/18 lg:block" aria-hidden="true" />
                )}
                <div className="relative rounded-[1.6rem] border border-white/80 bg-white/88 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-4xl font-extrabold text-primary/20">{step.number}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal/10 text-teal">
                      <Icon size={21} />
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
