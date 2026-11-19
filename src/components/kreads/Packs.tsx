import { Check, ShieldCheck } from "lucide-react";
import { BlurWords, Counter, Reveal } from "./motion-primitives";
import { MagneticButton, TiltCard } from "./interactive";

type Pack = {
  name: string;
  price?: number;
  period?: string;
  prefix?: string;
  pitch: string;
  groups: { label?: string; items: string[] }[];
  cta: string;
  whatsapp: string;
  featured?: boolean;
  dim?: boolean;
};

const packs: Pack[] = [
  {
    name: "Starter",
    price: 7000,
    pitch: "Pour tester un produit avant d'investir plus.",
    dim: true,
    cta: "Je lance mon test",
    whatsapp: "Bonjour/Bonsoir, je souhaite lancer mon test avec le Pack Starter",
    groups: [
      {
        items: [
          "1 vidéo publicitaire",
          "1 angle publicitaire",
          "Un fichier répertoriant tous les angles publicitaires de votre produit",
        ],
      },
    ],
  },
  {
    name: "Growth",
    price: 18000,
    pitch: "Pour multiplier les créatives et scaler ce qui marche.",
    featured: true,
    cta: "Je scale maintenant",
    whatsapp: "Bonjour/Bonsoir, je souhaite scaler avec le Pack Growth",
    groups: [{ items: ["À partir de 3 vidéos publicitaires"] }],
  },
  {
    name: "Scale",
    pitch:
      "Vous réservez un audit : ensemble, nous analysons votre produit, définissons les angles publicitaires les plus porteurs et le nombre de vidéos adapté à vos objectifs. Vous recevez ensuite une offre sur mesure.",
    cta: "Réserver un audit",
    whatsapp: "Bonjour/Bonsoir, je souhaite réserver un audit (Pack Scale)",
    groups: [
      {
        label: "Pendant l'audit",
        items: ["Analyse de votre produit", "Choix des angles publicitaires", "Nombre de vidéos à produire", "Analyse et gestion de votre compte publicitaire"],
      },
    ],
  },
];

export function Packs() {
  return (
    <section id="packs" className="scene bg-scene px-6 py-28">
      <span
        aria-hidden="true"
        className="halo left-1/2 top-10 size-[560px] -translate-x-1/2"
        style={{ background: "oklch(0.3077 0.1223 293.38 / 0.5)" }}
      />
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 flex max-w-2xl items-center gap-4 rounded-2xl border border-primary/40 bg-primary/10 px-6 py-4 backdrop-blur">
          <ShieldCheck className="size-8 shrink-0 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Entreprise légalement enregistrée.</span>{" "}
            <span className="text-muted-foreground">
              Kreads est une structure officiellement constituée : vous travaillez avec un partenaire fiable, en toute sécurité.
            </span>
          </p>
        </Reveal>

        <BlurWords
          as="h2"
          text="Choisissez le pack adapté à votre ambition"
          highlight={["ambition"]}
className="text-center text-[clamp(1.6rem,4.2vw,3.6rem)] font-bold"
        />

        <div className="mt-20 grid items-start gap-8 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <Reveal
              key={pack.name}
              delay={pack.featured ? 0 : 0.2 + i * 0.1}
              className={pack.featured ? "lg:-mt-10" : ""}
            >
              <TiltCard className="h-full">
                <div
                  className={`relative h-full overflow-hidden rounded-2xl p-8 ${
                    pack.dim ? "opacity-90" : ""
                  }`}
                  style={{
                    background: "color-mix(in oklab, var(--violet) 28%, transparent)",
                    backdropFilter: "blur(18px)",
                    border: pack.featured
                      ? "1px solid transparent"
                      : `1px solid ${pack.dim ? "oklch(0.3077 0.1223 293.38 / 0.55)" : "oklch(0.3077 0.1223 293.38 / 0.9)"}`,
                  }}
                >
                  {pack.featured && (
                    <>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-[120%] -z-10"
                        style={{
                          background:
                            "conic-gradient(from 0deg, var(--primary), var(--violet-glow), var(--primary))",
                          animation: "kreads-spin-border 6s linear infinite",
                        }}
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-px -z-10 rounded-2xl bg-scene"
                      />
                      <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                        Populaire
                      </span>
                    </>
                  )}

                  <h3 className="font-display text-2xl font-medium">Pack {pack.name}</h3>
                  {pack.prefix && (
                    <p className="mt-6 text-sm text-muted-foreground">{pack.prefix}</p>
                  )}
                  {pack.price !== undefined ? (
                    <p className={`${pack.prefix ? "mt-1" : "mt-6"} font-display text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-none`}>
                      <Counter to={pack.price} duration={1.8} />
                      <span className="ml-2 text-lg font-normal text-muted-foreground">FCFA{pack.period}</span>
                    </p>
                  ) : (
                    <p className="mt-6 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-none">
                      Sur audit
                    </p>
                  )}
                  <p className="mt-5 text-muted-foreground">{pack.pitch}</p>

                  <div className="mt-8 space-y-6">
                    {pack.groups.map((group, gi) => (
                      <div key={group.label ?? gi}>
                        {group.label && (
                          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">
                            {group.label}
                          </p>
                        )}
                        <ul className="space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm">
                              <Check
                                className="mt-0.5 size-4 shrink-0 text-primary"
                                strokeWidth={1.6}
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <MagneticButton 
                      href={`https://wa.me/237650437514?text=${encodeURIComponent(pack.whatsapp)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full"
                      onClick={() => {
                        if (typeof window !== "undefined" && (window as any).fbq) {
                          (window as any).fbq("track", "Lead", {
                            content_name: pack.name,
                            value: pack.price,
                            currency: "XAF",
                          });
                        }
                      }}
                    >
                      {pack.cta}
                    </MagneticButton>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
