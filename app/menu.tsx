"use client";

import { useEffect, useRef, useState } from "react";
import { IoArrowForward, IoClose, IoMenu } from "react-icons/io5";

import { portfolioPaletteVariables } from "./palette";

const menuLinks = [
  {
    href: "#sobre",
    japanese: "私たち",
    label: "Sobre",
    panel:
      "bg-[var(--palette-paper)] text-[var(--palette-ink)] lg:[grid-area:1/1/2/8]",
  },
  {
    href: "#eventos",
    japanese: "祭",
    label: "Eventos",
    panel:
      "bg-[var(--palette-orange)] text-[var(--palette-ink)] lg:[grid-area:1/8/3/13]",
  },
  {
    href: "#contato",
    japanese: "連絡",
    label: "Contato",
    panel:
      "bg-[var(--palette-torii)] text-[var(--palette-paper)] lg:[grid-area:2/1/3/8]",
  },
] as const;

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements =
        menuPanelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        aria-controls="mega-menu"
        aria-expanded={isOpen}
        className="absolute top-[clamp(1.5rem,2.7vw,3rem)] right-[clamp(1.5rem,2.7vw,3rem)] z-40 flex h-11 items-center gap-2.5 rounded-full border border-[color-mix(in_srgb,var(--palette-paper)_25%,transparent)] bg-[color-mix(in_srgb,var(--palette-ink)_82%,transparent)] px-3.5 font-[family-name:var(--font-utility)] text-xs font-bold tracking-[0.14em] text-[var(--palette-paper)] uppercase shadow-[0_0.75rem_2.5rem_color-mix(in_srgb,var(--palette-ink)_38%,transparent)] backdrop-blur-md transition-[color,background,border-color,transform] duration-200 hover:border-[var(--palette-orange)] hover:bg-[var(--palette-orange)] hover:text-[var(--palette-ink)] active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-orange)] motion-reduce:transition-none max-sm:top-5 max-sm:right-5"
        onClick={() => setIsOpen(true)}
        style={portfolioPaletteVariables}
        type="button"
      >
        <IoMenu aria-hidden="true" className="text-lg" />
        Menu
      </button>

      <div
        ref={menuPanelRef}
        aria-hidden={!isOpen}
        aria-label="Menu principal"
        aria-modal="true"
        className={`fixed inset-0 z-50 overflow-y-auto bg-[var(--palette-ink)] p-[clamp(0.65rem,1.6vw,1.75rem)] transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        id="mega-menu"
        inert={!isOpen}
        role="dialog"
        style={portfolioPaletteVariables}
      >
        <div
          className={`mx-auto grid min-h-[calc(100svh-clamp(1.3rem,3.2vw,3.5rem))] grid-cols-12 grid-rows-[auto_1fr_auto] gap-[clamp(0.55rem,0.85vw,0.9rem)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${
            isOpen ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <header className="col-span-12 flex items-center justify-between rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--palette-paper)_18%,transparent)] bg-[var(--palette-graphite)] px-[clamp(1rem,1.6vw,1.5rem)] py-3 text-[var(--palette-paper)]">
            <div>
              <p
                className="m-0 font-[family-name:var(--font-japanese)] text-base tracking-[-0.04em]"
                lang="ja"
              >
                一期一会
              </p>
              <p className="m-0 font-[family-name:var(--font-utility)] text-[0.62rem] font-semibold tracking-[0.16em] text-[color-mix(in_srgb,var(--palette-paper)_62%,transparent)] uppercase">
                Navegação principal
              </p>
            </div>

            <button
              ref={closeButtonRef}
              aria-label="Fechar menu"
              className="grid size-11 place-items-center rounded-full border border-[color-mix(in_srgb,var(--palette-paper)_32%,transparent)] text-xl text-[var(--palette-paper)] transition-[color,background,border-color,transform] duration-200 hover:rotate-6 hover:border-[var(--palette-orange)] hover:bg-[var(--palette-orange)] hover:text-[var(--palette-ink)] active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-orange)] motion-reduce:transition-none"
              onClick={closeMenu}
              type="button"
            >
              <IoClose aria-hidden="true" />
            </button>
          </header>

          <nav
            aria-label="Navegação principal"
            className="col-span-12 grid min-h-[32rem] grid-cols-1 grid-rows-3 gap-[clamp(0.55rem,0.85vw,0.9rem)] lg:grid-cols-12 lg:grid-rows-2 max-sm:min-h-[36rem]"
          >
            {menuLinks.map((link) => (
              <a
                className={`group relative flex min-h-0 flex-col justify-between overflow-hidden rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--palette-paper)_18%,transparent)] p-[clamp(1.15rem,2.2vw,2.25rem)] no-underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-paper)] ${link.panel}`}
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                <span className="relative z-[1] flex items-start justify-between gap-4 font-[family-name:var(--font-utility)] text-[0.66rem] font-bold tracking-[0.16em] uppercase opacity-65">
                  Explorar
                  <IoArrowForward
                    aria-hidden="true"
                    className="text-lg opacity-100 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>

                <span className="relative z-[1] flex items-end justify-between gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,6.4vw,7rem)] leading-[0.82] tracking-[-0.075em] uppercase">
                    {link.label}
                  </span>
                  <span
                    className="font-[family-name:var(--font-japanese)] text-[clamp(1.25rem,2.5vw,2.7rem)] opacity-45 transition-[opacity,transform] duration-300 group-hover:translate-x-[-0.25rem] group-hover:opacity-100 motion-reduce:transition-none"
                    lang="ja"
                  >
                    {link.japanese}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="absolute -right-[12%] -bottom-[48%] aspect-square w-[clamp(8rem,18vw,18rem)] rounded-full border-[clamp(1rem,2.4vw,2.5rem)] border-current opacity-[0.08] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 motion-reduce:transition-none"
                />
              </a>
            ))}
          </nav>

          <footer className="col-span-12 flex items-center justify-between gap-4 rounded-[clamp(0.55rem,0.8vw,0.85rem)] border border-[color-mix(in_srgb,var(--palette-paper)_18%,transparent)] bg-[var(--palette-graphite)] px-[clamp(1rem,1.6vw,1.5rem)] py-3 font-[family-name:var(--font-utility)] text-[0.65rem] font-semibold tracking-[0.14em] text-[color-mix(in_srgb,var(--palette-paper)_64%,transparent)] uppercase">
            <span>Fotografia · Cultura japonesa</span>
            <a
              className="text-[var(--palette-orange)] underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--palette-orange)]"
              href="#inicio"
              onClick={closeMenu}
            >
              Voltar ao início
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
