/* CaromChamps UI Kit — shared mock data (carom 3-cushion championship). */
window.CCData = {
  championship: {
    name: "Copa Nacional 3 Bandas 2026",
    venue: "Club Billar Bogotá",
    modality: "Carambola a 3 bandas",
    players: 64,
    groups: 8,
    phase: "Fase de grupos · Ronda 2",
    dates: "12 – 16 jun 2026",
  },
  kpis: [
    { label: "Campeonatos activos", value: "7", accent: "primary", icon: "trophy", delta: "+2", caption: "este mes" },
    { label: "Partidas capturadas", value: "184", accent: "success", icon: "clipboard-list", delta: "+46", caption: "vs. semana ant." },
    { label: "Planillas por revisar", value: "3", accent: "warning", icon: "scan-line", delta: "-2", deltaDirection: "down", caption: "IA / OCR" },
    { label: "Promedio general", value: "1.182", accent: "primary", icon: "target", delta: "+0.08", caption: "del torneo" },
  ],
  standings: [
    { id: 1, pos: 1, jugador: "Juan Pérez", club: "Club Bogotá", pj: 2, pg: 2, avg: "1.428", car: 40, estado: "success" },
    { id: 2, pos: 2, jugador: "Min-jun Kim", club: "Seoul BC", pj: 2, pg: 1, avg: "1.392", car: 38, estado: "active" },
    { id: 3, pos: 3, jugador: "Léa Dubois", club: "Paris Carom", pj: 1, pg: 1, avg: "1.205", car: 33, estado: "pending" },
    { id: 4, pos: 4, jugador: "Carlos Ruiz", club: "CDMX Billar", pj: 2, pg: 0, avg: "1.150", car: 31, estado: "warning" },
    { id: 5, pos: 5, jugador: "Tomás Vogel", club: "Wien Carom", pj: 1, pg: 0, avg: "0.980", car: 24, estado: "pending" },
    { id: 6, pos: 6, jugador: "Marc Janssen", club: "Antwerp BC", pj: 2, pg: 0, avg: "0.910", car: 22, estado: "pending" },
  ],
  matches: [
    { id: "m1", mesa: 1, grupo: "A", local: "Juan Pérez", visita: "Marc Janssen", car1: 40, car2: 22, ent: 28, estado: "success" },
    { id: "m2", mesa: 2, grupo: "A", local: "Min-jun Kim", visita: "Tomás Vogel", car1: 38, car2: 24, ent: 31, estado: "active" },
    { id: "m3", mesa: 3, grupo: "B", local: "Léa Dubois", visita: "Carlos Ruiz", car1: 33, car2: 31, ent: 30, estado: "warning" },
    { id: "m4", mesa: 4, grupo: "B", local: "Hans Müller", visita: "Pablo Gómez", car1: 0, car2: 0, ent: 0, estado: "pending" },
  ],
  registrations: [
    { id: "r1", jugador: "Juan Pérez", club: "Club Bogotá", pais: "Colombia", avg: "1.40", estado: "success" },
    { id: "r2", jugador: "Min-jun Kim", club: "Seoul BC", pais: "Corea", avg: "1.39", estado: "success" },
    { id: "r3", jugador: "Léa Dubois", club: "Paris Carom", pais: "Francia", avg: "1.21", estado: "active" },
    { id: "r4", jugador: "Carlos Ruiz", club: "CDMX Billar", pais: "México", avg: "1.15", estado: "warning" },
    { id: "r5", jugador: "Tomás Vogel", club: "Wien Carom", pais: "Austria", avg: "0.98", estado: "pending" },
  ],
  bracket: {
    qf: [
      ["Juan Pérez", "M. Janssen"], ["Min-jun Kim", "T. Vogel"],
      ["Léa Dubois", "C. Ruiz"], ["H. Müller", "P. Gómez"],
    ],
    sf: [["Juan Pérez", "Min-jun Kim"], ["Léa Dubois", "H. Müller"]],
    final: [["Juan Pérez", "Léa Dubois"]],
    champion: "Juan Pérez",
  },
};
