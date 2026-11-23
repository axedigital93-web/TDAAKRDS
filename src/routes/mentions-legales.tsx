import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const TITLE = "Mentions légales — KREADS";
const DESCRIPTION =
  "Mentions légales du site Kreads, marque d'AXE DIGITAL SARL : éditeur, hébergement, propriété intellectuelle et données personnelles.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: MentionsLegales,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

const linkClass = "text-primary underline-offset-4 hover:underline";

function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background px-6 py-14 text-muted-foreground">
      <div className="mx-auto max-w-3xl space-y-10 leading-relaxed">
        <Link to="/" className={`${linkClass} text-sm`}>
          ← Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-foreground">Mentions légales</h1>

        <Section title="1. Éditeur du site">
          <p>
            Le site Kreads est édité par AXE DIGITAL SARL, société de droit
            camerounais régie par l'Acte uniforme OHADA.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Siège social : Ange Raphael, fin barrière ESSEC, Douala, Cameroun</li>
            <li>RCCM : CM-DLA-02-2026-B12-01021 (Douala)</li>
            <li>NIU : M102619101743X</li>
            <li>
              WhatsApp :{" "}
              <a href="https://wa.me/237650437514" target="_blank" rel="noopener noreferrer" className={linkClass}>
                +237 650 437 514
              </a>
            </li>
            <li>
              E-mail :{" "}
              <a href="mailto:axedigital00@gmail.com" className={linkClass}>
                axedigital00@gmail.com
              </a>
            </li>
          </ul>
        </Section>

        <Section title="2. Directeur de la publication">
          <p>Arthur Kamena, CMO d'AXE DIGITAL.</p>
        </Section>

        <Section title="3. Hébergement">
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, États-Unis (
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              vercel.com
            </a>
            ).
          </p>
        </Section>

        <Section title="4. Propriété intellectuelle">
          <p>
            La marque Kreads, le logo, les textes, visuels, vidéos et la
            structure du site sont protégés et appartiennent à AXE DIGITAL SARL
            ou à leurs titulaires respectifs. Toute reproduction ou utilisation
            sans autorisation écrite préalable est interdite. Les réalisations
            et marques de clients sont présentées à titre de référence et
            restent la propriété de leurs titulaires.
          </p>
        </Section>

        <Section title="5. Données personnelles">
          <p>
            Le site ne comporte pas de formulaire. Lorsque vous nous contactez
            via WhatsApp, nous utilisons votre numéro, votre nom de profil et le
            contenu de vos messages pour répondre à votre demande et assurer le
            suivi commercial. Ces données sont conservées pendant la durée
            nécessaire à ce suivi, puis supprimées ou archivées selon nos
            obligations légales.
          </p>
          <p>
            Conformément à la réglementation camerounaise, notamment la loi
            n° 2010/012 relative à la cybersécurité et à la cybercriminalité et
            la loi n° 2024/017 relative à la protection des données à caractère
            personnel, vous pouvez demander l'accès, la rectification ou la
            suppression de vos données en nous écrivant via les coordonnées
            ci-dessus.
          </p>
        </Section>

        <Section title="6. Cookies et mesure d'audience">
          <p>
            Le site peut utiliser le Pixel Meta (Facebook) pour mesurer les
            visites et les demandes de contact et pour optimiser nos publicités.
            Ces informations peuvent être traitées par Meta, y compris hors du
            Cameroun. Vous pouvez limiter ce suivi depuis les réglages de votre
            navigateur ou de votre compte Meta.
          </p>
        </Section>

        <Section title="7. Responsabilité">
          <p>
            AXE DIGITAL SARL s'efforce de fournir des informations exactes et à
            jour, sans pouvoir en garantir l'exhaustivité. Les résultats
            présentés sur le site sont donnés à titre indicatif et ne
            constituent pas une garantie de performance. Nous ne sommes pas
            responsables du contenu des sites tiers accessibles par des liens.
          </p>
        </Section>

        <Section title="8. Droit applicable">
          <p>
            Les présentes mentions sont régies par le droit camerounais et les
            Actes uniformes OHADA. À défaut d'accord amiable, tout litige relève
            des juridictions compétentes de Douala.
          </p>
        </Section>
      </div>
    </main>
  );
}
