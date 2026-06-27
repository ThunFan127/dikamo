import { services } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ServicesSection() {
  return (
    <section id="giai-phap" className="section-padding bg-white" aria-labelledby="services-title">
      <div className="container-page">
        <SectionHeader
          eyebrow="Giải pháp"
          title="Bộ giải pháp số hóa thương hiệu cho nông sản địa phương"
          description="Từ định vị thương hiệu đến bao bì, website và QR product story, DIKAMO xây dựng một lộ trình tinh gọn giúp HTX và doanh nghiệp địa phương nâng cấp hình ảnh một cách bài bản."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={index * 0.05}
                className="group rounded-[1.65rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card lg:col-span-2 [&:nth-last-child(-n+2)]:lg:col-span-3"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={23} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 min-h-[112px] text-sm leading-7 text-muted">{service.description}</p>
                <div className="mt-5 rounded-2xl bg-soft px-4 py-3 text-sm leading-6 text-ink/75">
                  <span className="font-semibold text-teal">Output:</span> {service.output}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
