import { differences } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function DifferenceSection() {
  return (
    <section className="section-padding bg-soft" aria-labelledby="difference-title">
      <div className="container-page">
        <SectionHeader
          title="Khác biệt của DIKAMO nằm ở sự kết hợp."
          description="DIKAMO kết hợp tư duy thương hiệu, thiết kế, công nghệ và sự am hiểu sản phẩm địa phương để tạo ra giải pháp phù hợp với HTX và doanh nghiệp vừa/nhỏ."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="group flex min-h-[250px] flex-col rounded-[1.8rem] border border-slate-200/85 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card sm:p-8"
              >
                <span className="grid h-[54px] w-[54px] place-items-center rounded-2xl bg-primary/[0.09] text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 max-w-xl leading-8 text-muted">{item.description}</p>
                <div className="mt-auto pt-6">
                  <span className="block h-1 w-12 rounded-full bg-gradient-to-r from-primary to-teal opacity-55 transition duration-300 group-hover:w-20 group-hover:opacity-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
