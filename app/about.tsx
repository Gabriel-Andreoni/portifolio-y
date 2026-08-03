import type { CSSProperties } from "react";
import Image from "next/image";

type AboutPaletteVariables = CSSProperties &
  Record<
    | "--about-accent"
    | "--about-background"
    | "--about-border"
    | "--about-ink"
    | "--about-muted"
    | "--about-photo-shade"
    | "--about-secondary"
    | "--about-surface",
    string
  >;

const aboutPaletteVariables: AboutPaletteVariables = {
  "--about-accent": "#ff9900",
  "--about-background": "#171918",
  "--about-border": "#3f423f",
  "--about-ink": "#f7f1e7",
  "--about-muted": "#c9c2b8",
  "--about-photo-shade": "#111311",
  "--about-secondary": "#c84224",
  "--about-surface": "#252725",
};

const workTypes = [
  {
    alt: "Artistas mascarados em uma apresentação de festival japonês",
    className:
      "col-span-2 row-span-2 min-h-80 sm:col-span-7 sm:row-span-2 sm:min-h-[34rem]",
    description: "Festivais e celebrações",
    japanese: "祭り",
    name: "Matsuri",
    position: "center 34%",
    src: "/6.jpeg",
  },
  {
    alt: "Taikoísta concentrado durante uma apresentação",
    className:
      "col-span-1 min-h-64 sm:col-span-5 sm:min-h-0",
    description: "Taiko e performance",
    japanese: "力",
    name: "Chikara",
    position: "68% center",
    src: "/2.jpeg",
  },
  {
    alt: "Mãos e baquetas em detalhe sobre um tambor taiko",
    className:
      "col-span-1 min-h-64 sm:col-span-5 sm:min-h-0",
    description: "Ritmo e detalhes",
    japanese: "響",
    name: "Hibiki",
    position: "54% center",
    src: "/4.jpeg",
  },
] as const;

