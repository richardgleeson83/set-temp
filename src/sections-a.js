// Set Temp — sections (header, hero, brand strip, about, services, sectors, mid banner)

const PHONE_DISPLAY = "07379 489570";
const PHONE_TEL = "+447379489570";
const EMAIL = "info@settempairconditioning.com";

// ── URGENT BANNER ─────────────────────────────────────────────────
function UrgentBanner({ variant = "urgent" }) {
  if (variant === "off") return null;
  const isUrgent = variant === "urgent";
  return (
    <div style={{
      background: isUrgent ? "var(--brand-navy-900)" : "var(--brand-blue-700)",
      color: "#fff", fontSize: 14, lineHeight: "20px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      position: "relative", zIndex: 60,
    }}>
      <Container style={{
        padding: "10px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
        flexWrap: "wrap",
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <Pill tone="navy" dot dotColor={isUrgent ? "var(--warning-500)" : "var(--brand-blue-300)"}
            style={{ background: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.22)", color: "#fff", fontWeight: 600, padding: "4px 10px", fontSize: 12 }}>
            {isUrgent ? "AC breakdown?" : "24/7 Support"}
          </Pill>
          <span style={{ opacity: 0.92 }}>
            Fast-response diagnostics &amp; emergency repairs across the region.
            <span style={{ opacity: 0.5, margin: "0 10px" }}>·</span>
            Call for urgent bookings:
          </span>
        </div>
        <a href={`tel:${PHONE_TEL}`} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          color: "var(--warning-500)", fontWeight: 700, textDecoration: "none",
          fontFeatureSettings: "'tnum'",
        }}>
          <Icon name="phone" size={14}/>
          {PHONE_DISPLAY}
          <span style={{ marginLeft: 4, opacity: .6, fontWeight: 500 }}>· Mon–Sun, 7am–9pm</span>
        </a>
      </Container>
    </div>
  );
}

// ── HEADER ────────────────────────────────────────────────────────
function Header({ scrolled }) {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Sectors", href: "#sectors" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      borderBottom: scrolled ? "1px solid var(--gray-200)" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 0 rgba(16,24,40,0.04)" : "none",
      transition: "all 240ms var(--ease-out-quart)",
    }}>
      <Container style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 28px", height: 72,
      }}>
        <Logo size={36} inverted={!scrolled} />
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="st-nav-desktop">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              padding: "8px 14px", borderRadius: 8,
              color: scrolled ? "var(--brand-navy-700)" : "#fff",
              fontWeight: scrolled ? 500 : 600, fontSize: 14,
              textDecoration: "none", transition: "background 150ms, color 200ms",
              textShadow: scrolled ? "none" : "0 1px 2px rgba(0,18,48,0.35)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = scrolled ? "var(--gray-50)" : "rgba(255,255,255,0.10)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >{l.label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href={`tel:${PHONE_TEL}`} className="st-header-phone" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: scrolled ? "var(--brand-navy-700)" : "#fff",
            fontWeight: 600, fontSize: 14,
            textDecoration: "none", padding: "8px 12px", borderRadius: 8,
            transition: "background 150ms, color 200ms",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = scrolled ? "var(--gray-50)" : "rgba(255,255,255,0.10)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <span style={{
              width: 28, height: 28, borderRadius: 8,
              background: scrolled ? "var(--brand-blue-50)" : "rgba(255,255,255,0.14)",
              border: scrolled ? "none" : "1px solid rgba(255,255,255,0.22)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: scrolled ? "var(--brand-blue-600)" : "#fff",
              transition: "all 200ms",
            }}><Icon name="phone" size={14}/></span>
            {PHONE_DISPLAY}
          </a>
          <Button variant="primary" size="md" href="#contact" trailingIcon="arrow-right">Get a Free Quote</Button>
        </div>
      </Container>
    </header>
  );
}

