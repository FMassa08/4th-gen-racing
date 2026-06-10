"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../data/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="4th Gen Racing home" onClick={() => setOpen(false)}>
        <span className="brand-number">6</span>
        <span>
          4th Gen
          <br />
          Racing
        </span>
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link href={item.href} key={item.href} className={active ? "is-active" : ""} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
