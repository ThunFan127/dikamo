import logo from "../assets/logo/dikamo-logo.png";
import { navLinks } from "../data/siteContent";

const fanpageUrl =
  "https://www.facebook.com/people/Dikamo-N%C3%A2ng-t%E1%BA%A7m-n%C3%B4ng-s%E1%BA%A3n-Vi%E1%BB%87t/61590648158239/";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <img src={logo} alt="Logo DIKAMO" className="h-12 w-auto" />
          <p className="mt-4 text-lg font-bold text-ink">
            Định vị bản sắc nông sản Việt
          </p>
          <p className="mt-3 max-w-md leading-7 text-muted">
            Nền tảng dịch vụ số hóa thương hiệu dành cho HTX, doanh nghiệp
            vừa/nhỏ và sản phẩm địa phương.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Liên kết
          </h2>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Thông tin liên hệ
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <p>
              Email:{" "}
              <a
                href="mailto:contact.dikamo@gmail.com"
                className="font-semibold text-primary"
              >
                contact.dikamo@gmail.com
              </a>
            </p>
            <p>
              Fanpage:{" "}
              <a
                href={fanpageUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary"
              >
                DIKAMO
              </a>
            </p>
            <p>Khu vực hoạt động: Đồng bằng sông Cửu Long</p>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-slate-200 pt-6 text-sm text-muted">
        © 2026 DIKAMO. All rights reserved.
      </div>
    </footer>
  );
}
