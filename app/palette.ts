import type { CSSProperties } from "react";

export const portfolioPalette = {
  graphite: "#211f20",
  ink: "#0f0f0f",
  orange: "#fc8800",
  paper: "#ffffff",
  purple: "#5a005d",
} as const;

type PaletteVariables = CSSProperties &
  Record<
    | "--palette-graphite"
    | "--palette-ink"
    | "--palette-orange"
    | "--palette-paper"
    | "--palette-purple",
    string
  >;

export const portfolioPaletteVariables: PaletteVariables = {
  "--palette-graphite": portfolioPalette.graphite,
  "--palette-ink": portfolioPalette.ink,
  "--palette-orange": portfolioPalette.orange,
  "--palette-paper": portfolioPalette.paper,
  "--palette-purple": portfolioPalette.purple,
};
