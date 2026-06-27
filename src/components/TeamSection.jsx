import { teamRoles } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function TeamSection() {
  return (
    <section className="section-padding bg-soft" aria-labelledby="team-title">
      <div className="container-page">
        <SectionHeader
          title="Đội ngũ DIKAMO"
          description="DIKAMO được xây dựng bởi đội ngũ kết hợp giữa kinh doanh, marketing, công nghệ và thiết kế, hướng đến việc tạo ra các giải pháp thực tế cho HTX và doanh nghiệp địa phương."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <Reveal
                key={role.title}
                delay={index * 0.04}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal/25 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{role.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{role.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
