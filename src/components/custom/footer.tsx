import Link from "next/link";
import { Logo } from "./logo";
import { routes } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-6 border-t md:mt-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo className="w-40" />
          <p className="mt-2 text-sm">
            Learn. Grow. Succeed. Empower your career with expert-led courses
            and certificates.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {routes.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2">Legal</h3>
          <ul className="space-y-1">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.replace(/\s+/g, "-").toLowerCase()}`}
                  className="hover:text-accent"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-2 font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            {[
              { name: "LinkedIn", url: "#" },
              { name: "Twitter", url: "#" },
              { name: "Facebook", url: "#" },
              { name: "YouTube", url: "#" },
            ].map((s) => (
              <Link
                key={s.name}
                href={s.url}
                aria-label={s.name}
                className="hover:text-accent transition-colors"
              >
                <span className="sr-only">{s.name}</span>
                {/* Use lucide-react or heroicons if available */}
                {s.name === "LinkedIn" && "in"}
                {s.name === "Twitter" && "🐦"}
                {s.name === "Facebook" && "📘"}
                {s.name === "YouTube" && "▶️"}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-muted-foreground mt-8 border-t py-4 text-center text-xs">
        © {new Date().getFullYear()} EduSphere. All rights reserved.
      </div>
    </footer>
  );
}
