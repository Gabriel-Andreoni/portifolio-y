"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import { portfolioPaletteVariables } from "./palette";

const categories = [
  {
    description:
      "Palco, dança, taiko e encontros espontâneos na celebração da cultura japonesa em Sumaré.",
    id: "festival-japao-sumare",
    japanese: "祭",
    label: "Festival do Japão - Sumaré",
    images: [
      {
        alt: "Taikoístas em apresentação conjunta no Festival do Japão em Sumaré",
        layout:
          "col-span-2 row-span-4 sm:col-span-4 lg:[grid-area:1/1/6/8]",
        position: "center 42%",
      },
      {
        alt: "Cantora de quimono laranja se apresentando no palco",
        layout:
          "col-span-1 row-span-4 sm:col-span-2 lg:[grid-area:1/8/6/11]",
        position: "center 28%",
      },
      {
        alt: "Taikoísta tocando um grande tambor durante o festival",
        layout:
          "col-span-1 row-span-4 sm:col-span-2 lg:[grid-area:1/11/6/13]",
        position: "center center",
      },
      {
        alt: "Grupo de artistas mascarados em uma apresentação cultural",
        layout:
          "col-span-2 row-span-3 sm:col-span-4 lg:[grid-area:6/1/10/5]",
        position: "center 38%",
      },
      {
        alt: "Taikoísta concentrada durante uma apresentação ao ar livre",
        layout:
          "col-span-1 row-span-4 sm:col-span-2 lg:[grid-area:6/5/10/8]",
        position: "55% center",
      },
      {
        alt: "Dançarina de traje tradicional em movimento no palco",
        layout:
          "col-span-1 row-span-4 sm:col-span-2 lg:[grid-area:6/8/10/10]",
        position: "center 30%",
      },
      {
        alt: "Artista em apresentação com um leque azul cobrindo o rosto",
        layout:
          "col-span-2 row-span-4 sm:col-span-2 lg:[grid-area:6/10/10/13]",
        position: "center 34%",
      },
      {
        alt: "Público participando de uma dança em roda junto ao torii",
        layout:
          "col-span-2 row-span-3 sm:col-span-2 lg:[grid-area:10/1/13/6]",
        position: "center 50%",
      },
      {
        alt: "Abraço entre participantes durante o Festival do Japão",
        layout:
          "col-span-2 row-span-3 sm:col-span-2 lg:[grid-area:10/6/13/10]",
        position: "center center",
      },
      {
        alt: "Grupo de dançarinas em figurinos vermelhos durante o festival",
        layout:
          "col-span-1 row-span-3 sm:col-span-2 lg:[grid-area:10/10/13/13]",
        position: "center 34%",
      },
    ],
  },
  {
    description:
      "A energia do taiko e das danças de Okinawa em uma narrativa de força, cor e coletividade.",
    id: "rkmd-2025",
    japanese: "太鼓",
    label: "RKMD - 2025",
    images: [
      {
        alt: "Artista conduzindo uma dança com a cabeça de um dragão",
        layout:
          "col-span-2 row-span-4 sm:col-span-4 lg:[grid-area:1/1/6/8]",
        position: "center 38%",
      },
      {
        alt: "Taikoísta erguendo uma baqueta diante da cortina vermelha",
        layout:
          "col-span-1 row-span-4 sm:col-span-2 lg:[grid-area:1/8/6/11]",
        position: "center 30%",
      },
      {
        alt: "Taikoísta em primeiro plano durante a apresentação coletiva",
        layout:
          "col-span-1 row-span-4 sm:col-span-2 lg:[grid-area:1/11/6/13]",
        position: "center 28%",
      },
      {
        alt: "Grande retrato coletivo dos participantes do RKMD 2025",
        layout:
          "col-span-2 row-span-3 sm:col-span-4 lg:[grid-area:6/1/9/7]",
        position: "center center",
      },
      {
        alt: "Taikoísta tocando com o grupo em figurinos vermelhos e amarelos",
        layout:
          "col-span-1 row-span-3 sm:col-span-2 lg:[grid-area:6/7/9/10]",
        position: "center 34%",
      },
      {
        alt: "Pessoa registrando a apresentação do RKMD pelo celular",
        layout:
          "col-span-1 row-span-3 sm:col-span-2 lg:[grid-area:6/10/9/13]",
        position: "center 50%",
      },
      {
        alt: "Dançarinas com sombrinhas roxas em apresentação tradicional",
        layout:
          "col-span-1 row-span-3 sm:col-span-2 lg:[grid-area:9/1/12/4]",
        position: "center 35%",
      },
      {
        alt: "Composição abstrata com leques azuis durante uma dança",
        layout:
          "col-span-1 row-span-3 sm:col-span-2 lg:[grid-area:9/4/12/7]",
        position: "center 35%",
      },
      {
        alt: "Grupo dançando com leques coloridos no palco",
        layout:
          "col-span-1 row-span-3 sm:col-span-2 lg:[grid-area:9/7/12/10]",
        position: "center center",
      },
      {
        alt: "Taikoísta tocando um tambor vermelho durante o RKMD",
        layout:
          "col-span-1 row-span-3 sm:col-span-2 lg:[grid-area:9/10/12/13]",
        position: "center 32%",
      },
    ],
  },
] as const;

