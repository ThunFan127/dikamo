import { problemCards } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ProblemSection() {
  return (
    <section className="section-padding bg-soft" aria-labelledby="van-de-title">
      <div className="container-page">
        <SectionHeader
          title="Nông sản tốt chưa đủ, thương hiệu phải đủ sức tạo niềm tin."
          description="Nhiều sản phẩm địa phương có chất lượng tốt, nguyên liệu đặc trưng và câu chuyện sản xuất đáng tự hào. Tuy nhiên, bao bì chưa chuyên nghiệp, nhận diện thiếu nhất quán, thiếu nền tảng số và thiếu thông tin minh bạch khiến sản phẩm khó tạo niềm tin ban đầu trên kệ hàng, kênh bán online và khi tiếp cận đối tác."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.title}
                delay={index * 0.06}
                className="group rounded-[1.6rem] border border-slate-200/75 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
