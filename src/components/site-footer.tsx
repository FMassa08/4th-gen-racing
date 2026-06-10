import Link from "next/link";
import { navItems } from "../data/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>4th Gen Racing</strong>
          <p>Four generations of Massa drivers. One red line. A family mark still moving forward.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
