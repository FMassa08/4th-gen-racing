import Link from "next/link";
import { drivers } from "../data/content";

export function DynastyNav({ activeHref }: { activeHref?: string }) {
  return (
    <nav className="dynasty-nav" aria-label="Dynasty generation navigation">
      {drivers.map((driver) => (
        <Link className={activeHref === driver.href ? "is-active" : ""} href={driver.href} key={driver.href}>
          <span>{driver.generation}</span>
          <strong>{driver.shortName}</strong>
        </Link>
      ))}
    </nav>
  );
}
