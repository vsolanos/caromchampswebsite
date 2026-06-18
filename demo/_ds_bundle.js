/* @ds-bundle: {"format":3,"namespace":"CaromChampsDesignSystem_c6f88d","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data/Avatar.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"StepNav","sourcePath":"components/navigation/StepNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"KpiCard","sourcePath":"components/surfaces/KpiCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"892e2b390de0","components/actions/IconButton.jsx":"448949eb96f0","components/data/Avatar.jsx":"05f13611b13c","components/data/DataTable.jsx":"2857af4b8e1a","components/feedback/StatusBadge.jsx":"5810811e7dda","components/feedback/Tag.jsx":"881adf81110e","components/forms/Input.jsx":"662a993aa758","components/forms/Select.jsx":"c2edf5a37677","components/navigation/StepNav.jsx":"04a39cfe60ed","components/navigation/Tabs.jsx":"958c091fcc1a","components/surfaces/Card.jsx":"b6d7689f735d","components/surfaces/KpiCard.jsx":"b05d3f76ee60","ui_kits/plataforma/AppShell.jsx":"fa9467cda90e","ui_kits/plataforma/data.js":"4b73bbe8ba61","ui_kits/plataforma/icons.jsx":"57b270659339","ui_kits/plataforma/screens-core.jsx":"c00df1f43174","ui_kits/plataforma/screens-more.jsx":"c46f7e4268f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CaromChampsDesignSystem_c6f88d = window.CaromChampsDesignSystem_c6f88d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CaromChamps · Button — injected styles (once) */
const CC_BUTTON_CSS = `
.cc-btn{
  --_h: var(--cc-control-height);
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  height:var(--_h); padding:0 18px; border:none; border-radius:var(--cc-radius-md);
  font-family:var(--cc-font-ui); font-size:14.5px; font-weight:600; line-height:1;
  letter-spacing:-0.005em; cursor:pointer; white-space:nowrap; text-decoration:none;
  transition:background var(--cc-dur) var(--cc-ease), box-shadow var(--cc-dur) var(--cc-ease),
             transform var(--cc-dur-fast) var(--cc-ease), color var(--cc-dur) var(--cc-ease);
}
.cc-btn:focus-visible{ outline:none; box-shadow:var(--cc-shadow-focus); }
.cc-btn:active{ transform:translateY(1px); }
.cc-btn[disabled]{ opacity:.5; cursor:not-allowed; transform:none; }
.cc-btn--sm{ --_h:var(--cc-control-height-sm); padding:0 14px; font-size:13px; }
.cc-btn--lg{ --_h:var(--cc-control-height-lg); padding:0 24px; font-size:16px; }
.cc-btn--block{ width:100%; }
.cc-btn__icon{ display:inline-flex; }
.cc-btn__icon svg{ width:18px; height:18px; }

.cc-btn--primary{ background:var(--cc-primary); color:var(--cc-on-primary); box-shadow:var(--cc-shadow-xs); }
.cc-btn--primary:hover:not([disabled]){ background:var(--cc-primary-hover); box-shadow:var(--cc-shadow-brand); }
.cc-btn--primary:active:not([disabled]){ background:var(--cc-primary-active); }

.cc-btn--secondary{ background:var(--cc-surface-card); color:var(--cc-primary); box-shadow:inset 0 0 0 1.5px var(--cc-blue-200); }
.cc-btn--secondary:hover:not([disabled]){ background:var(--cc-blue-50); box-shadow:inset 0 0 0 1.5px var(--cc-blue-300); }

.cc-btn--ghost{ background:transparent; color:var(--cc-primary); }
.cc-btn--ghost:hover:not([disabled]){ background:var(--cc-blue-50); }

.cc-btn--neutral{ background:var(--cc-gray-100); color:var(--cc-text); }
.cc-btn--neutral:hover:not([disabled]){ background:var(--cc-gray-200); }

.cc-btn--success{ background:var(--cc-verde-exito); color:#fff; }
.cc-btn--success:hover:not([disabled]){ background:#11652f; }

.cc-btn--danger{ background:var(--cc-rojo-carambola); color:#fff; }
.cc-btn--danger:hover:not([disabled]){ background:#a90c18; }

.cc-btn--warning{ background:var(--cc-naranja-accion); color:#fff; }
.cc-btn--warning:hover:not([disabled]){ background:#a44d00; }
`;
let _ccBtnInjected = false;
function ensureBtnCSS() {
  if (_ccBtnInjected || typeof document === "undefined") return;
  _ccBtnInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "button");
  el.textContent = CC_BUTTON_CSS;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  leftIcon = null,
  rightIcon = null,
  type = "button",
  className = "",
  ...rest
}) {
  ensureBtnCSS();
  const cls = ["cc-btn", `cc-btn--${variant}`, size !== "md" ? `cc-btn--${size}` : "", block ? "cc-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), leftIcon ? /*#__PURE__*/React.createElement("span", {
    className: "cc-btn__icon"
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    className: "cc-btn__icon"
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_ICONBTN_CSS = `
.cc-iconbtn{
  --_s: 44px;
  display:inline-flex; align-items:center; justify-content:center;
  width:var(--_s); height:var(--_s); border:none; border-radius:var(--cc-radius-md);
  cursor:pointer; color:var(--cc-text-muted); background:transparent;
  transition:background var(--cc-dur) var(--cc-ease), color var(--cc-dur) var(--cc-ease),
             box-shadow var(--cc-dur) var(--cc-ease);
}
.cc-iconbtn svg{ width:20px; height:20px; }
.cc-iconbtn:hover:not([disabled]){ background:var(--cc-gray-100); color:var(--cc-text); }
.cc-iconbtn:focus-visible{ outline:none; box-shadow:var(--cc-shadow-focus); }
.cc-iconbtn[disabled]{ opacity:.45; cursor:not-allowed; }
.cc-iconbtn--sm{ --_s:36px; } .cc-iconbtn--sm svg{ width:18px; height:18px; }
.cc-iconbtn--lg{ --_s:52px; } .cc-iconbtn--lg svg{ width:22px; height:22px; }
.cc-iconbtn--solid{ background:var(--cc-primary); color:var(--cc-on-primary); box-shadow:var(--cc-shadow-xs); }
.cc-iconbtn--solid:hover:not([disabled]){ background:var(--cc-primary-hover); color:#fff; }
.cc-iconbtn--outline{ box-shadow:inset 0 0 0 1px var(--cc-border); }
.cc-iconbtn--outline:hover:not([disabled]){ box-shadow:inset 0 0 0 1px var(--cc-border-strong); }
`;
let _ccIconBtnInjected = false;
function ensureIconBtnCSS() {
  if (_ccIconBtnInjected || typeof document === "undefined") return;
  _ccIconBtnInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "iconbutton");
  el.textContent = CC_ICONBTN_CSS;
  document.head.appendChild(el);
}
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  label,
  className = "",
  ...rest
}) {
  ensureIconBtnCSS();
  const cls = ["cc-iconbtn", variant !== "ghost" ? `cc-iconbtn--${variant}` : "", size !== "md" ? `cc-iconbtn--${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_AVATAR_CSS = `
.cc-avatar{
  --_s:40px;
  display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto;
  width:var(--_s); height:var(--_s); border-radius:50%; overflow:hidden;
  background:var(--cc-blue-100); color:var(--cc-blue-800);
  font-family:var(--cc-font-ui); font-weight:700; font-size:calc(var(--_s) * 0.38);
  letter-spacing:-0.01em; user-select:none; box-shadow:inset 0 0 0 1px rgba(5,8,25,.06);
}
.cc-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.cc-avatar--xs{ --_s:24px; } .cc-avatar--sm{ --_s:32px; }
.cc-avatar--lg{ --_s:52px; } .cc-avatar--xl{ --_s:72px; }
.cc-avatar--ring{ box-shadow:0 0 0 2px var(--cc-surface-card), 0 0 0 4px var(--cc-azul-mesa); }
.cc-avatar--marfil{ background:var(--cc-blanco-marfil); color:var(--cc-text); }
.cc-avatar--amarillo{ background:#FCEFC0; color:#7A5C00; }
.cc-avatar--rojo{ background:#F7D2D5; color:#8E0A14; }
.cc-avatar-group{ display:inline-flex; }
.cc-avatar-group > .cc-avatar{ box-shadow:0 0 0 2px var(--cc-surface-card); margin-left:-10px; }
.cc-avatar-group > .cc-avatar:first-child{ margin-left:0; }
`;
let _ccAvatarInjected = false;
function ensureAvatarCSS() {
  if (_ccAvatarInjected || typeof document === "undefined") return;
  _ccAvatarInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "avatar");
  el.textContent = CC_AVATAR_CSS;
  document.head.appendChild(el);
}
function initialsFrom(name) {
  if (!name) return "?";
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}
function Avatar({
  name,
  src,
  size = "md",
  tone = "blue",
  ring = false,
  className = "",
  ...rest
}) {
  ensureAvatarCSS();
  const cls = ["cc-avatar", size !== "md" ? `cc-avatar--${size}` : "", tone !== "blue" ? `cc-avatar--${tone}` : "", ring ? "cc-avatar--ring" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || ""
  }) : initialsFrom(name));
}
function AvatarGroup({
  children,
  className = "",
  ...rest
}) {
  ensureAvatarCSS();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cc-avatar-group", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_TABLE_CSS = `
.cc-table-wrap{ width:100%; overflow:auto; border:1px solid var(--cc-border); border-radius:var(--cc-radius-lg); background:var(--cc-surface-card); }
.cc-table{ width:100%; border-collapse:collapse; font-family:var(--cc-font-ui); font-size:14px; }
.cc-table thead th{
  position:sticky; top:0; background:var(--cc-surface-table-head);
  text-align:left; font-size:11.5px; font-weight:700; letter-spacing:.04em; text-transform:uppercase;
  color:var(--cc-text-muted); padding:11px var(--cc-pad-cell-x); white-space:nowrap;
  border-bottom:1px solid var(--cc-border);
}
.cc-table tbody td{
  padding:var(--cc-pad-cell) var(--cc-pad-cell-x); color:var(--cc-text);
  border-bottom:1px solid var(--cc-border); vertical-align:middle;
}
.cc-table tbody tr:last-child td{ border-bottom:none; }
.cc-table--striped tbody tr:nth-child(even){ background:var(--cc-surface-row-alt); }
.cc-table--hover tbody tr:hover{ background:var(--cc-blue-50); }
.cc-table td.cc-num, .cc-table th.cc-num{ text-align:right; font-variant-numeric:tabular-nums lining-nums; }
.cc-table td.cc-strong{ font-weight:700; color:var(--cc-text); }
.cc-table__rank{ font-family:var(--cc-font-data); font-weight:700; color:var(--cc-azul-mesa); font-variant-numeric:tabular-nums; }
`;
let _ccTableInjected = false;
function ensureTableCSS() {
  if (_ccTableInjected || typeof document === "undefined") return;
  _ccTableInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "table");
  el.textContent = CC_TABLE_CSS;
  document.head.appendChild(el);
}
function DataTable({
  columns = [],
  rows = [],
  striped = true,
  hover = true,
  className = "",
  ...rest
}) {
  ensureTableCSS();
  const cls = ["cc-table", striped ? "cc-table--striped" : "", hover ? "cc-table--hover" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cc-table-wrap", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("table", {
    className: cls
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.align === "right" ? "cc-num" : "",
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id != null ? row.id : i
  }, columns.map(c => {
    const tdCls = [c.align === "right" ? "cc-num" : "", c.strong ? "cc-strong" : ""].filter(Boolean).join(" ");
    return /*#__PURE__*/React.createElement("td", {
      key: c.key,
      className: tdCls
    }, c.render ? c.render(row[c.key], row) : row[c.key]);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_BADGE_CSS = `
.cc-badge{
  display:inline-flex; align-items:center; gap:6px; font-family:var(--cc-font-ui);
  font-size:12.5px; font-weight:600; line-height:1; padding:5px 11px;
  border-radius:var(--cc-radius-pill); white-space:nowrap;
}
.cc-badge__dot{ width:7px; height:7px; border-radius:50%; flex:0 0 auto; }
.cc-badge--square{ border-radius:var(--cc-radius-sm); }
.cc-badge--lg{ font-size:13px; padding:7px 13px; }

.cc-badge--active{ background:var(--cc-state-active-bg); color:var(--cc-state-active); }
.cc-badge--active .cc-badge__dot{ background:var(--cc-state-active); }
.cc-badge--success{ background:var(--cc-state-success-bg); color:var(--cc-state-success); }
.cc-badge--success .cc-badge__dot{ background:var(--cc-state-success); }
.cc-badge--warning{ background:var(--cc-state-warning-bg); color:var(--cc-state-warning); }
.cc-badge--warning .cc-badge__dot{ background:var(--cc-state-warning-solid); }
.cc-badge--action{ background:var(--cc-state-action-bg); color:var(--cc-state-action); }
.cc-badge--action .cc-badge__dot{ background:var(--cc-state-action); }
.cc-badge--pending{ background:var(--cc-state-pending-bg); color:var(--cc-state-pending-text); }
.cc-badge--pending .cc-badge__dot{ background:var(--cc-state-pending); }
.cc-badge--danger{ background:var(--cc-state-danger-bg); color:var(--cc-state-danger); }
.cc-badge--danger .cc-badge__dot{ background:var(--cc-state-danger); }
.cc-badge--neutral{ background:var(--cc-gray-100); color:var(--cc-text-muted); }
.cc-badge--neutral .cc-badge__dot{ background:var(--cc-gray-500); }
`;
let _ccBadgeInjected = false;
function ensureBadgeCSS() {
  if (_ccBadgeInjected || typeof document === "undefined") return;
  _ccBadgeInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "badge");
  el.textContent = CC_BADGE_CSS;
  document.head.appendChild(el);
}

/* Official state → tone + default Spanish label (Libro de Marca §10) */
const STATE_MAP = {
  active: {
    tone: "active",
    label: "En curso"
  },
  success: {
    tone: "success",
    label: "Finalizada"
  },
  warning: {
    tone: "warning",
    label: "Requiere revisión"
  },
  action: {
    tone: "action",
    label: "Reabrir"
  },
  pending: {
    tone: "pending",
    label: "Pendiente"
  },
  danger: {
    tone: "danger",
    label: "Corregir"
  },
  neutral: {
    tone: "neutral",
    label: ""
  }
};
function StatusBadge({
  status,
  tone,
  children,
  dot = true,
  square = false,
  size = "md",
  className = "",
  ...rest
}) {
  ensureBadgeCSS();
  const preset = status ? STATE_MAP[status] : null;
  const finalTone = tone || (preset ? preset.tone : "neutral");
  const label = children != null ? children : preset ? preset.label : "";
  const cls = ["cc-badge", `cc-badge--${finalTone}`, square ? "cc-badge--square" : "", size === "lg" ? "cc-badge--lg" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "cc-badge__dot"
  }) : null, label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_TAG_CSS = `
.cc-tag{
  display:inline-flex; align-items:center; gap:6px; font-family:var(--cc-font-ui);
  font-size:12.5px; font-weight:500; line-height:1; padding:5px 10px;
  border-radius:var(--cc-radius-sm); background:var(--cc-gray-100); color:var(--cc-text);
  box-shadow:inset 0 0 0 1px var(--cc-border);
}
.cc-tag--brand{ background:var(--cc-blue-50); color:var(--cc-primary); box-shadow:inset 0 0 0 1px var(--cc-blue-200); }
.cc-tag--marfil{ background:var(--cc-blanco-marfil); color:var(--cc-text); box-shadow:inset 0 0 0 1px #E6E7DA; }
.cc-tag__close{
  display:inline-flex; cursor:pointer; opacity:.6; margin-left:1px;
  transition:opacity var(--cc-dur) var(--cc-ease);
}
.cc-tag__close:hover{ opacity:1; }
.cc-tag__close svg{ width:13px; height:13px; }
`;
let _ccTagInjected = false;
function ensureTagCSS() {
  if (_ccTagInjected || typeof document === "undefined") return;
  _ccTagInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "tag");
  el.textContent = CC_TAG_CSS;
  document.head.appendChild(el);
}
const X = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
function Tag({
  children,
  variant = "default",
  icon = null,
  onRemove,
  className = "",
  ...rest
}) {
  ensureTagCSS();
  const cls = ["cc-tag", variant !== "default" ? `cc-tag--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    className: "cc-tag__close",
    onClick: onRemove,
    role: "button",
    "aria-label": "Quitar"
  }, /*#__PURE__*/React.createElement(X, null)) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_INPUT_CSS = `
.cc-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--cc-font-ui); }
.cc-field__label{ font-size:13px; font-weight:600; color:var(--cc-text); }
.cc-field__label .req{ color:var(--cc-rojo-carambola); margin-left:2px; }
.cc-input{
  display:flex; align-items:center; gap:8px; height:var(--cc-control-height);
  padding:0 14px; background:var(--cc-surface-card); border-radius:var(--cc-radius-md);
  box-shadow:inset 0 0 0 1.5px var(--cc-border-strong);
  transition:box-shadow var(--cc-dur) var(--cc-ease), background var(--cc-dur) var(--cc-ease);
}
.cc-input:hover{ box-shadow:inset 0 0 0 1.5px var(--cc-gray-400); }
.cc-input:focus-within{ box-shadow:inset 0 0 0 1.5px var(--cc-azul-mesa), var(--cc-shadow-focus); background:#fff; }
.cc-input input, .cc-input textarea{
  flex:1; border:none; outline:none; background:transparent; min-width:0;
  font-family:var(--cc-font-ui); font-size:15px; color:var(--cc-text);
}
.cc-input input::placeholder, .cc-input textarea::placeholder{ color:var(--cc-gray-500); }
.cc-input__icon{ display:inline-flex; color:var(--cc-text-muted); }
.cc-input__icon svg{ width:18px; height:18px; }
.cc-input--sm{ height:var(--cc-control-height-sm); padding:0 12px; }
.cc-input--sm input{ font-size:14px; }
.cc-field--error .cc-input{ box-shadow:inset 0 0 0 1.5px var(--cc-rojo-carambola); }
.cc-field--error .cc-input:focus-within{ box-shadow:inset 0 0 0 1.5px var(--cc-rojo-carambola), 0 0 0 3px var(--cc-danger-bg, rgba(200,15,29,.18)); }
.cc-field__hint{ font-size:12px; color:var(--cc-text-muted); }
.cc-field--error .cc-field__hint{ color:var(--cc-rojo-carambola); }
.cc-input[data-disabled="true"]{ background:var(--cc-gray-100); box-shadow:inset 0 0 0 1.5px var(--cc-border); }
`;
let _ccInputInjected = false;
function ensureInputCSS() {
  if (_ccInputInjected || typeof document === "undefined") return;
  _ccInputInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "input");
  el.textContent = CC_INPUT_CSS;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  required = false,
  size = "md",
  leftIcon = null,
  rightIcon = null,
  id,
  className = "",
  disabled = false,
  ...rest
}) {
  ensureInputCSS();
  const fieldId = id || (label ? `cc-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const wrapCls = ["cc-field", error ? "cc-field--error" : "", className].filter(Boolean).join(" ");
  const boxCls = ["cc-input", size === "sm" ? "cc-input--sm" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "cc-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: boxCls,
    "data-disabled": disabled
  }, leftIcon ? /*#__PURE__*/React.createElement("span", {
    className: "cc-input__icon"
  }, leftIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled
  }, rest)), rightIcon ? /*#__PURE__*/React.createElement("span", {
    className: "cc-input__icon"
  }, rightIcon) : null), hint || error ? /*#__PURE__*/React.createElement("div", {
    className: "cc-field__hint"
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_SELECT_CSS = `
.cc-select{ position:relative; display:flex; align-items:center; }
.cc-select select{
  appearance:none; -webkit-appearance:none; width:100%;
  height:var(--cc-control-height); padding:0 40px 0 14px;
  font-family:var(--cc-font-ui); font-size:15px; color:var(--cc-text);
  background:var(--cc-surface-card); border:none; border-radius:var(--cc-radius-md);
  box-shadow:inset 0 0 0 1.5px var(--cc-border-strong); cursor:pointer;
  transition:box-shadow var(--cc-dur) var(--cc-ease);
}
.cc-select select:hover{ box-shadow:inset 0 0 0 1.5px var(--cc-gray-400); }
.cc-select select:focus{ outline:none; box-shadow:inset 0 0 0 1.5px var(--cc-azul-mesa), var(--cc-shadow-focus); }
.cc-select select:disabled{ background:var(--cc-gray-100); color:var(--cc-text-muted); cursor:not-allowed; }
.cc-select__chev{
  position:absolute; right:14px; pointer-events:none; color:var(--cc-text-muted);
  display:inline-flex;
}
.cc-select__chev svg{ width:18px; height:18px; }
.cc-select--sm select{ height:var(--cc-control-height-sm); font-size:14px; }
`;
let _ccSelectInjected = false;
function ensureSelectCSS() {
  if (_ccSelectInjected || typeof document === "undefined") return;
  _ccSelectInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "select");
  el.textContent = CC_SELECT_CSS;
  document.head.appendChild(el);
}
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
function Select({
  options = [],
  value,
  onChange,
  placeholder,
  size = "md",
  className = "",
  ...rest
}) {
  ensureSelectCSS();
  const cls = ["cc-select", size === "sm" ? "cc-select--sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "cc-select__chev"
  }, /*#__PURE__*/React.createElement(Chevron, null)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_STEPNAV_CSS = `
.cc-stepnav{ display:flex; flex-direction:column; gap:3px; font-family:var(--cc-font-ui); }
.cc-stepnav__item{
  display:flex; align-items:center; gap:11px; padding:9px 12px; border-radius:var(--cc-radius-md);
  cursor:pointer; color:var(--cc-text); background:transparent; border:none; width:100%; text-align:left;
  font-size:14px; font-weight:500; line-height:1.2;
  transition:background var(--cc-dur) var(--cc-ease), color var(--cc-dur) var(--cc-ease);
}
.cc-stepnav__item:hover{ background:var(--cc-blue-50); }
.cc-stepnav__item:focus-visible{ outline:none; box-shadow:var(--cc-shadow-focus); }
.cc-stepnav__num{
  flex:0 0 auto; width:24px; height:24px; border-radius:50%; display:inline-flex;
  align-items:center; justify-content:center; font-size:12px; font-weight:700;
  background:var(--cc-gray-100); color:var(--cc-text-muted); font-variant-numeric:tabular-nums;
}
.cc-stepnav__icon{ flex:0 0 auto; display:inline-flex; color:var(--cc-text-muted); }
.cc-stepnav__icon svg{ width:18px; height:18px; }
.cc-stepnav__label{ flex:1; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.cc-stepnav__check{ display:inline-flex; color:var(--cc-verde-exito); }
.cc-stepnav__check svg{ width:16px; height:16px; }

/* active */
.cc-stepnav__item--active{ background:var(--cc-azul-mesa); color:#fff; font-weight:600; }
.cc-stepnav__item--active:hover{ background:var(--cc-azul-mesa); }
.cc-stepnav__item--active .cc-stepnav__icon{ color:#fff; }
.cc-stepnav__item--active .cc-stepnav__num{ background:rgba(255,255,255,.22); color:#fff; }
/* done */
.cc-stepnav__item--done .cc-stepnav__num{ background:var(--cc-success-soft); color:var(--cc-verde-exito); }
/* current (progress accent — amarillo) */
.cc-stepnav__item--current .cc-stepnav__num{ background:var(--cc-amarillo-carambola); color:var(--cc-azul-profundo); }
/* disabled */
.cc-stepnav__item--disabled{ opacity:.5; cursor:not-allowed; }
.cc-stepnav__item--disabled:hover{ background:transparent; }
`;
let _ccStepInjected = false;
function ensureStepCSS() {
  if (_ccStepInjected || typeof document === "undefined") return;
  _ccStepInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "stepnav");
  el.textContent = CC_STEPNAV_CSS;
  document.head.appendChild(el);
}
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
function StepNav({
  items = [],
  activeId,
  onSelect,
  numbered = false,
  className = "",
  ...rest
}) {
  ensureStepCSS();
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["cc-stepnav", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => {
    const active = activeId != null ? it.id === activeId : it.active;
    const cls = ["cc-stepnav__item", active ? "cc-stepnav__item--active" : "", it.status === "done" ? "cc-stepnav__item--done" : "", it.status === "current" ? "cc-stepnav__item--current" : "", it.disabled ? "cc-stepnav__item--disabled" : ""].filter(Boolean).join(" ");
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      className: cls,
      disabled: it.disabled,
      onClick: () => !it.disabled && onSelect && onSelect(it.id)
    }, numbered ? /*#__PURE__*/React.createElement("span", {
      className: "cc-stepnav__num"
    }, i + 1) : null, it.icon && !numbered ? /*#__PURE__*/React.createElement("span", {
      className: "cc-stepnav__icon"
    }, it.icon) : null, /*#__PURE__*/React.createElement("span", {
      className: "cc-stepnav__label"
    }, it.label), it.status === "done" && !active ? /*#__PURE__*/React.createElement("span", {
      className: "cc-stepnav__check"
    }, /*#__PURE__*/React.createElement(Check, null)) : null);
  }));
}
Object.assign(__ds_scope, { StepNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_TABS_CSS = `
.cc-tabs{ display:flex; gap:4px; font-family:var(--cc-font-ui); border-bottom:1px solid var(--cc-border); }
.cc-tab{
  position:relative; display:inline-flex; align-items:center; gap:7px; padding:10px 14px;
  background:transparent; border:none; cursor:pointer; font-size:14px; font-weight:600;
  color:var(--cc-text-muted); border-bottom:2px solid transparent; margin-bottom:-1px;
  transition:color var(--cc-dur) var(--cc-ease), border-color var(--cc-dur) var(--cc-ease);
}
.cc-tab:hover{ color:var(--cc-text); }
.cc-tab svg{ width:16px; height:16px; }
.cc-tab--active{ color:var(--cc-azul-mesa); border-bottom-color:var(--cc-azul-mesa); }
.cc-tab__badge{
  font-size:11px; font-weight:700; padding:1px 7px; border-radius:var(--cc-radius-pill);
  background:var(--cc-gray-100); color:var(--cc-text-muted); font-variant-numeric:tabular-nums;
}
.cc-tab--active .cc-tab__badge{ background:var(--cc-blue-100); color:var(--cc-blue-800); }

.cc-tabs--pill{ border-bottom:none; background:var(--cc-gray-100); padding:4px; border-radius:var(--cc-radius-md); gap:2px; display:inline-flex; }
.cc-tabs--pill .cc-tab{ border-radius:var(--cc-radius-sm); padding:7px 14px; margin-bottom:0; border-bottom:none; }
.cc-tabs--pill .cc-tab--active{ background:var(--cc-surface-card); color:var(--cc-azul-mesa); box-shadow:var(--cc-shadow-xs); }
`;
let _ccTabsInjected = false;
function ensureTabsCSS() {
  if (_ccTabsInjected || typeof document === "undefined") return;
  _ccTabsInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "tabs");
  el.textContent = CC_TABS_CSS;
  document.head.appendChild(el);
}
function Tabs({
  tabs = [],
  activeId,
  onSelect,
  variant = "underline",
  className = "",
  ...rest
}) {
  ensureTabsCSS();
  const cls = ["cc-tabs", variant === "pill" ? "cc-tabs--pill" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), tabs.map(t => {
    const active = t.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: ["cc-tab", active ? "cc-tab--active" : ""].filter(Boolean).join(" "),
      onClick: () => onSelect && onSelect(t.id)
    }, t.icon, t.label, t.badge != null ? /*#__PURE__*/React.createElement("span", {
      className: "cc-tab__badge"
    }, t.badge) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_CARD_CSS = `
.cc-card{
  background:var(--cc-surface-card); border-radius:var(--cc-radius-lg);
  box-shadow:var(--cc-shadow-sm); box-sizing:border-box;
  border:1px solid var(--cc-border);
  transition:box-shadow var(--cc-dur) var(--cc-ease), transform var(--cc-dur) var(--cc-ease);
}
.cc-card--celeste{ border-color:var(--cc-border-accent); }
.cc-card--marfil{ background:var(--cc-surface-card-special); border-color:#E6E7DA; }
.cc-card--dark{ background:var(--cc-surface-dark); border-color:rgba(255,255,255,.08); color:var(--cc-blanco-marfil); }
.cc-card--flat{ box-shadow:none; }
.cc-card--hover:hover{ box-shadow:var(--cc-shadow-md); transform:translateY(-2px); }
.cc-card--pad{ padding:var(--cc-pad-card); }
.cc-card__head{
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  padding:18px var(--cc-pad-card); border-bottom:1px solid var(--cc-border);
}
.cc-card--dark .cc-card__head{ border-bottom-color:rgba(255,255,255,.08); }
.cc-card__titles{ display:flex; flex-direction:column; gap:2px; min-width:0; }
.cc-card__title{ font-family:var(--cc-font-display); font-size:16px; font-weight:600; color:inherit; letter-spacing:-0.01em; }
.cc-card--dark .cc-card__title, .cc-card:not(.cc-card--dark) .cc-card__title{ color:var(--cc-text); }
.cc-card--dark .cc-card__title{ color:var(--cc-blanco-marfil); }
.cc-card__subtitle{ font-size:12.5px; color:var(--cc-text-muted); }
.cc-card--dark .cc-card__subtitle{ color:var(--cc-gris-tecnico); }
.cc-card__body{ padding:var(--cc-pad-card); }
.cc-card__head + .cc-card__body{ padding-top:18px; }
`;
let _ccCardInjected = false;
function ensureCardCSS() {
  if (_ccCardInjected || typeof document === "undefined") return;
  _ccCardInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "card");
  el.textContent = CC_CARD_CSS;
  document.head.appendChild(el);
}
function Card({
  children,
  title,
  subtitle,
  actions = null,
  variant = "default",
  padded = true,
  hover = false,
  flat = false,
  className = "",
  ...rest
}) {
  ensureCardCSS();
  const hasHeader = title != null || subtitle != null || actions != null;
  const cls = ["cc-card", variant !== "default" ? `cc-card--${variant}` : "", hover ? "cc-card--hover" : "", flat ? "cc-card--flat" : "", !hasHeader && padded ? "cc-card--pad" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), hasHeader ? /*#__PURE__*/React.createElement("div", {
    className: "cc-card__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-card__titles"
  }, title != null ? /*#__PURE__*/React.createElement("span", {
    className: "cc-card__title"
  }, title) : null, subtitle != null ? /*#__PURE__*/React.createElement("span", {
    className: "cc-card__subtitle"
  }, subtitle) : null), actions) : null, hasHeader ? /*#__PURE__*/React.createElement("div", {
    className: "cc-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/KpiCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CC_KPI_CSS = `
.cc-kpi{
  position:relative; background:var(--cc-surface-card); border:1px solid var(--cc-border);
  border-radius:var(--cc-radius-lg); padding:18px 20px; box-shadow:var(--cc-shadow-xs);
  display:flex; flex-direction:column; gap:6px; overflow:hidden; box-sizing:border-box;
}
.cc-kpi__accent{ position:absolute; left:0; top:0; bottom:0; width:4px; background:var(--cc-azul-mesa); }
.cc-kpi--accent-success .cc-kpi__accent{ background:var(--cc-verde-exito); }
.cc-kpi--accent-warning .cc-kpi__accent{ background:var(--cc-amarillo-carambola); }
.cc-kpi--accent-danger .cc-kpi__accent{ background:var(--cc-rojo-carambola); }
.cc-kpi--accent-none .cc-kpi__accent{ display:none; }
.cc-kpi__top{ display:flex; align-items:center; justify-content:space-between; gap:8px; }
.cc-kpi__label{ font-size:11.5px; font-weight:600; letter-spacing:.05em; text-transform:uppercase; color:var(--cc-text-muted); }
.cc-kpi__icon{ display:inline-flex; color:var(--cc-azul-mesa); }
.cc-kpi__icon svg{ width:18px; height:18px; }
.cc-kpi__value{
  font-family:var(--cc-font-data); font-size:30px; font-weight:700; line-height:1.05;
  color:var(--cc-text); letter-spacing:-0.01em; font-variant-numeric:tabular-nums lining-nums;
}
.cc-kpi__foot{ display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--cc-text-muted); }
.cc-kpi__delta{ display:inline-flex; align-items:center; gap:3px; font-weight:600; }
.cc-kpi__delta svg{ width:14px; height:14px; }
.cc-kpi__delta--up{ color:var(--cc-verde-exito); }
.cc-kpi__delta--down{ color:var(--cc-rojo-carambola); }
`;
let _ccKpiInjected = false;
function ensureKpiCSS() {
  if (_ccKpiInjected || typeof document === "undefined") return;
  _ccKpiInjected = true;
  const el = document.createElement("style");
  el.setAttribute("data-cc", "kpi");
  el.textContent = CC_KPI_CSS;
  document.head.appendChild(el);
}
const Arrow = ({
  up
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, up ? /*#__PURE__*/React.createElement("path", {
  d: "m6 15 6-6 6 6"
}) : /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
function KpiCard({
  label,
  value,
  delta,
  deltaDirection = "up",
  caption,
  icon = null,
  accent = "primary",
  className = "",
  ...rest
}) {
  ensureKpiCSS();
  const cls = ["cc-kpi", `cc-kpi--accent-${accent}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cc-kpi__accent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cc-kpi__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-kpi__label"
  }, label), icon ? /*#__PURE__*/React.createElement("span", {
    className: "cc-kpi__icon"
  }, icon) : null), /*#__PURE__*/React.createElement("div", {
    className: "cc-kpi__value"
  }, value), delta || caption ? /*#__PURE__*/React.createElement("div", {
    className: "cc-kpi__foot"
  }, delta ? /*#__PURE__*/React.createElement("span", {
    className: `cc-kpi__delta cc-kpi__delta--${deltaDirection}`
  }, /*#__PURE__*/React.createElement(Arrow, {
    up: deltaDirection === "up"
  }), delta) : null, caption ? /*#__PURE__*/React.createElement("span", null, caption) : null) : null);
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/KpiCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/AppShell.jsx
try { (() => {
/* CaromChamps Plataforma — application shell (sidebar + topbar). */
const DS = window.CaromChampsDesignSystem_c6f88d;
const Icon = window.CCIcon;
const NAV_ITEMS = [{
  id: "dashboard",
  label: "Dashboard",
  icon: "layout-dashboard"
}, {
  id: "inscripciones",
  label: "Inscripciones",
  icon: "user-plus"
}, {
  id: "grupos",
  label: "Grupos",
  icon: "users"
}, {
  id: "partidas",
  label: "Partidas",
  icon: "clipboard-list"
}, {
  id: "planillas",
  label: "Planillas IA",
  icon: "scan-line"
}, {
  id: "llaves",
  label: "Llaves",
  icon: "git-merge"
}, {
  id: "reportes",
  label: "Reportes",
  icon: "file-text"
}, {
  id: "cierre",
  label: "Cierre",
  icon: "flag"
}];

/* maps which steps are done/current relative to the active one */
function navStatus(activeId) {
  const order = NAV_ITEMS.map(n => n.id);
  const ai = order.indexOf(activeId);
  return NAV_ITEMS.map((n, i) => ({
    ...n,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: n.icon
    }),
    status: i < ai ? "done" : i === ai ? "current" : undefined
  }));
}
function Sidebar({
  active,
  onNavigate
}) {
  const {
    StepNav,
    Avatar
  } = DS;
  return /*#__PURE__*/React.createElement("aside", {
    style: shellStyles.sidebar
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.brand
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: shellStyles.brandWord
  }, "CaromChamps")), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.navWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.navLabel
  }, "Campeonato"), /*#__PURE__*/React.createElement(StepNav, {
    activeId: active,
    onSelect: onNavigate,
    items: navStatus(active)
  })), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.sideFoot
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Admin CC",
    size: "sm",
    tone: "amarillo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.footName
  }, "Mesa de control"), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.footRole
  }, "Plan Pro \xB7 Bogot\xE1")), /*#__PURE__*/React.createElement("button", {
    style: shellStyles.iconGhost,
    title: "Salir"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 18
  }))));
}
function Topbar({
  title
}) {
  const {
    Avatar
  } = DS;
  const c = window.CCData.championship;
  return /*#__PURE__*/React.createElement("header", {
    style: shellStyles.topbar
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.crumb
  }, c.name), /*#__PURE__*/React.createElement("h1", {
    style: shellStyles.h1
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.topRight
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.search
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17,
    color: "var(--cc-text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar jugador, club\u2026",
    style: shellStyles.searchInput
  })), /*#__PURE__*/React.createElement("button", {
    style: shellStyles.iconBtn,
    title: "Notificaciones"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 19
  }), /*#__PURE__*/React.createElement("span", {
    style: shellStyles.dot
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Admin CC",
    size: "sm",
    tone: "amarillo"
  })));
}
function Shell({
  active,
  onNavigate,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: shellStyles.root
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.main
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title
  }), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.content
  }, children)));
}
const shellStyles = {
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "var(--cc-surface-app)",
    fontFamily: "var(--cc-font-ui)"
  },
  sidebar: {
    width: 248,
    flex: "0 0 248px",
    background: "var(--cc-surface-card)",
    borderRight: "1px solid var(--cc-border)",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: 0,
    height: "100vh"
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "18px 18px 14px"
  },
  brandWord: {
    fontFamily: "var(--cc-font-display)",
    fontWeight: 800,
    fontSize: 17,
    letterSpacing: "-0.02em",
    color: "var(--cc-azul-profundo)"
  },
  navWrap: {
    padding: "8px 12px",
    flex: 1,
    overflowY: "auto"
  },
  navLabel: {
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--cc-text-muted)",
    fontWeight: 700,
    padding: "8px 12px 6px"
  },
  sideFoot: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderTop: "1px solid var(--cc-border)"
  },
  footName: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--cc-text)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  footRole: {
    fontSize: 11.5,
    color: "var(--cc-text-muted)"
  },
  iconGhost: {
    marginLeft: "auto",
    border: "none",
    background: "transparent",
    color: "var(--cc-text-muted)",
    cursor: "pointer",
    padding: 6,
    borderRadius: 8,
    display: "inline-flex"
  },
  main: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column"
  },
  topbar: {
    height: 64,
    flex: "0 0 64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "0 26px",
    background: "var(--cc-surface-card)",
    borderBottom: "1px solid var(--cc-border)",
    position: "sticky",
    top: 0,
    zIndex: 5
  },
  crumb: {
    fontSize: 11.5,
    color: "var(--cc-text-muted)",
    fontWeight: 500
  },
  h1: {
    fontFamily: "var(--cc-font-display)",
    fontSize: 22,
    fontWeight: 700,
    color: "var(--cc-azul-profundo)",
    letterSpacing: "-0.02em",
    lineHeight: 1.1
  },
  topRight: {
    display: "flex",
    alignItems: "center",
    gap: 14
  },
  search: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: 40,
    padding: "0 14px",
    background: "var(--cc-surface-app)",
    border: "1px solid var(--cc-border)",
    borderRadius: "var(--cc-radius-pill)",
    width: 260
  },
  searchInput: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--cc-font-ui)",
    fontSize: 14,
    color: "var(--cc-text)",
    width: "100%"
  },
  iconBtn: {
    position: "relative",
    border: "none",
    background: "transparent",
    color: "var(--cc-text-muted)",
    cursor: "pointer",
    padding: 8,
    borderRadius: 10,
    display: "inline-flex"
  },
  dot: {
    position: "absolute",
    top: 7,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "var(--cc-rojo-carambola)",
    border: "1.5px solid var(--cc-surface-card)"
  },
  content: {
    padding: 26,
    flex: 1
  }
};
window.CCShell = Shell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/data.js
try { (() => {
/* CaromChamps UI Kit — shared mock data (carom 3-cushion championship). */
window.CCData = {
  championship: {
    name: "Copa Nacional 3 Bandas 2026",
    venue: "Club Billar Bogotá",
    modality: "Carambola a 3 bandas",
    players: 64,
    groups: 8,
    phase: "Fase de grupos · Ronda 2",
    dates: "12 – 16 jun 2026"
  },
  kpis: [{
    label: "Campeonatos activos",
    value: "7",
    accent: "primary",
    icon: "trophy",
    delta: "+2",
    caption: "este mes"
  }, {
    label: "Partidas capturadas",
    value: "184",
    accent: "success",
    icon: "clipboard-list",
    delta: "+46",
    caption: "vs. semana ant."
  }, {
    label: "Planillas por revisar",
    value: "3",
    accent: "warning",
    icon: "scan-line",
    delta: "-2",
    deltaDirection: "down",
    caption: "IA / OCR"
  }, {
    label: "Promedio general",
    value: "1.182",
    accent: "primary",
    icon: "target",
    delta: "+0.08",
    caption: "del torneo"
  }],
  standings: [{
    id: 1,
    pos: 1,
    jugador: "Juan Pérez",
    club: "Club Bogotá",
    pj: 2,
    pg: 2,
    avg: "1.428",
    car: 40,
    estado: "success"
  }, {
    id: 2,
    pos: 2,
    jugador: "Min-jun Kim",
    club: "Seoul BC",
    pj: 2,
    pg: 1,
    avg: "1.392",
    car: 38,
    estado: "active"
  }, {
    id: 3,
    pos: 3,
    jugador: "Léa Dubois",
    club: "Paris Carom",
    pj: 1,
    pg: 1,
    avg: "1.205",
    car: 33,
    estado: "pending"
  }, {
    id: 4,
    pos: 4,
    jugador: "Carlos Ruiz",
    club: "CDMX Billar",
    pj: 2,
    pg: 0,
    avg: "1.150",
    car: 31,
    estado: "warning"
  }, {
    id: 5,
    pos: 5,
    jugador: "Tomás Vogel",
    club: "Wien Carom",
    pj: 1,
    pg: 0,
    avg: "0.980",
    car: 24,
    estado: "pending"
  }, {
    id: 6,
    pos: 6,
    jugador: "Marc Janssen",
    club: "Antwerp BC",
    pj: 2,
    pg: 0,
    avg: "0.910",
    car: 22,
    estado: "pending"
  }],
  matches: [{
    id: "m1",
    mesa: 1,
    grupo: "A",
    local: "Juan Pérez",
    visita: "Marc Janssen",
    car1: 40,
    car2: 22,
    ent: 28,
    estado: "success"
  }, {
    id: "m2",
    mesa: 2,
    grupo: "A",
    local: "Min-jun Kim",
    visita: "Tomás Vogel",
    car1: 38,
    car2: 24,
    ent: 31,
    estado: "active"
  }, {
    id: "m3",
    mesa: 3,
    grupo: "B",
    local: "Léa Dubois",
    visita: "Carlos Ruiz",
    car1: 33,
    car2: 31,
    ent: 30,
    estado: "warning"
  }, {
    id: "m4",
    mesa: 4,
    grupo: "B",
    local: "Hans Müller",
    visita: "Pablo Gómez",
    car1: 0,
    car2: 0,
    ent: 0,
    estado: "pending"
  }],
  registrations: [{
    id: "r1",
    jugador: "Juan Pérez",
    club: "Club Bogotá",
    pais: "Colombia",
    avg: "1.40",
    estado: "success"
  }, {
    id: "r2",
    jugador: "Min-jun Kim",
    club: "Seoul BC",
    pais: "Corea",
    avg: "1.39",
    estado: "success"
  }, {
    id: "r3",
    jugador: "Léa Dubois",
    club: "Paris Carom",
    pais: "Francia",
    avg: "1.21",
    estado: "active"
  }, {
    id: "r4",
    jugador: "Carlos Ruiz",
    club: "CDMX Billar",
    pais: "México",
    avg: "1.15",
    estado: "warning"
  }, {
    id: "r5",
    jugador: "Tomás Vogel",
    club: "Wien Carom",
    pais: "Austria",
    avg: "0.98",
    estado: "pending"
  }],
  bracket: {
    qf: [["Juan Pérez", "M. Janssen"], ["Min-jun Kim", "T. Vogel"], ["Léa Dubois", "C. Ruiz"], ["H. Müller", "P. Gómez"]],
    sf: [["Juan Pérez", "Min-jun Kim"], ["Léa Dubois", "H. Müller"]],
    final: [["Juan Pérez", "Léa Dubois"]],
    champion: "Juan Pérez"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/data.js", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/icons.jsx
try { (() => {
/* CaromChamps UI Kit — inline SVG icon set (Lucide path data, MIT).
   Rendered fully within React so it survives re-renders in the interactive app. */
const CC_ICON_PATHS = {
  "layout-dashboard": '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "clipboard-list": '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  "scan-line": '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
  "git-merge": '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
  "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  "trophy": '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "bell": '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "plus": '<path d="M5 12h14"/><path d="M12 5v14"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  "calendar": '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  "ellipsis": '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "trending-up": '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
  "sparkles": '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  "qr-code": '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  "sliders-horizontal": '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  "pencil": '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
  "trash-2": '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  "zap": '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  "circle-check": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  "menu": '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  "bar-chart": '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
  "printer": '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  "circle-dot": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>'
};
function CCIcon({
  name,
  size = 20,
  strokeWidth = 2,
  color,
  style,
  className
}) {
  const inner = CC_ICON_PATHS[name] || "";
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    style,
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}
window.CCIcon = CCIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/screens-core.jsx
try { (() => {
/* CaromChamps Plataforma — screens (part 1): Dashboard, Inscripciones, Grupos, Partidas. */
(function () {
  const DS = window.CaromChampsDesignSystem_c6f88d;
  const Icon = window.CCIcon;
  const D = window.CCData;
  const {
    Card,
    KpiCard,
    DataTable,
    StatusBadge,
    Tag,
    Button,
    IconButton,
    Input,
    Select,
    Tabs,
    Avatar
  } = DS;
  const SectionTitle = ({
    children,
    sub
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--cc-font-display)",
      fontSize: 18,
      fontWeight: 700,
      color: "var(--cc-azul-profundo)",
      letterSpacing: "-0.01em"
    }
  }, children), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--cc-text-muted)",
      marginTop: 2
    }
  }, sub) : null);

  /* ---------------- Dashboard ---------------- */
  function Dashboard() {
    const c = D.championship;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        marginBottom: 20
      }
    }, D.kpis.map((k, i) => /*#__PURE__*/React.createElement(KpiCard, {
      key: i,
      label: k.label,
      value: k.value,
      accent: k.accent,
      delta: k.delta,
      deltaDirection: k.deltaDirection,
      caption: k.caption,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: k.icon
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Partidas recientes",
      subtitle: "\xDAltimos resultados capturados",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        rightIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "arrow-right",
          size: 16
        })
      }, "Ver todas")
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "mesa",
        header: "Mesa",
        width: "62px",
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600
          }
        }, "M", v)
      }, {
        key: "grupo",
        header: "Grupo",
        width: "70px",
        render: v => /*#__PURE__*/React.createElement(Tag, null, v)
      }, {
        key: "match",
        header: "Partida",
        strong: true,
        render: (_, r) => `${r.local} vs ${r.visita}`
      }, {
        key: "score",
        header: "Carambolas",
        align: "right",
        render: (_, r) => `${r.car1} – ${r.car2}`
      }, {
        key: "estado",
        header: "Estado",
        render: v => /*#__PURE__*/React.createElement(StatusBadge, {
          status: v,
          dot: false
        })
      }],
      rows: D.matches
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "dark",
      title: "Copa Nacional 3 Bandas",
      subtitle: c.phase
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
        marginTop: 4
      }
    }, [["Jugadores", c.players], ["Grupos", c.groups], ["Sede", c.venue], ["Fechas", c.dates]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: ".05em",
        textTransform: "uppercase",
        color: "var(--cc-gris-tecnico)"
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: "var(--cc-blanco-marfil)",
        marginTop: 2
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "trending-up",
        size: 16
      })
    }, "Ver progreso"))), /*#__PURE__*/React.createElement(Card, {
      title: "Checklist de fase"
    }, [["Inscripciones cerradas", true], ["Grupos sorteados", true], ["Ronda 2 en curso", false], ["Llaves generadas", false]].map(([t, done], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 0",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        color: done ? "var(--cc-verde-exito)" : "var(--cc-gris-tecnico)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: done ? "circle-check" : "circle-dot",
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: done ? "var(--cc-text)" : "var(--cc-text-muted)"
      }
    }, t)))))));
  }

  /* ---------------- Inscripciones ---------------- */
  function Inscripciones() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "360px 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Inscribir jugador",
      subtitle: "Registro en l\xEDnea"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Nombre del jugador",
      placeholder: "Ej. Juan P\xE9rez",
      required: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "user-plus",
        size: 18
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Club / Sala",
      placeholder: "Ej. Club Bogot\xE1",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "building-2",
        size: 18
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Pa\xEDs",
      placeholder: "Pa\xEDs",
      options: ["Colombia", "México", "España", "Francia", "Corea"]
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Promedio (AVG)",
      placeholder: "1.20"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      placeholder: "jugador@correo.com",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 18
      })
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      })
    }, "Enviar inscripci\xF3n"))), /*#__PURE__*/React.createElement(Card, {
      title: "Inscripciones recibidas",
      subtitle: "64 jugadores \xB7 8 pa\xEDses",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 16
        })
      }, "Exportar")
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "jugador",
        header: "Jugador",
        strong: true,
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: v,
          size: "sm"
        }), v)
      }, {
        key: "club",
        header: "Club"
      }, {
        key: "pais",
        header: "País"
      }, {
        key: "avg",
        header: "AVG",
        align: "right"
      }, {
        key: "estado",
        header: "Validación",
        render: v => /*#__PURE__*/React.createElement(StatusBadge, {
          status: v,
          dot: false
        })
      }],
      rows: D.registrations
    })));
  }

  /* ---------------- Grupos ---------------- */
  function Grupos() {
    const [tab, setTab] = React.useState("posiciones");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      activeId: tab,
      onSelect: setTab,
      tabs: [{
        id: "posiciones",
        label: "Posiciones",
        badge: 6
      }, {
        id: "grupos",
        label: "Grupos",
        badge: 8
      }, {
        id: "calendario",
        label: "Calendario"
      }]
    })), tab === "posiciones" && /*#__PURE__*/React.createElement(Card, {
      title: "Grupo A \u2014 Tabla de posiciones",
      subtitle: "Ronda 2 de 3",
      actions: /*#__PURE__*/React.createElement(StatusBadge, {
        status: "active"
      })
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "pos",
        header: "#",
        width: "46px",
        render: v => /*#__PURE__*/React.createElement("span", {
          className: "cc-table__rank"
        }, v)
      }, {
        key: "jugador",
        header: "Jugador",
        strong: true,
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: v,
          size: "sm"
        }), v)
      }, {
        key: "club",
        header: "Club"
      }, {
        key: "pj",
        header: "PJ",
        align: "right"
      }, {
        key: "pg",
        header: "PG",
        align: "right"
      }, {
        key: "car",
        header: "Caramb.",
        align: "right"
      }, {
        key: "avg",
        header: "AVG",
        align: "right",
        strong: true
      }, {
        key: "estado",
        header: "Estado",
        render: v => /*#__PURE__*/React.createElement(StatusBadge, {
          status: v,
          dot: false
        })
      }],
      rows: D.standings
    })), tab === "grupos" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }
    }, ["A", "B", "C", "D", "E", "F", "G", "H"].map(g => /*#__PURE__*/React.createElement(Card, {
      key: g,
      variant: "celeste",
      title: `Grupo ${g}`,
      subtitle: "8 jugadores"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        fontSize: 13.5
      }
    }, D.standings.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cc-text-muted)"
      }
    }, i + 1, ". ", p.jugador.split(" ")[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: "tabular-nums",
        fontWeight: 600
      }
    }, p.avg))))))), tab === "calendario" && /*#__PURE__*/React.createElement(Card, {
      title: "Calendario \xB7 Ronda 2"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, D.matches.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "10px 12px",
        border: "1px solid var(--cc-border)",
        borderRadius: "var(--cc-radius-md)",
        background: "var(--cc-surface-card)"
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      variant: "brand"
    }, "Mesa ", m.mesa), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 14
      }
    }, m.local), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cc-text-muted)",
        fontSize: 13
      }
    }, "vs"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 14
      }
    }, m.visita), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: m.estado
    })))))));
  }

  /* ---------------- Partidas ---------------- */
  function Partidas() {
    const [car1, setCar1] = React.useState(40);
    const [car2, setCar2] = React.useState(22);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 380px",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Partidas \u2014 Grupo A",
      subtitle: "Ingreso de informaci\xF3n de partidas",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 16
        })
      }, "Nueva partida")
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "mesa",
        header: "Mesa",
        width: "62px",
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600
          }
        }, "M", v)
      }, {
        key: "local",
        header: "Local",
        strong: true
      }, {
        key: "car1",
        header: "Car.",
        align: "right"
      }, {
        key: "car2",
        header: "Car.",
        align: "right"
      }, {
        key: "visita",
        header: "Visitante",
        strong: true
      }, {
        key: "ent",
        header: "Entradas",
        align: "right"
      }, {
        key: "estado",
        header: "Estado",
        render: v => /*#__PURE__*/React.createElement(StatusBadge, {
          status: v,
          dot: false
        })
      }, {
        key: "acc",
        header: "",
        width: "44px",
        render: () => /*#__PURE__*/React.createElement(IconButton, {
          size: "sm",
          label: "Editar"
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "pencil",
          size: 16
        }))
      }],
      rows: D.matches
    })), /*#__PURE__*/React.createElement(Card, {
      title: "Capturar resultado",
      subtitle: "Mesa 1 \xB7 Grupo A"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: 10,
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Juan P\xE9rez",
      defaultValue: car1,
      onChange: e => setCar1(e.target.value)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 20,
        color: "var(--cc-text-muted)",
        paddingBottom: 10
      }
    }, ":"), /*#__PURE__*/React.createElement(Input, {
      label: "M. Janssen",
      defaultValue: car2,
      onChange: e => setCar2(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Entradas",
      defaultValue: "28"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Mayor serie",
      defaultValue: "6"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 14px",
        background: "var(--cc-blue-50)",
        borderRadius: "var(--cc-radius-md)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--cc-text-muted)"
      }
    }, "Promedio calculado"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--cc-font-data)",
        fontWeight: 700,
        fontSize: 20,
        color: "var(--cc-azul-mesa)",
        fontVariantNumeric: "tabular-nums"
      }
    }, (car1 / 28).toFixed(3))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      block: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      })
    }, "Finalizar"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Guardar")))));
  }
  window.CCScreens = Object.assign(window.CCScreens || {}, {
    Dashboard,
    Inscripciones,
    Grupos,
    Partidas,
    SectionTitle
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/screens-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/screens-more.jsx
try { (() => {
/* CaromChamps Plataforma — screens (part 2): Planillas IA, Llaves, Reportes, Cierre. */
(function () {
  const DS = window.CaromChampsDesignSystem_c6f88d;
  const Icon = window.CCIcon;
  const D = window.CCData;
  const {
    Card,
    DataTable,
    StatusBadge,
    Tag,
    Button,
    IconButton,
    Avatar,
    KpiCard
  } = DS;

  /* ---------------- Planillas IA ---------------- */
  function PlanillasIA() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Importaci\xF3n inteligente",
      subtitle: "Lee planillas en PDF o imagen con IA / OCR"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: "2px dashed var(--cc-blue-200)",
        borderRadius: "var(--cc-radius-lg)",
        background: "var(--cc-blue-50)",
        padding: "34px 20px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        padding: 14,
        borderRadius: "50%",
        background: "#fff",
        color: "var(--cc-azul-mesa)",
        boxShadow: "var(--cc-shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 15,
        marginTop: 12
      }
    }, "Arrastra la planilla aqu\xED"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--cc-text-muted)",
        marginTop: 4
      }
    }, "PDF, JPG o PNG \xB7 hasta 10 MB"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: "inline-block"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "scan-line",
        size: 16
      })
    }, "Seleccionar archivo"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, [["Planilla_GrupoA_M1.pdf", "success", "Procesada"], ["Planilla_GrupoB_M3.jpg", "warning", "Requiere revisión"], ["Planilla_GrupoB_M4.pdf", "active", "Procesando"]].map(([f, s, l], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        border: "1px solid var(--cc-border)",
        borderRadius: "var(--cc-radius-md)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 18,
      color: "var(--cc-azul-mesa)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 500
      }
    }, f), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: s
    }, l)))))), /*#__PURE__*/React.createElement(Card, {
      title: "Resultado detectado",
      subtitle: "Planilla_GrupoB_M3.jpg",
      actions: /*#__PURE__*/React.createElement(Tag, {
        variant: "brand"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        size: 13
      }), " IA \xB7 92%")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, [["Local", "Léa Dubois", true], ["Visitante", "Carlos Ruiz", true], ["Carambolas L", "33", true], ["Carambolas V", "31", false], ["Entradas", "30", true], ["Mayor serie", "5", true]].map(([k, v, ok], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "10px 12px",
        border: "1px solid var(--cc-border)",
        borderRadius: "var(--cc-radius-md)",
        background: ok ? "var(--cc-surface-card)" : "var(--cc-warning-soft)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        color: "var(--cc-text-muted)"
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 15
      }
    }, v), /*#__PURE__*/React.createElement(Icon, {
      name: ok ? "check" : "pencil",
      size: 15,
      color: ok ? "var(--cc-verde-exito)" : "var(--cc-naranja-accion)"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        padding: "12px 14px",
        background: "var(--cc-warning-soft)",
        borderRadius: "var(--cc-radius-md)",
        fontSize: 13,
        color: "var(--cc-state-warning)",
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "scan-line",
      size: 16
    }), " Un campo con baja confianza requiere validaci\xF3n manual."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      block: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      })
    }, "Validar e importar"), /*#__PURE__*/React.createElement(Button, {
      variant: "warning",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "rotate-ccw",
        size: 16
      })
    }, "Reprocesar"))));
  }

  /* ---------------- Llaves (bracket) ---------------- */
  function Llaves() {
    const b = D.bracket;
    const Match = ({
      pair,
      winner
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--cc-surface-card)",
        border: "1px solid var(--cc-border)",
        borderRadius: "var(--cc-radius-md)",
        overflow: "hidden",
        width: 188,
        boxShadow: "var(--cc-shadow-xs)"
      }
    }, pair.map((p, i) => {
      const win = winner === p;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 12px",
          borderTop: i ? "1px solid var(--cc-border)" : "none",
          background: win ? "var(--cc-blue-50)" : "transparent"
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: p,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: win ? 700 : 500,
          color: win ? "var(--cc-azul-mesa)" : "var(--cc-text)"
        }
      }, p), win ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 14,
        color: "var(--cc-azul-mesa)",
        style: {
          marginLeft: "auto"
        }
      }) : null);
    }));
    const Col = ({
      label,
      children
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "var(--cc-text-muted)",
        fontWeight: 700,
        textAlign: "center"
      }
    }, label), children);
    return /*#__PURE__*/React.createElement(Card, {
      title: "Llaves eliminatorias",
      subtitle: "Cuadro final \xB7 8 jugadores",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 16
        })
      }, "Exportar bracket")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 40,
        padding: "8px 4px",
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(Col, {
      label: "Cuartos"
    }, b.qf.map((p, i) => /*#__PURE__*/React.createElement(Match, {
      key: i,
      pair: p,
      winner: b.sf.flat().includes(p[0].split(" ").slice(-1)[0]) ? p[0] : p[0]
    }))), /*#__PURE__*/React.createElement(Col, {
      label: "Semifinal"
    }, b.sf.map((p, i) => /*#__PURE__*/React.createElement(Match, {
      key: i,
      pair: p,
      winner: p[0]
    }))), /*#__PURE__*/React.createElement(Col, {
      label: "Final"
    }, b.final.map((p, i) => /*#__PURE__*/React.createElement(Match, {
      key: i,
      pair: p,
      winner: b.champion
    }))), /*#__PURE__*/React.createElement(Col, {
      label: "Campe\xF3n"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--cc-gradient-deep)",
        borderRadius: "var(--cc-radius-lg)",
        padding: "20px 18px",
        width: 188,
        textAlign: "center",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trophy",
      size: 30,
      color: "var(--cc-amarillo-carambola)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 16,
        marginTop: 8
      }
    }, b.champion), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--cc-gris-tecnico)",
        marginTop: 2
      }
    }, "Campe\xF3n del torneo")))));
  }

  /* ---------------- Reportes ---------------- */
  function Reportes() {
    const reports = [["Acta final del campeonato", "file-text", "Documento oficial de cierre", "Institucional"], ["Reporte 5 · Resultados", "bar-chart", "Posiciones finales por grupo", "Avanzado"], ["Ranking acumulado", "trophy", "Promedios e histórico por jugador", "Federativo"], ["Bracket eliminatorio", "git-merge", "Cuadro final con resultados", "PDF"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Reportes disponibles",
      subtitle: "Listos para exportar"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, reports.map(([t, ic, sub, tag], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        border: "1px solid var(--cc-border)",
        borderRadius: "var(--cc-radius-md)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        padding: 9,
        borderRadius: 10,
        background: "var(--cc-blue-50)",
        color: "var(--cc-azul-mesa)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 14
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--cc-text-muted)"
      }
    }, sub)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Tag, null, tag), /*#__PURE__*/React.createElement(IconButton, {
      label: "Descargar"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 18
    }))))))), /*#__PURE__*/React.createElement(Card, {
      variant: "marfil",
      title: "Acta final",
      subtitle: "Vista previa institucional",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm",
        leftIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "printer",
          size: 16
        })
      }, "Emitir")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        borderRadius: "var(--cc-radius-md)",
        border: "1px solid var(--cc-border)",
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        borderBottom: "2px solid var(--cc-azul-mesa)",
        paddingBottom: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.png",
      alt: "",
      style: {
        height: 30
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--cc-font-display)",
        fontWeight: 800,
        fontSize: 15,
        color: "var(--cc-azul-profundo)"
      }
    }, "Copa Nacional 3 Bandas 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--cc-text-muted)"
      }
    }, "Acta oficial de cierre \xB7 Club Billar Bogot\xE1"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(KpiCard, {
      label: "Campe\xF3n",
      value: "Juan P\xE9rez",
      accent: "primary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "trophy"
      })
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Mejor promedio",
      value: "1.428",
      accent: "success",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "target"
      })
    })), /*#__PURE__*/React.createElement(DataTable, {
      striped: false,
      hover: false,
      columns: [{
        key: "pos",
        header: "#",
        width: "40px",
        render: v => /*#__PURE__*/React.createElement("span", {
          className: "cc-table__rank"
        }, v)
      }, {
        key: "jugador",
        header: "Jugador",
        strong: true
      }, {
        key: "avg",
        header: "AVG",
        align: "right"
      }],
      rows: D.standings.slice(0, 4)
    }))));
  }

  /* ---------------- Cierre ---------------- */
  function Cierre() {
    const steps = [["Todas las partidas finalizadas", true], ["Planillas validadas", true], ["Posiciones confirmadas", true], ["Llaves cerradas", true], ["Acta final revisada", false]];
    const ready = steps.every(([, d]) => d);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 380px",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Cierre del campeonato",
      subtitle: "Validaci\xF3n final antes de emitir el acta"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, steps.map(([t, done], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "13px 0",
        borderBottom: i < steps.length - 1 ? "1px solid var(--cc-border)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        color: done ? "var(--cc-verde-exito)" : "var(--cc-gris-tecnico)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: done ? "circle-check" : "circle-dot",
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 500,
        color: done ? "var(--cc-text)" : "var(--cc-text-muted)"
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, done ? /*#__PURE__*/React.createElement(StatusBadge, {
      status: "success",
      dot: false
    }) : /*#__PURE__*/React.createElement(StatusBadge, {
      status: "pending",
      dot: false
    })))))), /*#__PURE__*/React.createElement(Card, {
      variant: "dark",
      title: "Estado del torneo",
      subtitle: "Listo para cierre formal"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        background: "rgba(245,193,22,.12)",
        borderRadius: "var(--cc-radius-md)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 22,
      color: "var(--cc-amarillo-carambola)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--cc-blanco-marfil)"
      }
    }, "4 de 5 validaciones completas. Revisa el acta final para cerrar.")), /*#__PURE__*/React.createElement(Button, {
      variant: ready ? "success" : "warning",
      block: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "flag",
        size: 16
      })
    }, ready ? "Cerrar campeonato" : "Revisar acta final"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      block: true,
      style: {
        color: "var(--cc-gris-tecnico)"
      }
    }, "Reabrir fase anterior"))));
  }
  window.CCScreens = Object.assign(window.CCScreens || {}, {
    PlanillasIA,
    Llaves,
    Reportes,
    Cierre
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/screens-more.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.StepNav = __ds_scope.StepNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.KpiCard = __ds_scope.KpiCard;

})();