// ── HERO ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <Section id="home" label="Home" style={{ padding: 0, position: "relative", marginTop: -72, paddingTop: 72 }}>
      {/* Background image + gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, overflow: "hidden", zIndex: 0,
      }}>
        <img src={(window.__resources && window.__resources.photoHero) || "assets/photo-residential-install.jpg"}
          alt="Modern external air-conditioning condenser unit installed against a white residential wall"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 60%",
            filter: "saturate(0.85) contrast(1.05)",
          }}/>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(120deg, rgba(0,18,48,0.92) 0%, rgba(0,32,80,0.78) 38%, rgba(7,68,117,0.42) 70%, rgba(7,68,117,0.18) 100%)",
        }}/>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(80% 60% at 10% 30%, rgba(16,128,208,0.18), transparent 60%)",
        }}/>
      </div>

      <Container style={{ position: "relative", zIndex: 1, padding: "120px 28px 140px", color: "#fff" }}>
        <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 24 }}>
          <Pill tone="navy" icon="thermometer-snowflake" style={{
            background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.22)", color: "#fff",
            alignSelf: "flex-start", padding: "8px 14px", fontSize: 13, backdropFilter: "blur(10px)",
          }}>
            Engineered comfort. Year-round.
          </Pill>
          <h1 style={{
            fontSize: "clamp(40px, 5.6vw, 68px)", lineHeight: 1.04, letterSpacing: "-0.025em",
            fontWeight: 600, color: "#fff", margin: 0, textWrap: "balance",
          }}>
            Expert climate control,<br/>
            <span style={{ color: "var(--sky-100)" }}>tailored to your space.</span>
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,0.82)",
            maxWidth: 580, margin: 0, textWrap: "pretty",
          }}>
            Reliable, efficient air-conditioning installation, maintenance and repair for homes and businesses — backed by 9+ years of trade expertise and straightforward, fixed pricing.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <Button variant="primary" size="xl" href="#contact" trailingIcon="arrow-right">Get your free quote</Button>
            <Button variant="onDark" size="xl" href="#pricing" leadingIcon="tag">View pricing</Button>
          </div>

          {/* Trust strip */}
          <div style={{
            display: "flex", gap: 10, flexWrap: "wrap", marginTop: 32,
            paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.14)", maxWidth: 620,
          }}>
            {[
              { icon: "shield-check", label: "F-Gas certified" },
              { icon: "badge-check",  label: "Refcom registered" },
              { icon: "calendar",     label: "9+ years experience" },
              { icon: "clock",        label: "2-hour response" },
            ].map(t => (
              <span key={t.label} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: "rgba(255,255,255,0.86)", fontSize: 13, fontWeight: 500,
              }}>
                <Icon name={t.icon} size={16} color="var(--brand-blue-200)"/>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Floating "Engineered detail" technical readout card */}
        <div className="st-hero-readout" style={{
          position: "absolute", right: 28, bottom: -40, zIndex: 2,
          width: 320,
          background: "linear-gradient(155deg, rgba(0,18,48,0.92) 0%, rgba(7,68,117,0.88) 100%)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 16, padding: "22px 22px", color: "#fff",
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", color: "var(--brand-blue-200)", textTransform: "uppercase" }}>
              Live install · Dover, Kent
            </span>
            <span style={{
              width: 8, height: 8, borderRadius: 99, background: "var(--success-500)",
              boxShadow: "0 0 0 4px rgba(18,183,106,0.22)",
            }}/>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "end" }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6, fontWeight: 600 }}>Set temp</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1, color: "#fff" }}>
                21<span style={{ fontSize: 18, color: "var(--brand-blue-200)", marginLeft: 4 }}>°C</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6, fontWeight: 600 }}>Mode</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6, color: "#fff" }}>
                <Icon name="snowflake" size={14} color="var(--brand-blue-300)"/>
                Cool · Auto
              </div>
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.14)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "rgba(255,255,255,0.8)" }}>
            <span>Daikin Perfera · 3.5 kW</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--success-500)", fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--success-500)" }}/>
              Running
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── BRAND PARTNER STRIP ───────────────────────────────────────────
function BrandStrip() {
  // Inline monochrome SVG wordmark placeholders
  const Wordmark = ({ children, sub, italic, weight = 700, letter = "0.04em" }) => (
    <span style={{
      fontWeight: weight, fontSize: 26, letterSpacing: letter,
      fontStyle: italic ? "italic" : "normal",
      color: "var(--gray-400)", display: "inline-flex", alignItems: "baseline", gap: 6,
      fontFamily: "var(--font-sans)",
    }}>
      {children}
      {sub && <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", color: "var(--gray-400)" }}>{sub}</span>}
    </span>
  );
  return (
    <section style={{ background: "#fff", padding: "56px 0", borderBottom: "1px solid var(--gray-100)" }}>
      <Container>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 28,
        }}>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gray-500)", fontWeight: 600 }}>
            Authorised installer of premium HVAC manufacturers
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 32, width: "100%",
            alignItems: "center", justifyItems: "center", filter: "grayscale(1)", opacity: 0.85,
          }} className="st-brand-grid">
            <Wordmark italic letter="-0.01em">DAIKIN</Wordmark>
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
              <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.02em", color: "var(--gray-400)" }}>MITSUBISHI</span>
              <span style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--gray-400)", marginTop: 4, fontWeight: 600 }}>ELECTRIC</span>
            </span>
            <Wordmark weight={500} letter="-0.005em">Panasonic</Wordmark>
            <Wordmark>TOSHIBA</Wordmark>
            <Wordmark weight={800} letter="0.06em">FUJITSU</Wordmark>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────
