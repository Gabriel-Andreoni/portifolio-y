"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import { portfolioPaletteVariables } from "./palette";

const categories = [
  {
    description:
      "Ritmo coletivo, precisão e presença transformados em memória visual.",
    id: "apresentacoes",
    japanese: "演奏",
    label: "Apresentações",
  },
  {
    description:
      "A nova geração em movimento: disciplina, descoberta e alegria no mesmo quadro.",
    id: "junior",
    japanese: "若",
    label: "Júnior",
  },
  {
    description:
      "A escala do grande tambor, o silêncio anterior e a força de cada impacto.",
    id: "odaiko",
    japanese: "大太鼓",
    label: "Odaiko",
  },
  {
    description:
      "Concentração, ajustes e encontros que acontecem antes de o palco ganhar vida.",
    id: "passagem-palco",
    japanese: "舞台",
    label: "Passagem de palco",
  },
  {
    description:
      "A conquista compartilhada e a emoção que permanece depois da apresentação.",
    id: "premiacao",
    japanese: "栄誉",
    label: "Premiação",
  },
] as const;

const tileLayouts = [
  "col-span-2 row-span-5 sm:col-span-4 lg:col-span-7 lg:row-span-5",
  "col-span-1 row-span-3 sm:col-span-2 lg:col-span-3",
  "col-span-1 row-span-3 sm:col-span-2 lg:col-span-2",
  "col-span-2 row-span-3 sm:col-span-4 lg:col-span-5",
  "col-span-1 row-span-3 sm:col-span-2 lg:col-span-4",
  "col-span-1 row-span-3 sm:col-span-2 lg:col-span-4",
  "col-span-2 row-span-3 sm:col-span-2 lg:col-span-4",
  "col-span-2 row-span-3 sm:col-span-2 lg:col-span-6",
  "col-span-1 row-span-3 sm:col-span-1 lg:col-span-3",
  "col-span-1 row-span-3 sm:col-span-1 lg:col-span-3",
] as const;

type CategoryId = (typeof categories)[number]["id"];

function getImagePath(category: CategoryId, index: number) {
  return `/trabalhos/${category}/${String(index + 1).padStart(2, "0")}.webp`;
}

