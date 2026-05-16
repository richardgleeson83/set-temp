// Set Temp — atoms. Loaded as Babel; depends on React + lucide global.

// ── ICON ───────────────────────────────────────────────────────────
function Icon({ name, size = 20, strokeWidth = 1.75, color = "currentColor", style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = "";
    const node = document.createElement("i");
    node.setAttribute("data-lucide", name);
    ref.current.appendChild(node);
    window.lucide.createIcons({
      attrs: { "stroke-width": strokeWidth, width: size, height: size },
      nameAttr: "data-lucide",
      elements: [node]
    });
  }, [name, size, strokeWidth]);
  return <span ref={ref} aria-hidden="true" style={{ display: "inline-flex", color, lineHeight: 0, flexShrink: 0, ...style }} />;
}

// ── BUTTON ─────────────────────────────────────────────────────────
function Button({ children, variant = "primary", size = "md", leadingIcon, trailingIcon, onClick, type = "button", href, disabled, style, fullWidth }) {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 14 },
    md: { padding: "11px 18px", fontSize: 14 },
    lg: { padding: "13px 22px", fontSize: 15 },
    xl: { padding: "16px 26px", fontSize: 16 }
  };
  const variants = {
    primary: { background: "var(--brand-blue-500)", color: "#fff", boxShadow: "var(--shadow-brand)" },
    navy: { background: "var(--brand-navy-700)", color: "#fff", boxShadow: "var(--shadow-sm)" },
    amber: { background: "var(--warning-500)", color: "var(--brand-navy-900)", boxShadow: "0 4px 14px -2px rgba(247,144,9,.32)" },
    secondary: { background: "#fff", color: "var(--brand-navy-700)", border: "1px solid var(--gray-300)", boxShadow: "var(--shadow-xs)" },
    ghost: { background: "transparent", color: "var(--brand-navy-700)" },
    onDark: { background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.30)", backdropFilter: "blur(8px)" },
    link: { background: "transparent", color: "var(--brand-blue-600)", padding: 0 }
  };
  const Tag = href ? "a" : "button";
  const extra = href ? { href } : { type, disabled, onClick };
  return (
    <Tag {...extra}
    className={`st-btn st-btn-${variant}`}
    style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
      fontFamily: "var(--font-sans)", fontWeight: 600, borderRadius: 8,
      border: "1px solid transparent", cursor: disabled ? "not-allowed" : "pointer",
      transition: "transform 150ms var(--ease-out-quart), box-shadow 200ms var(--ease-out-quart), background 150ms",
      whiteSpace: "nowrap", textDecoration: "none", letterSpacing: "-0.005em",
      opacity: disabled ? 0.55 : 1, width: fullWidth ? "100%" : undefined,
      ...sizes[size], ...variants[variant], ...style
    }}>
      {leadingIcon && <Icon name={leadingIcon} size={size === "xl" ? 20 : 18} />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} size={size === "xl" ? 20 : 18} />}
    </Tag>);

}

// ── FIELD ──────────────────────────────────────────────────────────
function Field({ label, hint, error, type = "text", icon, value, onChange, placeholder, as = "input", rows = 4, name, required, options }) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? "var(--error-500)" : focused ? "var(--brand-blue-500)" : "var(--gray-300)";
  const ring = focused ? "0 0 0 4px var(--brand-blue-100)" : "var(--shadow-xs)";
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {label &&
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-navy-700)", letterSpacing: "-0.005em" }}>
          {label}{required && <span style={{ color: "var(--brand-blue-600)" }}> *</span>}
        </span>
      }
      <div style={{
        display: "flex", alignItems: as === "textarea" ? "flex-start" : "center", gap: 10,
        padding: as === "textarea" ? "12px 14px" : "12px 14px",
        border: `1px solid ${borderColor}`, borderRadius: 10, background: "#fff",
        boxShadow: ring, transition: "all 150ms var(--ease-out-quart)"
      }}>
        {icon && <Icon name={icon} size={16} color="var(--gray-500)" style={{ marginTop: as === "textarea" ? 4 : 0 }} />}
        {as === "textarea" ?
        <textarea name={name} rows={rows} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} required={required}
        style={{ border: 0, outline: 0, flex: 1, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--brand-navy-700)", background: "transparent", resize: "vertical", lineHeight: 1.5 }} /> :
        as === "select" ?
        <select name={name} value={value} onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ border: 0, outline: 0, flex: 1, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--brand-navy-700)", background: "transparent", appearance: "none", cursor: "pointer" }}>
            {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select> :

        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} required={required}
        style={{ border: 0, outline: 0, flex: 1, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--brand-navy-700)", background: "transparent" }} />
        }
        {as === "select" && <Icon name="chevron-down" size={16} color="var(--gray-500)" />}
      </div>
      {(hint || error) &&
      <span style={{ fontSize: 12, color: error ? "var(--error-700)" : "var(--fg-tertiary)" }}>{error || hint}</span>
      }
    </label>);

}