function About() {
  return (
    <Section id="about" label="About" style={{ background: "#fff", padding: "112px 0 96px" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 80, alignItems: "start" }} className="st-about-grid">
          <div>
            <Eyebrow>About Set Temp</Eyebrow>
            <h2 style={{
              fontSize: "clamp(32px, 3.6vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.022em",
              fontWeight: 600, color: "var(--brand-navy-700)", margin: "20px 0 24px", textWrap: "balance",
            }}>
              A fresh, independent venture — built on nine years of trade craft.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--gray-700)", margin: 0, maxWidth: 540 }}>
              At Set Temp Air Conditioning, we specialise in delivering high-quality air conditioning solutions for residential, commercial and industrial spaces. Our expert team provides reliable installation, maintenance and repair services, ensuring your comfort in every season.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--gray-700)", margin: "16px 0 0", maxWidth: 540 }}>
              We combine the technical authority of long-established firms with the responsiveness and transparency of a small, owner-led team — so you get proper engineering without the runaround.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Button variant="navy" size="lg" href="#services" trailingIcon="arrow-right">Explore services</Button>
              <Button variant="ghost" size="lg" href="#contact" leadingIcon="phone">Speak to an engineer</Button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Stat icon="calendar" value="9+ yrs" label="Trade experience across residential & commercial systems" tone="blue"/>
            <Stat icon="ruler" value="100%" label="Tailored installs — every system sized to your space" tone="navy"/>
            <Stat icon="shield-check" value="F-Gas" label="Certified handling of refrigerants under UK regulations" tone="blue"/>
            <Stat icon="award" value="Refcom" label="Registered company-level compliance for HVAC contractors" tone="navy"/>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── SERVICES ──────────────────────────────────────────────────────