export default function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden bg-[var(--about-background)] px-[clamp(0.75rem,1.6vw,1.75rem)] py-[clamp(5.5rem,9vw,9rem)] text-[var(--about-ink)]"
      id="sobre"
      style={aboutPaletteVariables}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_32%,color-mix(in_srgb,var(--about-accent)_9%,transparent),transparent_30%),radial-gradient(circle_at_86%_64%,color-mix(in_srgb,var(--about-secondary)_11%,transparent),transparent_34%),linear-gradient(180deg,var(--about-background),color-mix(in_srgb,var(--about-surface)_76%,var(--about-background)))]"
      />
      <div className="relative mx-auto max-w-[96rem]">
        <header className="mb-[clamp(3rem,6vw,6rem)] grid grid-cols-1 gap-6 border-b border-[var(--about-border)] pb-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="m-0 font-[family-name:var(--font-utility)] text-xs font-bold tracking-[0.18em] text-[var(--about-accent)] uppercase">
              Sobre o fotógrafo
            </p>
            <p className="mt-3 mb-0 max-w-[23rem] text-sm leading-relaxed font-medium text-[var(--about-muted)]">
              Entre tradição, movimento e memória.
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2
              className="m-0 font-[family-name:var(--font-japanese)] text-[clamp(4rem,10.5vw,10.5rem)] leading-[0.8] tracking-[-0.04em]"
              id="about-title"
              lang="ja"
            >
              自己紹介
            </h2>
            <div className="mt-5 flex items-center gap-3 font-[family-name:var(--font-utility)] text-[0.68rem] font-bold tracking-[0.2em] text-[var(--about-accent)] uppercase">
              <span className="h-px w-12 bg-[var(--about-secondary)]" />
              Jiko shōkai · Apresentação
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-[clamp(0.75rem,1.2vw,1.2rem)] lg:grid-cols-12">
          <article className="relative flex min-h-[38rem] flex-col justify-between overflow-hidden rounded-[clamp(0.7rem,1vw,1rem)] border border-[var(--about-border)] bg-[var(--about-surface)] p-[clamp(1.5rem,3.5vw,3.75rem)] shadow-[0_1.5rem_4rem_color-mix(in_srgb,var(--about-photo-shade)_48%,transparent)] lg:col-span-5">
            <div className="relative">
              <p className="m-0 font-[family-name:var(--font-utility)] text-[0.68rem] font-bold tracking-[0.18em] text-[var(--about-accent)] uppercase">
                Muito prazer
              </p>
              <h3 className="mt-6 mb-0 max-w-[9ch] font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,5.4rem)] leading-[0.93] tracking-[-0.065em] uppercase">
                Meu nome é Yuri.
              </h3>
            </div>

            <div className="relative mt-14 max-w-[32rem]">
              <p className="m-0 text-[clamp(1.15rem,1.65vw,1.55rem)] leading-[1.35] font-semibold">
                Sou fotógrafo de eventos japoneses e da cultura japonesa.
              </p>
              <p className="mt-5 mb-0 text-[clamp(0.95rem,1.15vw,1.1rem)] leading-relaxed text-[var(--about-muted)]">
                Meu trabalho nasce do encontro entre presença e respeito.
                Observo o ritmo de cada celebração para registrar gestos,
                cores e tradições sem interromper o que acontece.
              </p>
              <p className="mt-4 mb-0 text-[clamp(0.95rem,1.15vw,1.1rem)] leading-relaxed text-[var(--about-muted)]">
                Do silêncio antes da apresentação ao impacto do taiko, procuro
                criar imagens que mantenham viva a atmosfera de cada momento.
              </p>
            </div>

            <footer className="relative mt-12 flex items-center justify-between gap-5 border-t border-[var(--about-border)] pt-5">
              <span className="font-[family-name:var(--font-utility)] text-[0.67rem] font-bold tracking-[0.16em] text-[var(--about-muted)] uppercase">
                Luz · Presença · Memória
              </span>
              <span
                className="font-[family-name:var(--font-japanese)] text-3xl text-[var(--about-accent)]"
                lang="ja"
              >
                縁
              </span>
            </footer>
          </article>

          <div className="lg:col-span-7">
            <div className="mb-4 flex items-end justify-between gap-5 rounded-[clamp(0.7rem,1vw,1rem)] border border-[var(--about-border)] bg-[var(--about-ink)] px-[clamp(1rem,2vw,1.75rem)] py-4 text-[var(--about-background)]">
              <div>
                <p className="m-0 font-[family-name:var(--font-utility)] text-[0.65rem] font-bold tracking-[0.18em] text-[var(--about-secondary)] uppercase">
                  O que eu registro
                </p>
                <h3 className="mt-1 mb-0 font-[family-name:var(--font-display)] text-[clamp(1.45rem,2.5vw,2.7rem)] leading-none tracking-[-0.045em] uppercase">
                  Trabalhos realizados
                </h3>
              </div>
              <span className="hidden max-w-40 text-right text-xs leading-relaxed text-[color-mix(in_srgb,var(--about-background)_68%,transparent)] sm:block">
                Cada encontro pede um olhar diferente.
              </span>
            </div>

            <div className="grid min-h-[38rem] grid-cols-2 grid-rows-2 gap-[clamp(0.55rem,0.85vw,0.9rem)] sm:grid-cols-12">
              {workTypes.map((work) => (
                <figure
                  className={`group relative m-0 overflow-hidden rounded-[clamp(0.7rem,1vw,1rem)] border border-[var(--about-border)] bg-[var(--about-surface)] ${work.className}`}
                  key={work.name}
                >
                  <Image
                    fill
                    alt={work.alt}
                    className="scale-[1.01] object-cover saturate-[0.88] contrast-[1.06] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.055] group-hover:saturate-100 motion-reduce:transition-none"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 38vw"
                    src={work.src}
                    style={{ objectPosition: work.position }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_srgb,var(--about-photo-shade)_92%,transparent)_100%)]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 z-[1] flex items-end justify-between gap-4 p-[clamp(1rem,1.8vw,1.6rem)] text-[var(--about-ink)]">
                    <div>
                      <p className="m-0 font-[family-name:var(--font-display)] text-[clamp(1.15rem,2vw,2.1rem)] leading-none">
                        {work.name}
                      </p>
                      <p className="mt-2 mb-0 font-[family-name:var(--font-utility)] text-[0.62rem] font-semibold tracking-[0.14em] text-[var(--about-muted)] uppercase">
                        {work.description}
                      </p>
                    </div>
                    <span
                      className="font-[family-name:var(--font-japanese)] text-[clamp(2rem,3vw,3.5rem)] leading-none text-[var(--about-accent)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6 motion-reduce:transition-none"
                      lang="ja"
                    >
                      {work.japanese}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