// ── BADGE / PILL ───────────────────────────────────────────────────
function Pill({ children, tone = "navy", icon, dot, dotColor, style }) {
  const tones = {
    navy: { color: "#fff", bg: "rgba(255,255,255,0.10)", border: "rgba(255,255,255,0.18)" },
    light: { color: "var(--brand-navy-700)", bg: "#fff", border: "var(--gray-200)" },
    blue: { color: "var(--brand-blue-700)", bg: "var(--brand-blue-50)", border: "var(--brand-blue-100)" },
    sky: { color: "var(--brand-navy-700)", bg: "var(--sky-50)", border: "var(--sky-100)" },
    amber: { color: "var(--warning-700)", bg: "var(--warning-50)", border: "var(--warning-100)" },
    success: { color: "var(--success-700)", bg: "var(--success-50)", border: "var(--success-100)" },
    ghost: { color: "currentColor", bg: "transparent", border: "currentColor" }
  };
  const t = tones[tone] || tones.navy;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "6px 12px", borderRadius: 999,
      fontSize: 13, fontWeight: 500, lineHeight: "18px", letterSpacing: "-0.003em",
      color: t.color, background: t.bg, border: `1px solid ${t.border}`,
      ...style
    }}>
      {dot &&
      <span style={{ display: "inline-flex", position: "relative", width: 8, height: 8 }}>
          <span style={{
          position: "absolute", inset: 0, borderRadius: 99,
          background: dotColor || "var(--warning-500)",
          animation: "stPulse 2s var(--ease-out-quart) infinite"
        }} />
          <span style={{
          position: "absolute", inset: 1.5, borderRadius: 99,
          background: dotColor || "var(--warning-500)"
        }} />
        </span>
      }
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>);

}

// ── LOGO (SET TEMP mark + wordmark, inline SVG) ─────────────────────
function Logo({ inverted = false, size = 38 }) {
  const navy = inverted ? "#ffffff" : "#002050";
  const blue = inverted ? "#80c0eb" : "#1080d0";
  return (
    <a href="#home" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
      <svg width={size} height={size * 0.86} viewBox="0 0 110 95" aria-hidden="true">
        {/* Light mountain peak (back) */}
        <path d="M2 70 L28 22 L48 50 L62 32 L78 50 L108 70 Z" fill={blue} opacity="0.85" />
        {/* Dark mountain peak (front) */}
        <path d="M0 72 L26 18 L46 48 L60 30 L74 50 L70 72 Z" fill={navy} />
        {/* Wave */}
        <path d="M0 78 Q 28 66, 55 76 T 110 78 L 110 88 Q 82 96, 55 86 T 0 88 Z" fill={blue} />
      </svg>
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{
          fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 20, letterSpacing: "0.04em",
          color: navy
        }}>
          SET<span style={{ color: blue }}>TEMP</span>
        </span>
        <span style={{
          fontSize: 9, letterSpacing: "0.28em", fontWeight: 600, marginTop: 3,
          color: inverted ? "rgba(255,255,255,0.7)" : "var(--gray-500)"
        }}>
          AIR CONDITIONING
        </span>
      </span>
    </a>);

}

// ── STAT ───────────────────────────────────────────────────────────
function Stat({ value, label, icon, tone = "blue" }) {
  const toneStyles = {
    blue: { iconBg: "var(--brand-blue-50)", iconFg: "var(--brand-blue-600)" },
    navy: { iconBg: "var(--brand-navy-50)", iconFg: "var(--brand-navy-700)" },
    amber: { iconBg: "var(--warning-50)", iconFg: "var(--warning-700)" }
  };
  const t = toneStyles[tone] || toneStyles.blue;
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 12,
      padding: "24px 24px", background: "#fff",
      border: "1px solid var(--gray-200)", borderRadius: 14
    }}>
      <span style={{
        width: 40, height: 40, borderRadius: 10, background: t.iconBg, color: t.iconFg,
        display: "inline-flex", alignItems: "center", justifyContent: "center"
      }}>
        <Icon name={icon} size={20} />
      </span>
      <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--brand-navy-700)", lineHeight: 1.05 }}>{value}</div>
      <div style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.45 }}>{label}</div>
    </div>);

}

// ── CONTAINER ──────────────────────────────────────────────────────
function Container({ children, style }) {
  return <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", ...style, color: "rgb(196, 213, 240)" }}>{children}</div>;
}

// ── SECTION ────────────────────────────────────────────────────────
function Section({ id, children, style, label }) {
  return (
    <section id={id} data-screen-label={label} style={{ padding: "96px 0", ...style }}>
      {children}
    </section>);

}

// ── EYEBROW ────────────────────────────────────────────────────────
function Eyebrow({ children, color = "var(--brand-blue-600)" }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
      color
    }}>
      <span style={{ width: 24, height: 2, background: "currentColor", borderRadius: 2 }} />
      {children}
    </div>);

}

Object.assign(window, { Icon, Button, Field, Pill, Logo, Stat, Container, Section, Eyebrow });