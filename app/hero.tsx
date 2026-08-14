import Image from "next/image";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

import logoY from "../public/logo-y-monochrome.png";
import Menu from "./menu";
import { portfolioPaletteVariables } from "./palette";

type PhotoTileProps = {
  alt: string;
  caption?: string;
  className: string;
  japanese: string;
  label: string;
  position?: string;
  priority?: boolean;
  romanized: string;
  src: string;
};

function PhotoTile({
  alt,
  caption,
  className,
  japanese,
  label,
  position = "center",
  priority = false,
  romanized,
  src,
}: PhotoTileProps) {
  return (
    <figure
      className={`group/photo relative m-0 min-w-0 overflow-hidden rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--palette-paper)_20%,transparent)] bg-[var(--palette-graphite)] after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(to_top,color-mix(in_srgb,var(--palette-ink)_82%,transparent)_0,color-mix(in_srgb,var(--palette-ink)_8%,transparent)_36%,transparent_58%)] after:content-[''] ${className}`}
    >
      <Image
        fill
        alt={alt}
        className="scale-[1.01] object-cover saturate-90 contrast-[1.06] transition-[transform,filter] duration-[650ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover/photo:scale-[1.055] group-hover/photo:saturate-[1.08] group-hover/photo:contrast-[1.02] motion-reduce:transition-none"
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 48vw"
        src={src}
        style={{ objectPosition: position }}
      />
      <figcaption className="absolute right-[clamp(0.8rem,1.1vw,1.1rem)] bottom-[clamp(0.75rem,1vw,1rem)] left-[clamp(0.8rem,1.1vw,1.1rem)] z-[2] flex items-end justify-between gap-3 font-[family-name:var(--font-utility)] text-[clamp(0.58rem,0.72vw,0.72rem)] font-semibold tracking-[0.15em] uppercase">
        {caption ? (
          <span className="text-[var(--palette-paper)]">{caption}</span>
        ) : (
          <>
            <span className="font-[family-name:var(--font-display)] text-[clamp(0.78rem,0.95vw,0.98rem)] font-normal tracking-[0.04em] text-[var(--palette-orange)] normal-case">
              <span
                className="font-[family-name:var(--font-japanese)]"
                lang="ja"
              >
                {japanese}
              </span>{" "}
              · {romanized}
            </span>
            <span>{label}</span>
          </>
        )}
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-svh items-center p-[clamp(0.75rem,1.6vw,1.75rem)] text-[var(--palette-paper)] max-lg:block max-sm:p-[0.65rem]"
      id="inicio"
      aria-labelledby="hero-title"
      style={portfolioPaletteVariables}
    >
      <Menu />

      <div className="mx-auto grid h-[clamp(40rem,calc(100svh-clamp(1.5rem,3.2vw,3.5rem)),62rem)] w-full grid-cols-12 grid-rows-8 gap-[clamp(0.55rem,0.85vw,0.9rem)] max-lg:h-auto max-lg:min-h-0 max-lg:grid-cols-2 max-lg:grid-rows-none">
        <div className="relative flex min-w-0 [grid-area:1/1/3/4] items-center justify-center overflow-hidden rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--site-border)_72%,transparent)] bg-transparent max-lg:min-h-44 max-lg:[grid-column:1/-1] max-lg:[grid-row:auto]">
          <Image
            alt="Símbolo visual do portfólio"
            className="h-auto w-[min(42%,8.25rem)] drop-shadow-[0_0.65rem_1.4rem_color-mix(in_srgb,var(--palette-paper)_14%,transparent)] max-lg:w-26"
            priority
            src={logoY}
          />
          <p className="absolute right-3.5 bottom-3 m-0 text-right font-[family-name:var(--font-utility)] text-[clamp(0.55rem,0.75vw,0.72rem)] leading-[1.2] font-semibold tracking-[0.12em] text-[color-mix(in_srgb,var(--palette-paper)_70%,transparent)] uppercase">
            Fotografia de
            <br />
            cultura japonesa
          </p>
        </div>

        <header className="relative flex min-w-0 [grid-area:1/4/3/8] flex-col justify-between overflow-hidden rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--palette-paper)_20%,transparent)] bg-[var(--palette-paper)] p-[clamp(1rem,1.5vw,1.5rem)] text-[var(--palette-ink)] max-lg:min-h-84 max-lg:[grid-column:1/-1] max-lg:[grid-row:auto] max-sm:min-h-88">
          <p className="relative z-[1] m-0 font-[family-name:var(--font-utility)] text-[clamp(0.62rem,0.75vw,0.75rem)] font-bold tracking-[0.17em] uppercase">
            Um encontro · Um instante
          </p>
          <h1
            className="relative z-[1] m-0 max-w-[22ch] font-[family-name:var(--font-display)] text-[clamp(1.4rem,1.9vw,2rem)] leading-[0.98] tracking-[-0.045em] uppercase max-lg:text-[clamp(2.15rem,7vw,3.5rem)]"
            id="hero-title"
          >
            Histórias que acontecem uma só vez, preservadas em luz, movimento e
            memória.
          </h1>
        </header>

        <PhotoTile
          alt="Artista de dança tradicional japonesa sob luz cênica"
          caption="Foto Gueixa - Kawasuji Fest - 2024"
          className="[grid-area:1/8/6/13] max-lg:min-h-[min(36rem,78svh)] max-lg:[grid-column:1/-1] max-lg:[grid-row:auto] max-sm:min-h-124"
          japanese="舞"
          label="movimento"
          position="54% center"
          priority
          romanized="Mai"
          src="/5.jpeg"
        />

        <PhotoTile
          alt="Taikoísta tocando durante uma apresentação"
          caption={'Foto "Kodô" - Kawasuji Fest - 2024'}
          className="[grid-area:3/1/7/4] max-lg:min-h-96 max-lg:[grid-column:auto] max-lg:[grid-row:auto] max-sm:min-h-76"
          japanese="鼓動"
          label="pulso"
          position="44% center"
          romanized="Kodō"
          src="/3.jpeg"
        />

        <PhotoTile
          alt="Músico concentrado diante de tambores taiko"
          className="[grid-area:3/4/6/8] max-lg:min-h-96 max-lg:[grid-column:auto] max-lg:[grid-row:auto] max-sm:min-h-76"
          japanese="力"
          label="força"
          position="72% center"
          romanized="Chikara"
          src="/2.jpeg"
        />

        <aside
          className="relative flex min-w-0 [grid-area:7/1/9/4] flex-col justify-between overflow-hidden rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--palette-paper)_20%,transparent)] bg-[var(--palette-torii)] bg-[linear-gradient(125deg,transparent_50%,color-mix(in_srgb,var(--palette-orange)_12%,transparent))] p-[clamp(1rem,1.5vw,1.45rem)] text-[var(--palette-paper)] max-lg:min-h-60 max-lg:[grid-column:1/-1] max-lg:[grid-row:auto]"
          id="contato"
        >
          <p className="m-0 font-[family-name:var(--font-utility)] text-[clamp(0.58rem,0.7vw,0.72rem)] font-semibold tracking-[0.14em] uppercase">
            Ensaios · Eventos · Retratos
          </p>
          <a
            className="group/contact relative block w-fit font-[family-name:var(--font-utility)] text-[clamp(1.2rem,1.75vw,1.8rem)] leading-[0.98] font-bold tracking-[-0.02em] text-inherit uppercase no-underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-paper)] max-sm:pr-18 max-sm:text-[1.45rem]"
            href="#redes"
          >
            Vamos registrar
            <br />
            o seu momento
            <span
              className="ml-1.5 inline-block text-[var(--palette-paper)] transition-transform duration-200 ease-out group-hover/contact:translate-x-[0.18rem] group-hover/contact:translate-y-[-0.18rem] motion-reduce:transition-none"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
          <div
            className="absolute right-4 bottom-3.5 flex gap-2"
            id="redes"
            aria-label="Redes sociais"
          >
            <a
              className="grid aspect-square w-8 place-items-center rounded-full border border-[color-mix(in_srgb,var(--palette-paper)_35%,transparent)] text-base text-[var(--palette-paper)] transition-[color,background,border-color] duration-180 ease-out hover:border-[var(--palette-orange)] hover:bg-[var(--palette-orange)] hover:text-[var(--palette-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-paper)] motion-reduce:transition-none"
              aria-label="Instagram"
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoInstagram aria-hidden="true" />
            </a>
            <a
              className="grid aspect-square w-8 place-items-center rounded-full border border-[color-mix(in_srgb,var(--palette-paper)_35%,transparent)] text-base text-[var(--palette-paper)] transition-[color,background,border-color] duration-180 ease-out hover:border-[var(--palette-orange)] hover:bg-[var(--palette-orange)] hover:text-[var(--palette-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-paper)] motion-reduce:transition-none"
              aria-label="Facebook"
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoFacebook aria-hidden="true" />
            </a>
          </div>
        </aside>

        <PhotoTile
          alt="Grupo de taiko em apresentação coletiva"
          className="[grid-area:6/8/9/11] max-lg:min-h-96 max-lg:[grid-column:auto] max-lg:[grid-row:auto] max-sm:min-h-76"
          japanese="和"
          label="coletivo"
          position="center 72%"
          romanized="Wa"
          src="/1.jpeg"
        />

        <PhotoTile
          alt="Artistas mascarados em uma apresentação cultural"
          caption="Foto Máscaras - Festival do Japão de Sumaré - 2024"
          className="[grid-area:6/11/9/13] max-lg:min-h-96 max-lg:[grid-column:auto] max-lg:[grid-row:auto] max-sm:min-h-76"
          japanese="祭"
          label="celebração"
          position="center 32%"
          romanized="Matsuri"
          src="/6.jpeg"
        />

        <PhotoTile
          alt="Mãos e baquetas em detalhe sobre um tambor taiko"
          className="[grid-area:6/4/9/8] max-lg:min-h-80 max-lg:[grid-column:1/-1] max-lg:[grid-row:auto] max-sm:min-h-68"
          japanese="響"
          label="detalhe"
          position="54% center"
          romanized="Hibiki"
          src="/4.jpeg"
        />
      </div>
    </section>
  );
}
