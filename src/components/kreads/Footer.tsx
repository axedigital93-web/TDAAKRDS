import logo from "@/assets/kreads-logo.png";
import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone } from "lucide-react";

const navLinks = [
  { id: "methode", label: "Méthode" },
  { id: "livrables", label: "Livrables" },
  { id: "confiance", label: "Ils nous font confiance" },
  { id: "realisations", label: "Réalisations" },
  { id: "packs", label: "Packs" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="scene relative border-t border-border/40 bg-background px-6 py-14">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)" }}
      />
      <span
        aria-hidden="true"
        className="halo left-1/2 -bottom-40 size-[420px] -translate-x-1/2"
        style={{ background: "oklch(0.7725 0.1428 177.43 / 0.12)" }}
      />

      <div className="mx-auto max-w-6xl space-y-10">
        {/* Top Footer Section */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Preloader Logo & Location */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <a href="#hero" className="inline-block transition-transform duration-300 hover:scale-105">
              <img
                src={logo}
                alt="KREADS"
                className="h-16 w-auto object-contain sm:h-20"
              />
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Studio de créatives publicitaires qui vendent.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary shrink-0" />
              <span>Ange Raphael, fin barrière ESSEC</span>
            </div>
            <a
              href="https://wa.me/237650437514"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nous contacter sur WhatsApp au +237 650 437 514"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Phone className="size-4 text-primary shrink-0" />
              <span>+237 650 437 514</span>
            </a>
          </div>

          {/* Navigation Links (Aligned Vertically) */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </span>
            <nav aria-label="Navigation footer" className="flex flex-col items-center gap-2.5 text-sm text-muted-foreground md:items-start">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-border/40" />

        {/* Bottom Footer Section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Social Network Icons */}
          <nav aria-label="Réseaux sociaux" className="flex items-center gap-4 text-muted-foreground">
            <a
              href="https://www.facebook.com/share/17iATtAdNC/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-110"
            >
              <Facebook className="size-5" />
            </a>
          </nav>

          {/* Legal info & Copyright */}
          <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground sm:items-end">
            <Link to="/mentions-legales" className="transition-colors hover:text-primary">
              Mentions légales
            </Link>
            <p>© {new Date().getFullYear()} KREADS. Tous droits réservés.</p>
          </div>
        </div>

        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Kreads est une marque d'AXE DIGITAL SARL, société de droit camerounais
          régie par l'Acte uniforme OHADA, immatriculée au RCCM de Douala sous
          le n° CM-DLA-02-2026-B12-01021. NIU : M102619101743X.
        </p>
      </div>
    </footer>
  );
}