function ServiceCard({ icon, title, description, points, accent = "blue" }) {
  const accents = {
    blue:  { icBg: "var(--brand-blue-50)",  icFg: "var(--brand-blue-600)",  link: "var(--brand-blue-600)" },
    navy:  { icBg: "var(--brand-navy-50)",  icFg: "var(--brand-navy-700)",  link: "var(--brand-navy-700)" },
    amber: { icBg: "var(--warning-50)",     icFg: "var(--warning-700)",     link: "var(--warning-700)" },
  };
  const a = accents[accent] || accents.blue;
  return (
    <div className="st-service-card" style={{
      display: "flex", flexDirection: "column", gap: 18,
      background: "#fff", border: "1px solid var(--gray-200)", borderRadius: 16,
      padding: "32px 28px", transition: "all 240ms var(--ease-out-quart)",
      minHeight: 360,
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12, background: a.icBg, color: a.icFg,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name={icon} size={26} strokeWidth={1.6} />
      </div>
      <h3 style={{ margin: 0, fontSize: 24, fontWeight: 600, letterSpacing: "-0.015em", color: "var(--brand-navy-700)" }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--gray-600)" }}>
        {description}
      </p>
      <ul style={{
        listStyle: "none", padding: 0, margin: "4px 0 0",
        display: "flex", flexDirection: "column", gap: 6,
      }}>
        {points.map(p => (
          <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--gray-700)", lineHeight: 1.5 }}>
            <Icon name="check" size={16} color="var(--brand-blue-600)" style={{ marginTop: 2 }}/>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" style={{
        marginTop: "auto", paddingTop: 14, fontWeight: 600, fontSize: 14, color: a.link,
        display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none",
      }}>
        Enquire now <Icon name="arrow-right" size={14}/>
      </a>
    </div>
  );
}

function Services() {
  const [active, setActive] = React.useState("all");
  const filters = [
    { id: "all", label: "All services" },
    { id: "install", label: "Installation" },
    { id: "maintain", label: "Maintenance" },
    { id: "repair", label: "Repair" },
  ];
  const services = [
    { tag: "install", icon: "drafting-compass", accent: "blue", title: "Installation",
      description: "Tailored system design, premium unit selection and a flawless, hidden-route layout. From single-room split systems to full multi-zone setups.",
      points: ["Free site survey & thermal load calculation", "Premium unit selection from leading manufacturers", "Discreet pipework, containment & electrical work"] },
    { tag: "maintain", icon: "wrench", accent: "navy", title: "Maintenance",
      description: "Routine servicing that keeps systems running efficiently, lowers running costs and maximises equipment lifespan. Annual or bi-annual plans.",
      points: ["Filter clean & refrigerant pressure check", "Energy-efficiency tuning & coil clean", "Manufacturer-warranty protection"] },
    { tag: "repair", icon: "zap", accent: "amber", title: "Repair",
      description: "Fast, reliable fault diagnostics and component fixes to restore comfort rapidly. F-Gas certified engineers, fully insured.",
      points: ["2-hour response across the region", "On-the-van parts for common faults", "Transparent fixed-price quotes before work"] },
  ];
  const filtered = active === "all" ? services : services.filter(s => s.tag === active);
  return (
    <Section id="services" label="Services" style={{ background: "var(--gray-50)", padding: "112px 0" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 48, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Services &amp; solutions</Eyebrow>
            <h2 style={{
              fontSize: "clamp(32px, 3.6vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.022em",
              fontWeight: 600, color: "var(--brand-navy-700)", margin: "20px 0 16px", textWrap: "balance",
            }}>
              Install, service, repair — one team across every job.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--gray-600)", margin: 0 }}>
              Three core capabilities, all delivered in-house. Our engineers handle the whole lifecycle, so the team that installs your system is the team that keeps it running.
            </p>
          </div>
          <div style={{ display: "inline-flex", padding: 4, background: "#fff", borderRadius: 10, border: "1px solid var(--gray-200)", boxShadow: "var(--shadow-xs)" }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => setActive(f.id)} style={{
                padding: "8px 14px", borderRadius: 8, border: 0, cursor: "pointer",
                background: active === f.id ? "var(--brand-navy-700)" : "transparent",
                color: active === f.id ? "#fff" : "var(--brand-navy-700)",
                fontWeight: 600, fontSize: 13, fontFamily: "var(--font-sans)",
                transition: "all 150ms",
              }}>{f.label}</button>
            ))}
          </div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: filtered.length === 1 ? "minmax(0, 520px)" : "repeat(3, 1fr)",
          gap: 20, justifyContent: filtered.length === 1 ? "center" : "stretch",
        }} className="st-services-grid">
          {filtered.map(s => <ServiceCard key={s.title} {...s}/>)}
        </div>
      </Container>
    </Section>
  );
}

// ── SECTORS ───────────────────────────────────────────────────────
function SectorCard({ photo, alt, icon, title, examples, tag }) {
  return (
    <article className="st-sector-card" style={{
      position: "relative", borderRadius: 18, overflow: "hidden",
      aspectRatio: "4 / 5", color: "#fff", cursor: "pointer",
      boxShadow: "var(--shadow-md)",
    }}>
      <img src={photo} alt={alt} style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", transition: "transform 500ms var(--ease-out-quart)",
      }}/>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,18,48,0.15) 0%, rgba(0,18,48,0.55) 55%, rgba(0,18,48,0.96) 100%)",
      }}/>
      <div style={{
        position: "absolute", top: 18, left: 18,
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "6px 12px", borderRadius: 99,
        background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.22)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em",
      }}>
        <Icon name={icon} size={14}/>{tag}
      </div>
      <div style={{
        position: "absolute", left: 24, right: 24, bottom: 24,
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        <h3 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.15, color: "#fff" }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "rgba(255,255,255,0.85)" }}>
          {examples}
        </p>
        <a href="#contact" style={{
          marginTop: 8, display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none",
        }}>
          Discuss your project <Icon name="arrow-up-right" size={14}/>
        </a>
      </div>
    </article>
  );
}