type CategoryId = (typeof categories)[number]["id"];

function getImagePath(category: CategoryId, index: number) {
  return `/trabalhos/${category}/${String(index + 1).padStart(2, "0")}.webp`;
}

export default function Events() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<CategoryId>("festival-japao-sumare");
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
      className="relative overflow-clip px-[clamp(0.75rem,1.6vw,1.75rem)] py-[clamp(4.5rem,9vw,9rem)] text-[var(--site-ink)]"
      id="eventos"
      style={portfolioPaletteVariables}
    >
      <div className="relative mx-auto max-w-[96rem]">
        <header className="mb-[clamp(2.5rem,6vw,5.5rem)] grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="m-0 font-[family-name:var(--font-utility)] text-xs font-bold tracking-[0.17em] text-[var(--site-accent)] uppercase">
              Trabalhos realizados
            </p>
            <p
              className="mt-3 mb-0 font-[family-name:var(--font-japanese)] text-[clamp(1.15rem,1.8vw,1.8rem)] tracking-[-0.045em]"
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
            <p className="mt-7 mb-0 max-w-2xl text-[clamp(0.95rem,1.25vw,1.2rem)] leading-relaxed font-medium text-[var(--site-muted)]">
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
                  Escolha o evento
                </p>
                <p className="mt-2 mb-0 font-[family-name:var(--font-display)] text-[clamp(1.35rem,2vw,2rem)] leading-none">
                  Categorias
                </p>
              </div>
              <span
                className="font-[family-name:var(--font-japanese)] text-2xl text-[color-mix(in_srgb,var(--palette-paper)_35%,transparent)]"
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
                    className={`group flex min-w-max items-center justify-between gap-5 rounded-lg border px-3.5 py-3 text-left font-[family-name:var(--font-utility)] text-sm leading-tight font-bold tracking-[0.08em] uppercase transition-[color,background,border-color,transform] duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-orange)] motion-reduce:transition-none lg:min-w-0 lg:w-full ${
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
                    <span
                      className="font-[family-name:var(--font-japanese)] text-base normal-case opacity-50"
                      lang="ja"
                    >
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
                Uma curadoria de palco, bastidores e público para contar cada
                evento como uma história completa.
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
            <div className="mb-4 flex flex-col justify-between gap-3 border-b border-[var(--site-border)] pb-4 sm:flex-row sm:items-end">
              <div>
                <p className="m-0 font-[family-name:var(--font-utility)] text-[0.65rem] font-bold tracking-[0.16em] text-[var(--site-accent)] uppercase">
                  Categoria selecionada
                </p>
                <h3 className="mt-1 mb-0 max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(1.65rem,3vw,3.1rem)] leading-[0.95] tracking-[-0.055em] uppercase">
                  {activeCategory.label}
                </h3>
              </div>
              <p className="m-0 max-w-lg text-sm leading-relaxed text-[var(--site-muted)]">
                {activeCategory.description}
              </p>
            </div>

            <div
              className="grid auto-rows-[5.5rem] grid-flow-dense grid-cols-2 gap-[clamp(0.55rem,0.85vw,0.9rem)] sm:grid-cols-4 lg:grid-cols-12"
              key={activeCategory.id}
            >
              {activeCategory.images.map((image, index) => (
                <figure
                  className={`group relative m-0 min-w-0 overflow-hidden rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[var(--site-border)] bg-[var(--palette-graphite)] ${image.layout}`}
                  key={getImagePath(activeCategory.id, index)}
                >
                  <Image
                    fill
                    alt={image.alt}
                    className="scale-[1.01] object-cover saturate-90 contrast-[1.04] transition-[transform,filter] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.045] group-hover:saturate-100 motion-reduce:transition-none"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw"
                    src={getImagePath(activeCategory.id, index)}
                    style={{ objectPosition: image.position }}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--palette-ink)_72%,transparent),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-45 motion-reduce:transition-none"
                  />
                  <figcaption className="absolute right-3 bottom-3 left-3 z-[1] flex items-end justify-between gap-3 font-[family-name:var(--font-utility)] text-[0.62rem] font-semibold tracking-[0.14em] text-[var(--palette-paper)] uppercase">
                    <span
                      className="font-[family-name:var(--font-japanese)] text-[var(--palette-orange)]"
                      lang="ja"
                    >
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