export default function Events() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<CategoryId>("apresentacoes");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ??
    categories[0];

  function selectCategory(index: number, moveFocus = false) {
    const category = categories[index];
    setActiveCategoryId(category.id);

    if (moveFocus) {
      tabRefs.current[index]?.focus();
    }
  }

  function handleTabKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % categories.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = categories.length - 1;
    }

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    selectCategory(nextIndex, true);
  }

  return (
    <section
      aria-labelledby="events-title"
      className="relative overflow-clip bg-[var(--palette-paper)] px-[clamp(0.75rem,1.6vw,1.75rem)] py-[clamp(4.5rem,9vw,9rem)] text-[var(--palette-ink)]"
      id="eventos"
      style={portfolioPaletteVariables}
    >
      <span
        aria-hidden="true"
        className="absolute -top-[12vw] -right-[10vw] aspect-square w-[clamp(14rem,32vw,34rem)] rounded-full bg-[var(--palette-orange)] opacity-10"
      />

      <div className="relative mx-auto max-w-[96rem]">
        <header className="mb-[clamp(2.5rem,6vw,5.5rem)] grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="m-0 font-[family-name:var(--font-utility)] text-xs font-bold tracking-[0.17em] text-[var(--palette-purple)] uppercase">
              Trabalhos realizados
            </p>
            <p
              className="mt-3 mb-0 font-[family-name:var(--font-display)] text-[clamp(1.15rem,1.8vw,1.8rem)] tracking-[-0.045em]"
              lang="ja"
            >
              一瞬を、永遠に。
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2
              className="m-0 max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(3rem,7.4vw,7.5rem)] leading-[0.84] tracking-[-0.075em] uppercase"
              id="events-title"
            >
              O instante decide tudo.
            </h2>
            <p className="mt-7 mb-0 max-w-2xl text-[clamp(0.95rem,1.25vw,1.2rem)] leading-relaxed font-medium text-[color-mix(in_srgb,var(--palette-ink)_68%,transparent)]">
              Cada evento tem um ritmo próprio. Escolha uma categoria e veja
              como presença, movimento e emoção se transformam em narrativa.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-[clamp(0.75rem,1.2vw,1.2rem)] lg:grid-cols-[minmax(17rem,0.34fr)_minmax(0,1fr)]">
          <aside className="rounded-[clamp(0.7rem,1vw,1rem)] bg-[var(--palette-ink)] p-[clamp(1rem,1.6vw,1.5rem)] text-[var(--palette-paper)] lg:sticky lg:top-4">
            <div className="flex items-start justify-between gap-4 border-b border-[color-mix(in_srgb,var(--palette-paper)_16%,transparent)] pb-5">
              <div>
                <p className="m-0 font-[family-name:var(--font-utility)] text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--palette-orange)] uppercase">
                  Escolha o seu olhar
                </p>
                <p className="mt-2 mb-0 font-[family-name:var(--font-display)] text-[clamp(1.35rem,2vw,2rem)] leading-none">
                  Categorias
                </p>
              </div>
              <span
                className="font-[family-name:var(--font-display)] text-2xl text-[color-mix(in_srgb,var(--palette-paper)_35%,transparent)]"
                lang="ja"
              >
                選
              </span>
            </div>

            <div
              aria-label="Categorias de eventos"
              className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:overflow-visible lg:pb-0"
              role="tablist"
            >
              {categories.map((category, index) => {
                const isActive = category.id === activeCategoryId;

                return (
                  <button
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    aria-controls="events-gallery"
                    aria-selected={isActive}
                    className={`group flex min-w-max items-center justify-between gap-5 rounded-lg border px-3.5 py-3 text-left font-[family-name:var(--font-utility)] text-sm font-bold tracking-[0.08em] uppercase transition-[color,background,border-color,transform] duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-orange)] motion-reduce:transition-none lg:min-w-0 lg:w-full ${
                      isActive
                        ? "border-[var(--palette-orange)] bg-[var(--palette-orange)] text-[var(--palette-ink)]"
                        : "border-[color-mix(in_srgb,var(--palette-paper)_18%,transparent)] text-[color-mix(in_srgb,var(--palette-paper)_72%,transparent)] hover:translate-x-1 hover:border-[color-mix(in_srgb,var(--palette-paper)_45%,transparent)] hover:text-[var(--palette-paper)]"
                    }`}
                    id={`events-tab-${category.id}`}
                    key={category.id}
                    onClick={() => selectCategory(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                  >
                    {category.label}
                    <span className="font-[family-name:var(--font-display)] text-base normal-case opacity-50">
                      {category.japanese}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border-t border-[color-mix(in_srgb,var(--palette-paper)_16%,transparent)] pt-5">
              <p className="m-0 font-[family-name:var(--font-utility)] text-[0.65rem] font-semibold tracking-[0.14em] text-[color-mix(in_srgb,var(--palette-paper)_48%,transparent)] uppercase">
                10 registros selecionados
              </p>
              <p className="mt-3 mb-0 max-w-sm text-sm leading-relaxed text-[color-mix(in_srgb,var(--palette-paper)_74%,transparent)]">
                Seu evento merece atenção ao que acontece no palco e ao que só
                existe por um segundo.
              </p>
              <a
                className="group mt-6 flex items-center justify-between gap-4 rounded-lg bg-[var(--palette-purple)] px-4 py-4 font-[family-name:var(--font-utility)] text-base font-bold tracking-[0.04em] text-[var(--palette-paper)] uppercase no-underline transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--palette-orange)] hover:text-[var(--palette-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-orange)] motion-reduce:transition-none"
                href="#contato"
              >
                Conversar sobre meu evento
                <IoArrowForward
                  aria-hidden="true"
                  className="shrink-0 text-xl transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>
            </div>
          </aside>

          <div
            aria-labelledby={`events-tab-${activeCategory.id}`}
            id="events-gallery"
            role="tabpanel"
          >
            <div className="mb-4 flex flex-col justify-between gap-3 border-b border-[color-mix(in_srgb,var(--palette-ink)_18%,transparent)] pb-4 sm:flex-row sm:items-end">
              <div>
                <p className="m-0 font-[family-name:var(--font-utility)] text-[0.65rem] font-bold tracking-[0.16em] text-[var(--palette-purple)] uppercase">
                  Categoria selecionada
                </p>
                <h3 className="mt-1 mb-0 font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.4vw,3.5rem)] leading-none tracking-[-0.055em] uppercase">
                  {activeCategory.label}
                </h3>
              </div>
              <p className="m-0 max-w-lg text-sm leading-relaxed text-[color-mix(in_srgb,var(--palette-ink)_62%,transparent)]">
                {activeCategory.description}
              </p>
            </div>

            <div
              className="grid auto-rows-[5.5rem] grid-flow-dense grid-cols-2 gap-[clamp(0.55rem,0.85vw,0.9rem)] sm:grid-cols-4 lg:grid-cols-12"
              key={activeCategory.id}
            >
              {tileLayouts.map((layout, index) => (
                <figure
                  className={`group relative m-0 min-w-0 overflow-hidden rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--palette-ink)_18%,transparent)] bg-[var(--palette-graphite)] ${layout}`}
                  key={getImagePath(activeCategory.id, index)}
                >
                  <Image
                    fill
                    alt={`${activeCategory.label}: fotografia de evento com foco em movimento, pessoas e atmosfera`}
                    className="scale-[1.01] object-cover saturate-90 contrast-[1.04] transition-[transform,filter] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.045] group-hover:saturate-100 motion-reduce:transition-none"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw"
                    src={getImagePath(activeCategory.id, index)}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--palette-ink)_72%,transparent),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-45 motion-reduce:transition-none"
                  />
                  <figcaption className="absolute right-3 bottom-3 left-3 z-[1] flex items-end justify-between gap-3 font-[family-name:var(--font-utility)] text-[0.62rem] font-semibold tracking-[0.14em] text-[var(--palette-paper)] uppercase">
                    <span className="text-[var(--palette-orange)]">
                      {activeCategory.japanese}
                    </span>
                    <span>Registro autoral</span>
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