function Sectors() {
  return (
    <Section id="sectors" label="Sectors" style={{ background: "#fff", padding: "112px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 48 }} className="st-sector-head">
          <div>
            <Eyebrow>Sector specialisms</Eyebrow>
            <h2 style={{
              fontSize: "clamp(32px, 3.6vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.022em",
              fontWeight: 600, color: "var(--brand-navy-700)", margin: "20px 0 0", textWrap: "balance",
            }}>
              From quiet bedrooms to busy server rooms — sized and engineered for the space.
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--gray-600)", margin: 0, maxWidth: 520 }}>
            Every environment has its own thermal load, noise tolerance and uptime requirements. We design specifically for yours — never one-size-fits-all.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="st-sector-grid">
          <SectorCard photo={(window.__resources && window.__resources.photoResidential) || "assets/photo-compact-residential.jpg"} alt="Compact wall-mounted residential air conditioning unit on a brick wall" icon="home" tag="RESIDENTIAL" title="Homes &amp; living spaces" examples="Houses, apartments, conservatories, loft conversions and home offices. Quiet operation, discreet pipework, hidden where it should be."/>
          <SectorCard photo={(window.__resources && window.__resources.photoCommercial) || "assets/photo-multi-unit-wall.jpg"} alt="Multiple Daikin split-system condensers neatly mounted in a stacked array on a commercial facade" icon="building-2" tag="COMMERCIAL" title="Offices, retail &amp; clinics" examples="Workspaces, restaurants, surgery rooms and server rooms. Reliable cooling under load, with maintenance plans built around your hours."/>
          <SectorCard photo={(window.__resources && window.__resources.photoIndustrial) || "assets/photo-commercial-ducting.jpg"} alt="Large-scale ductwork and lighting in a commercial industrial facility" icon="factory" tag="INDUSTRIAL" title="Warehouses &amp; facilities" examples="Manufacturing workshops, distribution centres and large-scale facilities. Heavy-duty systems engineered for continuous duty cycles."/>
        </div>
      </Container>
    </Section>
  );
}

// ── MID PAGE BANNER ───────────────────────────────────────────────
function SiteSurveyBanner() {
  return (
    <section style={{ background: "var(--brand-navy-700)", padding: "0 28px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.5,
        background: "radial-gradient(80% 100% at 80% 50%, rgba(16,128,208,0.32), transparent 60%), radial-gradient(60% 100% at 0% 100%, rgba(247,144,9,0.10), transparent 60%)",
      }}/>
      <Container style={{ position: "relative", padding: "72px 28px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 60, alignItems: "center",
        }} className="st-banner-grid">
          <div>
            <Pill tone="navy" icon="map-pin" style={{
              background: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.20)", color: "#fff",
            }}>Free site survey</Pill>
            <h2 style={{
              fontSize: "clamp(28px, 3.3vw, 42px)", lineHeight: 1.12, letterSpacing: "-0.022em",
              fontWeight: 600, color: "#fff", margin: "16px 0 14px", textWrap: "balance", maxWidth: 720,
            }}>
              Not sure what system fits your space?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,0.78)", margin: 0, maxWidth: 620 }}>
              We offer completely free, no-obligation home and workplace site surveys. Our engineers assess your layout, discuss your comfort goals and design a system tailored to your budget — no hard sell, just a clear plan.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <Button variant="primary" size="xl" href="#contact" trailingIcon="arrow-right" style={{ width: "100%", justifyContent: "space-between" }}>
              Book free site survey
            </Button>
            <Button variant="onDark" size="xl" href={`tel:${PHONE_TEL}`} leadingIcon="phone" style={{ width: "100%", justifyContent: "space-between" }}>
              {PHONE_DISPLAY}
            </Button>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>
              Typical response within 2 hours · Mon–Sun
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { UrgentBanner, Header, Hero, BrandStrip, About, Services, ServiceCard, Sectors, SectorCard, SiteSurveyBanner, PHONE_DISPLAY, PHONE_TEL, EMAIL });
