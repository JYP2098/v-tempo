export const watchParts = {
  explodedFull: "/watch-parts/exploded-full.jpg",
  exploded3d: "/watch-parts/exploded-3d.jpg",
  assembled: "/watch-parts/assembled.jpg",
  movement: "/watch-parts/movement.jpg",
  plate: "/watch-parts/plate.jpg",
  assembly: "/watch-parts/assembly.jpg",
  assemblyWide: "/watch-parts/assembly-wide.jpg",
  gears: "/watch-parts/gears.jpg",
  geartrain: "/watch-parts/geartrain.jpg",
  bridges: "/watch-parts/bridges.jpg",
  balance: "/watch-parts/balance.jpg",
} as const;

export type WatchPartKey = keyof typeof watchParts;
