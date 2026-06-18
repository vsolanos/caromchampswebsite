/* Thin glue: mounts the real CaromChamps platform screens (from _ds_bundle.js)
   as an interactive, tabbed product demo for the landing page.
   Composes existing components only — no new product UI is authored here. */

const NAV = [
  ["dashboard", "Dashboard", "layout-dashboard"],
  ["inscripciones", "Inscripciones", "user-plus"],
  ["grupos", "Grupos", "users"],
  ["partidas", "Partidas", "clipboard-list"],
  ["planillas", "Planillas IA", "scan-line"],
  ["llaves", "Llaves", "git-merge"],
  ["reportes", "Reportes", "file-text"],
  ["cierre", "Cierre", "flag"],
];
const TITLES = {
  dashboard: "Dashboard",
  inscripciones: "Inscripción de jugadores",
  grupos: "Grupos y posiciones",
  partidas: "Partidas",
  planillas: "Planillas IA",
  llaves: "Llaves eliminatorias",
  reportes: "Reportes institucionales",
  cierre: "Cierre del campeonato",
};

function PlatformDemo() {
  const have = () => !!(window.CCScreens && window.CCScreens.Dashboard && window.CCIcon);
  const [ready, setReady] = React.useState(have());
  const [active, setActive] = React.useState("dashboard");
  const [auto, setAuto] = React.useState(true);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => { if (have()) { setReady(true); clearInterval(t); } }, 40);
    return () => clearInterval(t);
  }, [ready]);

  // Auto-cycle through the modules so visitors see every menu deploy itself.
  React.useEffect(() => {
    if (!ready || !auto || paused) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => {
      setActive((cur) => {
        const ids = NAV.map((n) => n[0]);
        const i = ids.indexOf(cur);
        return ids[(i + 1) % ids.length];
      });
    }, 3200);
    return () => clearInterval(t);
  }, [ready, auto, paused]);

  const frame = {
    borderRadius: 18,
    overflow: "hidden",
    background: "var(--cc-surface-card)",
    border: "1px solid var(--cc-border)",
    boxShadow: "0 40px 90px rgba(5,8,25,.28), 0 8px 24px rgba(5,8,25,.12)",
  };
  const bar = {
    display: "flex", alignItems: "center", gap: 8,
    padding: "13px 18px", background: "var(--cc-azul-profundo)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
  };
  const dot = (c) => ({ width: 11, height: 11, borderRadius: "50%", background: c });
  const url = {
    marginLeft: 14, display: "flex", alignItems: "center", gap: 8,
    flex: 1, height: 30, padding: "0 14px", borderRadius: 999,
    background: "rgba(255,255,255,.07)", color: "#9FB0CE",
    fontFamily: "var(--cc-font-ui)", fontSize: 12.5, letterSpacing: ".01em",
  };

  if (!ready) {
    return React.createElement("div", { style: frame },
      React.createElement("div", { style: bar },
        React.createElement("span", { style: dot("#FF5F57") }),
        React.createElement("span", { style: dot("#FEBC2E") }),
        React.createElement("span", { style: dot("#28C840") }),
        React.createElement("div", { style: url }, "app.caromchamps.com")
      ),
      React.createElement("div", {
        style: { height: 620, display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--cc-text-muted)", fontFamily: "var(--cc-font-ui)", fontSize: 14, background: "var(--cc-surface-app)" }
      }, "Cargando plataforma…")
    );
  }

  const S = window.CCScreens;
  const Icon = window.CCIcon;
  const map = {
    dashboard: S.Dashboard, inscripciones: S.Inscripciones, grupos: S.Grupos,
    partidas: S.Partidas, planillas: S.PlanillasIA, llaves: S.Llaves,
    reportes: S.Reportes, cierre: S.Cierre,
  };
  const Screen = map[active] || S.Dashboard;

  const tabStrip = {
    display: "flex", gap: 4, padding: "10px 14px", overflowX: "auto",
    background: "var(--cc-surface-card)", borderBottom: "1px solid var(--cc-border)",
  };
  const tabBtn = (on) => ({
    display: "inline-flex", alignItems: "center", gap: 7, flex: "0 0 auto",
    height: 36, padding: "0 14px", borderRadius: 999, border: "none", cursor: "pointer",
    fontFamily: "var(--cc-font-ui)", fontSize: 13.5, fontWeight: 600,
    letterSpacing: "-.005em",
    background: on ? "var(--cc-primary)" : "transparent",
    color: on ? "#fff" : "var(--cc-text-muted)",
    boxShadow: on ? "var(--cc-shadow-brand)" : "none",
    transition: "background var(--cc-dur) var(--cc-ease), color var(--cc-dur) var(--cc-ease)",
    whiteSpace: "nowrap",
  });

  const autoPill = {
    display: "inline-flex", alignItems: "center", gap: 6, height: 26, padding: "0 11px",
    borderRadius: 999, border: "none", cursor: "pointer", flex: "0 0 auto",
    fontFamily: "var(--cc-font-ui)", fontSize: 11.5, fontWeight: 600,
    background: auto ? "rgba(245,193,22,.16)" : "rgba(255,255,255,.08)",
    color: auto ? "#F5C116" : "#9FB0CE",
  };

  return React.createElement("div", {
    style: frame,
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  },
    React.createElement("div", { style: bar },
      React.createElement("span", { style: dot("#FF5F57") }),
      React.createElement("span", { style: dot("#FEBC2E") }),
      React.createElement("span", { style: dot("#28C840") }),
      React.createElement("div", { style: url },
        React.createElement(Icon, { name: "lock", size: 13 }),
        "app.caromchamps.com / " + active
      ),
      React.createElement("button", {
        style: autoPill,
        title: auto ? "Recorrido automático activo" : "Recorrido automático en pausa",
        onClick: () => setAuto((a) => !a),
      },
        React.createElement("span", { style: { width: 7, height: 7, borderRadius: "50%", background: auto ? "#F5C116" : "#64748B", animation: auto ? "cc-pulse 1.6s ease-in-out infinite" : "none" } }),
        auto ? "Auto" : "Pausa"
      )
    ),
    React.createElement("div", { style: tabStrip },
      React.createElement("img", {
        src: "assets/logo-full.png", alt: "CaromChamps",
        style: { height: 38, width: "auto", flex: "0 0 auto", marginLeft: 4, marginRight: 8, alignSelf: "center" },
      }),
      React.createElement("span", {
        style: { width: 1, alignSelf: "stretch", margin: "4px 8px 4px 2px", background: "var(--cc-border)", flex: "0 0 auto" },
      }),
      NAV.map(([id, label, ic]) =>
        React.createElement("button", {
          key: id, style: tabBtn(active === id),
          onMouseEnter: (e) => { if (active !== id) e.currentTarget.style.background = "var(--cc-blue-50)"; },
          onMouseLeave: (e) => { if (active !== id) e.currentTarget.style.background = "transparent"; },
          onClick: () => { setActive(id); setAuto(false); },
        },
          React.createElement(Icon, { name: ic, size: 16 }),
          label
        )
      )
    ),
    React.createElement("div", {
      style: { height: 600, overflow: "auto", background: "var(--cc-surface-app)", padding: "24px 26px" },
    },
      React.createElement("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, marginBottom: 18 },
      },
        React.createElement("div", {
          style: { fontFamily: "var(--cc-font-display)", fontSize: 22, fontWeight: 700,
            color: "var(--cc-azul-profundo)", letterSpacing: "-.02em" },
        }, TITLES[active]),
        (active === "dashboard" || active === "inscripciones" || active === "llaves")
          ? React.createElement("img", {
              src: "assets/logo-full.png", alt: "CaromChamps",
              style: { height: 61, width: "auto", flex: "0 0 auto", opacity: .96 },
            })
          : null
      ),
      React.createElement(Screen)
    )
  );
}

module.exports = { PlatformDemo };
