(function() {
  const DS = window.CaromChampsDesignSystem_c6f88d;
  const Icon = window.CCIcon;
  const D = window.CCData;
  const { Card, KpiCard, DataTable, StatusBadge, Tag, Button, IconButton, Input, Select, Tabs, Avatar } = DS;
  const SectionTitle = ({ children, sub }) => /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--cc-font-display)", fontSize: 18, fontWeight: 700, color: "var(--cc-azul-profundo)", letterSpacing: "-0.01em" } }, children), sub ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--cc-text-muted)", marginTop: 2 } }, sub) : null);
  function Dashboard() {
    const c = D.championship;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 } }, D.kpis.map((k, i) => /* @__PURE__ */ React.createElement(
      KpiCard,
      {
        key: i,
        label: k.label,
        value: k.value,
        accent: k.accent,
        delta: k.delta,
        deltaDirection: k.deltaDirection,
        caption: k.caption,
        icon: /* @__PURE__ */ React.createElement(Icon, { name: k.icon })
      }
    ))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16 } }, /* @__PURE__ */ React.createElement(
      Card,
      {
        title: "Partidas recientes",
        subtitle: "\xDAltimos resultados capturados",
        actions: /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", rightIcon: /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 16 }) }, "Ver todas")
      },
      /* @__PURE__ */ React.createElement(
        DataTable,
        {
          columns: [
            { key: "mesa", header: "Mesa", width: "62px", render: (v) => /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600 } }, "M", v) },
            { key: "grupo", header: "Grupo", width: "70px", render: (v) => /* @__PURE__ */ React.createElement(Tag, null, v) },
            { key: "match", header: "Partida", strong: true, render: (_, r) => `${r.local} vs ${r.visita}` },
            { key: "score", header: "Carambolas", align: "right", render: (_, r) => `${r.car1} \u2013 ${r.car2}` },
            { key: "estado", header: "Estado", render: (v) => /* @__PURE__ */ React.createElement(StatusBadge, { status: v, dot: false }) }
          ],
          rows: D.matches
        }
      )
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement(Card, { variant: "dark", title: "Copa Nacional 3 Bandas", subtitle: c.phase }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 4 } }, [["Jugadores", c.players], ["Grupos", c.groups], ["Sede", c.venue], ["Fechas", c.dates]].map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--cc-gris-tecnico)" } }, k), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--cc-blanco-marfil)", marginTop: 2 } }, v)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", block: true, leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "trending-up", size: 16 }) }, "Ver progreso"))), /* @__PURE__ */ React.createElement(Card, { title: "Checklist de fase" }, [["Inscripciones cerradas", true], ["Grupos sorteados", true], ["Ronda 2 en curso", false], ["Llaves generadas", false]].map(([t, done], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 10, padding: "7px 0", fontSize: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", color: done ? "var(--cc-verde-exito)" : "var(--cc-gris-tecnico)" } }, /* @__PURE__ */ React.createElement(Icon, { name: done ? "circle-check" : "circle-dot", size: 18 })), /* @__PURE__ */ React.createElement("span", { style: { color: done ? "var(--cc-text)" : "var(--cc-text-muted)" } }, t)))))));
  }
  function Inscripciones() {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "360px 1fr", gap: 16, alignItems: "start" } }, /* @__PURE__ */ React.createElement(Card, { title: "Inscribir jugador", subtitle: "Registro en l\xEDnea" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement(Input, { label: "Nombre del jugador", placeholder: "Ej. Juan P\xE9rez", required: true, leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "user-plus", size: 18 }) }), /* @__PURE__ */ React.createElement(Input, { label: "Club / Sala", placeholder: "Ej. Club Bogot\xE1", leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "building-2", size: 18 }) }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement(Select, { label: "Pa\xEDs", placeholder: "Pa\xEDs", options: ["Colombia", "M\xE9xico", "Espa\xF1a", "Francia", "Corea"] }), /* @__PURE__ */ React.createElement(Input, { label: "Promedio (AVG)", placeholder: "1.20" })), /* @__PURE__ */ React.createElement(Input, { label: "Email", placeholder: "jugador@correo.com", leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "mail", size: 18 }) }), /* @__PURE__ */ React.createElement(Button, { variant: "primary", block: true, leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16 }) }, "Enviar inscripci\xF3n"))), /* @__PURE__ */ React.createElement(
      Card,
      {
        title: "Inscripciones recibidas",
        subtitle: "64 jugadores \xB7 8 pa\xEDses",
        actions: /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "sm", leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 16 }) }, "Exportar")
      },
      /* @__PURE__ */ React.createElement(
        DataTable,
        {
          columns: [
            { key: "jugador", header: "Jugador", strong: true, render: (v) => /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Avatar, { name: v, size: "sm" }), v) },
            { key: "club", header: "Club" },
            { key: "pais", header: "Pa\xEDs" },
            { key: "avg", header: "AVG", align: "right" },
            { key: "estado", header: "Validaci\xF3n", render: (v) => /* @__PURE__ */ React.createElement(StatusBadge, { status: v, dot: false }) }
          ],
          rows: D.registrations
        }
      )
    ));
  }
  function Grupos() {
    const [tab, setTab] = React.useState("posiciones");
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement(Tabs, { activeId: tab, onSelect: setTab, tabs: [
      { id: "posiciones", label: "Posiciones", badge: 6 },
      { id: "grupos", label: "Grupos", badge: 8 },
      { id: "calendario", label: "Calendario" }
    ] })), tab === "posiciones" && /* @__PURE__ */ React.createElement(
      Card,
      {
        title: "Grupo A \u2014 Tabla de posiciones",
        subtitle: "Ronda 2 de 3",
        actions: /* @__PURE__ */ React.createElement(StatusBadge, { status: "active" })
      },
      /* @__PURE__ */ React.createElement(
        DataTable,
        {
          columns: [
            { key: "pos", header: "#", width: "46px", render: (v) => /* @__PURE__ */ React.createElement("span", { className: "cc-table__rank" }, v) },
            { key: "jugador", header: "Jugador", strong: true, render: (v) => /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Avatar, { name: v, size: "sm" }), v) },
            { key: "club", header: "Club" },
            { key: "pj", header: "PJ", align: "right" },
            { key: "pg", header: "PG", align: "right" },
            { key: "car", header: "Caramb.", align: "right" },
            { key: "avg", header: "AVG", align: "right", strong: true },
            { key: "estado", header: "Estado", render: (v) => /* @__PURE__ */ React.createElement(StatusBadge, { status: v, dot: false }) }
          ],
          rows: D.standings
        }
      )
    ), tab === "grupos" && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 } }, ["A", "B", "C", "D", "E", "F", "G", "H"].map((g) => /* @__PURE__ */ React.createElement(Card, { key: g, variant: "celeste", title: `Grupo ${g}`, subtitle: "8 jugadores" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, fontSize: 13.5 } }, D.standings.slice(0, 4).map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--cc-text-muted)" } }, i + 1, ". ", p.jugador.split(" ")[0]), /* @__PURE__ */ React.createElement("span", { style: { fontVariantNumeric: "tabular-nums", fontWeight: 600 } }, p.avg))))))), tab === "calendario" && /* @__PURE__ */ React.createElement(Card, { title: "Calendario \xB7 Ronda 2" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, D.matches.map((m) => /* @__PURE__ */ React.createElement("div", { key: m.id, style: { display: "flex", alignItems: "center", gap: 14, padding: "10px 12px", border: "1px solid var(--cc-border)", borderRadius: "var(--cc-radius-md)", background: "var(--cc-surface-card)" } }, /* @__PURE__ */ React.createElement(Tag, { variant: "brand" }, "Mesa ", m.mesa), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, fontSize: 14 } }, m.local), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--cc-text-muted)", fontSize: 13 } }, "vs"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, fontSize: 14 } }, m.visita), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ React.createElement(StatusBadge, { status: m.estado })))))));
  }
  function Partidas() {
    const [car1, setCar1] = React.useState(40);
    const [car2, setCar2] = React.useState(22);
    return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 380px", gap: 16, alignItems: "start" } }, /* @__PURE__ */ React.createElement(
      Card,
      {
        title: "Partidas \u2014 Grupo A",
        subtitle: "Ingreso de informaci\xF3n de partidas",
        actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 16 }) }, "Nueva partida")
      },
      /* @__PURE__ */ React.createElement(
        DataTable,
        {
          columns: [
            { key: "mesa", header: "Mesa", width: "62px", render: (v) => /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600 } }, "M", v) },
            { key: "local", header: "Local", strong: true },
            { key: "car1", header: "Car.", align: "right" },
            { key: "car2", header: "Car.", align: "right" },
            { key: "visita", header: "Visitante", strong: true },
            { key: "ent", header: "Entradas", align: "right" },
            { key: "estado", header: "Estado", render: (v) => /* @__PURE__ */ React.createElement(StatusBadge, { status: v, dot: false }) },
            { key: "acc", header: "", width: "44px", render: () => /* @__PURE__ */ React.createElement(IconButton, { size: "sm", label: "Editar" }, /* @__PURE__ */ React.createElement(Icon, { name: "pencil", size: 16 })) }
          ],
          rows: D.matches
        }
      )
    ), /* @__PURE__ */ React.createElement(Card, { title: "Capturar resultado", subtitle: "Mesa 1 \xB7 Grupo A" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "end" } }, /* @__PURE__ */ React.createElement(Input, { label: "Juan P\xE9rez", defaultValue: car1, onChange: (e) => setCar1(e.target.value) }), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, fontSize: 20, color: "var(--cc-text-muted)", paddingBottom: 10 } }, ":"), /* @__PURE__ */ React.createElement(Input, { label: "M. Janssen", defaultValue: car2, onChange: (e) => setCar2(e.target.value) })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement(Input, { label: "Entradas", defaultValue: "28" }), /* @__PURE__ */ React.createElement(Input, { label: "Mayor serie", defaultValue: "6" })), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 14px", background: "var(--cc-blue-50)", borderRadius: "var(--cc-radius-md)", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--cc-text-muted)" } }, "Promedio calculado"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--cc-font-data)", fontWeight: 700, fontSize: 20, color: "var(--cc-azul-mesa)", fontVariantNumeric: "tabular-nums" } }, (car1 / 28).toFixed(3))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(Button, { variant: "success", block: true, leftIcon: /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16 }) }, "Finalizar"), /* @__PURE__ */ React.createElement(Button, { variant: "secondary" }, "Guardar")))));
  }
  window.CCScreens = Object.assign(window.CCScreens || {}, { Dashboard, Inscripciones, Grupos, Partidas, SectionTitle });
})();
