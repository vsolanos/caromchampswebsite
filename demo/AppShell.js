const DS = window.CaromChampsDesignSystem_c6f88d;
const Icon = window.CCIcon;
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
  { id: "inscripciones", label: "Inscripciones", icon: "user-plus" },
  { id: "grupos", label: "Grupos", icon: "users" },
  { id: "partidas", label: "Partidas", icon: "clipboard-list" },
  { id: "planillas", label: "Planillas IA", icon: "scan-line" },
  { id: "llaves", label: "Llaves", icon: "git-merge" },
  { id: "reportes", label: "Reportes", icon: "file-text" },
  { id: "cierre", label: "Cierre", icon: "flag" }
];
function TopNav({ active, onNavigate }) {
  return /* @__PURE__ */ React.createElement("header", { style: shellStyles.topnav }, /* @__PURE__ */ React.createElement("div", { style: shellStyles.brand }, /* @__PURE__ */ React.createElement("img", { src: "./assets/logo-full.png", alt: "CaromChamps", style: { height: 40, width: "auto", display: "block" } })), /* @__PURE__ */ React.createElement("nav", { style: shellStyles.navRow }, NAV_ITEMS.map((n) => {
    const on = n.id === active;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: n.id,
        type: "button",
        onClick: () => onNavigate(n.id),
        style: { ...shellStyles.navItem, ...on ? shellStyles.navItemOn : {} }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: n.icon, size: 17 }),
      /* @__PURE__ */ React.createElement("span", null, n.label)
    );
  })));
}
function TitleBar({ title }) {
  const { Avatar } = DS;
  const c = window.CCData.championship;
  return /* @__PURE__ */ React.createElement("div", { style: shellStyles.titlebar }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: shellStyles.crumb }, c.name), /* @__PURE__ */ React.createElement("h1", { style: shellStyles.h1 }, title)), /* @__PURE__ */ React.createElement("div", { style: shellStyles.topRight }, /* @__PURE__ */ React.createElement("div", { style: shellStyles.search }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 17, color: "var(--cc-text-muted)" }), /* @__PURE__ */ React.createElement("input", { placeholder: "Buscar jugador, club\u2026", style: shellStyles.searchInput })), /* @__PURE__ */ React.createElement("button", { style: shellStyles.iconBtn, title: "Notificaciones" }, /* @__PURE__ */ React.createElement(Icon, { name: "bell", size: 19 }), /* @__PURE__ */ React.createElement("span", { style: shellStyles.dot })), /* @__PURE__ */ React.createElement(Avatar, { name: "Admin CC", size: "sm", tone: "amarillo" })));
}
function Shell({ active, onNavigate, title, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: shellStyles.root }, /* @__PURE__ */ React.createElement(TopNav, { active, onNavigate }), /* @__PURE__ */ React.createElement(TitleBar, { title }), /* @__PURE__ */ React.createElement("div", { style: shellStyles.content }, children));
}
const shellStyles = {
  root: { display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--cc-surface-app)", fontFamily: "var(--cc-font-ui)" },
  topnav: { display: "flex", alignItems: "center", gap: 18, padding: "0 22px", height: 66, background: "var(--cc-surface-card)", borderBottom: "1px solid var(--cc-border)", position: "sticky", top: 0, zIndex: 10 },
  brand: { flex: "0 0 auto", display: "flex", alignItems: "center" },
  navRow: { flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 4, overflowX: "auto", paddingBottom: 2 },
  navItem: { display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 13px", borderRadius: "var(--cc-radius-pill)", border: "none", background: "transparent", color: "var(--cc-text-muted)", fontFamily: "var(--cc-font-ui)", fontSize: 13.5, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", transition: "all 180ms cubic-bezier(.22,.61,.36,1)" },
  navItemOn: { background: "var(--cc-blue-50)", color: "var(--cc-azul-mesa)", fontWeight: 700 },
  titlebar: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px 26px 0" },
  crumb: { fontSize: 11.5, color: "var(--cc-text-muted)", fontWeight: 500 },
  h1: { fontFamily: "var(--cc-font-display)", fontSize: 22, fontWeight: 700, color: "var(--cc-azul-profundo)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: 0 },
  topRight: { display: "flex", alignItems: "center", gap: 14 },
  search: { display: "flex", alignItems: "center", gap: 8, height: 40, padding: "0 14px", background: "var(--cc-surface-app)", border: "1px solid var(--cc-border)", borderRadius: "var(--cc-radius-pill)", width: 240 },
  searchInput: { border: "none", outline: "none", background: "transparent", fontFamily: "var(--cc-font-ui)", fontSize: 14, color: "var(--cc-text)", width: "100%" },
  iconBtn: { position: "relative", border: "none", background: "transparent", color: "var(--cc-text-muted)", cursor: "pointer", padding: 8, borderRadius: 10, display: "inline-flex" },
  dot: { position: "absolute", top: 7, right: 8, width: 7, height: 7, borderRadius: "50%", background: "var(--cc-rojo-carambola)", border: "1.5px solid var(--cc-surface-card)" },
  content: { padding: 26, flex: 1 }
};
window.CCShell = Shell;
