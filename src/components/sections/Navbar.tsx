import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Naša Priča" },
  { href: "#products", label: "Terarijumi" },
  { href: "#workshops", label: "Radionice" },
  { href: "#contact", label: "Kontakt" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav data-animate="navbar" className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" style={{ opacity: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-lg sm:text-xl font-bold text-primary">🌿 Terarijum na Dar</span>
        <div className="hidden md:flex gap-6 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors duration-300">{l.label}</a>
          ))}
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-primary transition-colors py-2 text-base" onClick={() => setMobileOpen(false)}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
