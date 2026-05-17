// Set Temp — sections B (launch offer, energy guide, FAQ, trust, contact, footer)

// ── LAUNCH OFFER / PRICING ────────────────────────────────────────
function LaunchOffer() {
  const included = [
    { icon: "clipboard-check", title: "Free site survey", body: "Initial visit, thermal-load calculation and written quote." },
    { icon: "package", title: "Premium internal unit", body: "Wall or floor-mounted unit from a tier-1 manufacturer." },
    { icon: "wind", title: "External condenser", body: "Discreetly sited, vibration-isolated outdoor unit." },
    { icon: "git-fork", title: "Refrigeration pipework", body: "All pipework, containment and electrical connections." },
    { icon: "check-circle-2", title: "Testing & commissioning", body: "Full performance test plus a client walkthrough." },
    { icon: "shield-check", title: "Manufacturer warranty", body: "Full warranty protection on parts & equipment." },
  ];
  return (
    <Section id="pricing" label="Pricing" style={{ background: "#fff", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(60% 50% at 100% 0%, var(--sky-50), transparent 60%), radial-gradient(40% 40% at 0% 100%, var(--warning-50), transparent 60%)",
        opacity: 0.55, pointerEvents: "none",
      }}/>
      <Container style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
          <Eyebrow>Summer launch offer</Eyebrow>
          <h2 style={{
            fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.024em",
            fontWeight: 600, color: "var(--brand-navy-700)", margin: "20px 0 18px", textWrap: "balance",
          }}>
            Stay cool this summer.<br/>
            <span style={{ color: "var(--warning-600)" }}>Warm</span> through winter.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--gray-600)", margin: 0 }}>
            A straightforward launch package on a complete back-to-back installation. Premium unit, full pipework, commissioning and warranty — fixed price, no surprises.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 24, alignItems: "stretch",
        }} className="st-pricing-grid">
          {/* Pricing card */}
          <div style={{
            background: "var(--brand-navy-700)", color: "#fff", borderRadius: 22,
            padding: "40px 36px", position: "relative", overflow: "hidden",
            boxShadow: "var(--shadow-2xl)",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(80% 100% at 100% 0%, rgba(16,128,208,0.28), transparent 60%)",
              pointerEvents: "none",
            }}/>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 20, height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Pill tone="navy" icon="sparkles" style={{
                  background: "rgba(247,144,9,0.16)", borderColor: "rgba(247,144,9,0.40)",
                  color: "var(--warning-500)", fontWeight: 600,
                }}>Launch pricing</Pill>
                <span style={{ fontSize: 11, letterSpacing: "0.16em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>Inc. VAT</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                  Full installation from
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontSize: 84, lineHeight: 0.95, fontWeight: 700, letterSpacing: "-0.04em" }}>£1,200</span>
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                  Standard back-to-back install · single bedroom or home-office unit
                </div>
              </div>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
                paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.14)",
              }}>
                <div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Typical job</div>
                  <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>1–2 days on-site</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Warranty</div>
                  <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>Up to 7 years</div>
                </div>
              </div>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
                <Button variant="amber" size="xl" href="#contact" trailingIcon="arrow-right" fullWidth style={{ justifyContent: "space-between" }}>
                  Claim launch pricing
                </Button>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
                  Quote valid for 30 days · finance options available
                </div>
              </div>
            </div>
          </div>

          {/* Included list */}
          <div style={{
            background: "#fff", border: "1px solid var(--gray-200)", borderRadius: 22,
            padding: "36px 36px", boxShadow: "var(--shadow-sm)",
            display: "flex", flexDirection: "column", gap: 18,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em", color: "var(--brand-navy-700)", margin: 0 }}>
                What every installation includes
              </h3>
              <Pill tone="sky" icon="check">All 6 as standard</Pill>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="st-included-grid">
              {included.map(i => (
                <div key={i.title} style={{
                  display: "flex", gap: 12,
                  padding: "14px 14px", border: "1px solid var(--gray-100)",
                  borderRadius: 12, background: "var(--gray-50)",
                }}>
                  <span style={{
                    width: 36, height: 36, flexShrink: 0, borderRadius: 8,
                    background: "#fff", color: "var(--brand-blue-600)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--gray-200)",
                  }}>
                    <Icon name={i.icon} size={18}/>
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--brand-navy-700)", lineHeight: 1.3 }}>{i.title}</div>
                    <div style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.45, marginTop: 2 }}>{i.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px", background: "var(--sky-50)", borderRadius: 10,
              border: "1px dashed var(--brand-blue-200)", fontSize: 13.5, color: "var(--brand-navy-700)",
            }}>
              <Icon name="info" size={16} color="var(--brand-blue-600)"/>
              Multi-room or commercial fit-out? We'll quote on the same fixed-price basis after a free survey.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── ENERGY GUIDE ──────────────────────────────────────────────────
function GuideCard({ icon, eyebrow, title, excerpt, readTime, accent = "blue" }) {
  const a = accent === "amber"
    ? { bg: "var(--warning-50)", fg: "var(--warning-700)", line: "var(--warning-500)" }
    : accent === "navy"
    ? { bg: "var(--brand-navy-50)", fg: "var(--brand-navy-700)", line: "var(--brand-navy-500)" }
    : { bg: "var(--brand-blue-50)", fg: "var(--brand-blue-600)", line: "var(--brand-blue-500)" };
  return (
    <article className="st-guide-card" style={{
      display: "flex", flexDirection: "column", overflow: "hidden",
      background: "#fff", border: "1px solid var(--gray-200)", borderRadius: 16,
      transition: "all 240ms var(--ease-out-quart)",
    }}>
      {/* Editorial header — abstract technical visual */}
      <div style={{
        height: 160, position: "relative", overflow: "hidden", background: a.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `repeating-linear-gradient(90deg, ${a.line}11 0 1px, transparent 1px 28px), repeating-linear-gradient(0deg, ${a.line}11 0 1px, transparent 1px 28px)`,
        }}/>
        <div style={{
          width: 72, height: 72, borderRadius: 18, background: "#fff", color: a.fg,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px -8px rgba(16,24,40,0.18)", position: "relative", zIndex: 1,
        }}>
          <Icon name={icon} size={32} strokeWidth={1.5}/>
        </div>
      </div>
      <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: a.fg, textTransform: "uppercase" }}>{eyebrow}</div>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", color: "var(--brand-navy-700)", lineHeight: 1.25 }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--gray-600)" }}>{excerpt}</p>
        <div style={{
          marginTop: "auto", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center",
          borderTop: "1px solid var(--gray-100)",
        }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--gray-500)" }}>
            <Icon name="clock" size={13}/> {readTime}
          </span>
          <a href="#" style={{
            fontSize: 14, fontWeight: 600, color: "var(--brand-blue-600)", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>Read guide <Icon name="arrow-right" size={14}/></a>
        </div>
      </div>
    </article>
  );
}

function EnergyGuide() {
  return (
    <Section id="guides" label="Energy Guide" style={{ background: "var(--gray-50)", padding: "112px 0" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Maintenance &amp; efficiency</Eyebrow>
            <h2 style={{
              fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.022em",
              fontWeight: 600, color: "var(--brand-navy-700)", margin: "20px 0 14px", textWrap: "balance",
            }}>
              Get the most out of your system.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--gray-600)", margin: 0 }}>
              Short technical reads from our engineers on energy savings, indoor air quality and year-round reliability.
            </p>
          </div>
          <Button variant="secondary" size="lg" trailingIcon="arrow-right" href="#">All guides</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="st-guides-grid">
          <GuideCard icon="zap" eyebrow="Energy" accent="blue"
            title="How regular servicing cuts your energy bills"
            excerpt="A clean coil and properly charged refrigerant can reduce running costs by up to 30%. Here's what an annual service actually does."
            readTime="4 min read"/>
          <GuideCard icon="wind" eyebrow="Air quality" accent="navy"
            title="Indoor air quality, beyond just cool air"
            excerpt="Modern filtration, humidity control and the case for replacing filters on schedule — not when you remember."
            readTime="6 min read"/>
          <GuideCard icon="thermometer-sun" eyebrow="Year-round" accent="amber"
            title="Heat-pump heating in a UK winter, explained"
            excerpt="Air-to-air heat pumps deliver 3–4× the heat per kWh of a fan heater. Why your AC is also your most efficient heater."
            readTime="5 min read"/>
        </div>
      </Container>
    </Section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────
function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{
      background: "#fff", border: "1px solid var(--gray-200)",
      borderRadius: 14, overflow: "hidden",
      transition: "all 200ms var(--ease-out-quart)",
      boxShadow: open ? "var(--shadow-md)" : "var(--shadow-xs)",
      borderColor: open ? "var(--brand-blue-200)" : "var(--gray-200)",
    }}>
      <button onClick={onToggle} style={{
        width: "100%", textAlign: "left", padding: "20px 24px",
        background: "transparent", border: 0, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
        fontFamily: "var(--font-sans)", color: "var(--brand-navy-700)",
        fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em",
      }}>
        <span>{q}</span>
        <span style={{
          width: 32, height: 32, flexShrink: 0, borderRadius: 99,
          background: open ? "var(--brand-blue-500)" : "var(--gray-100)",
          color: open ? "#fff" : "var(--brand-navy-700)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          transition: "all 200ms var(--ease-out-quart)",
          transform: open ? "rotate(180deg)" : "rotate(0)",
        }}>
          <Icon name="chevron-down" size={18}/>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: "hidden",
        transition: "max-height 320ms var(--ease-out-quart), opacity 200ms",
        opacity: open ? 1 : 0,
      }}>
        <div style={{
          padding: "0 24px 22px", fontSize: 15.5, lineHeight: 1.6,
          color: "var(--gray-700)", maxWidth: 680,
        }}>{a}</div>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: "How long does a standard home installation take?", a: "A standard single-room (back-to-back) install is typically completed within a single day. Larger multi-room or multi-zone systems take 1–2 days, with minimal disruption — dust sheets down, surfaces cleaned, no overnight stays required." },
    { q: "What exactly is included in the £1,200 starting price?", a: "The launch price covers a standard back-to-back installation of a premium entry-level bedroom or home-office unit. That includes the free site survey, the indoor unit, the outdoor condenser, all pipework and electrical connections, commissioning, and a manufacturer warranty. Longer pipe runs or non-standard installs are quoted transparently after the survey." },
    { q: "How often should my air conditioning system be serviced?", a: "We recommend an annual service for residential systems and twice-yearly for commercial settings. Routine servicing maintains peak efficiency, keeps refrigerant charge within tolerance, and is required to preserve most manufacturer warranties." },
    { q: "Do modern AC systems heat as well as cool?", a: "Yes — all the systems we install use air-to-air heat-pump technology, providing genuinely cost-effective heating through winter. Per kWh of electricity, a modern heat pump typically produces 3–4 kWh of heat, making it the most efficient electric heating you can put in a room." },
    { q: "Are your engineers certified?", a: "Every engineer on the team is F-Gas certified for refrigerant handling, and Set Temp is registered with Refcom for company-level compliance. Public liability and employer's liability insurance is in place on every job." },
    { q: "What areas do you cover?", a: "We cover the South East, Kent, and London. For larger commercial or industrial jobs we travel further — call us with your postcode and we'll confirm coverage before quoting." },
  ];
  return (
    <Section id="faqs" label="FAQs" style={{ background: "#fff", padding: "112px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.4fr", gap: 80, alignItems: "start" }} className="st-faq-grid">
          <div className="st-faq-sticky" style={{ position: "sticky", top: 100 }}>
            <Eyebrow>FAQs</Eyebrow>
            <h2 style={{
              fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.022em",
              fontWeight: 600, color: "var(--brand-navy-700)", margin: "20px 0 16px", textWrap: "balance",
            }}>
              Straight answers, no jargon.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--gray-600)", margin: "0 0 28px" }}>
              The questions we get asked most often, answered properly. Can't find what you need? Give us a call — we won't keep you on hold.
            </p>
            <div style={{
              padding: 18, background: "var(--sky-50)", borderRadius: 12,
              border: "1px solid var(--sky-100)", display: "flex", gap: 12,
            }}>
              <span style={{
                width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "#fff",
                display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--brand-blue-600)",
              }}><Icon name="message-circle" size={18}/></span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--brand-navy-700)" }}>Still got a question?</div>
                <a href={`tel:${PHONE_TEL}`} style={{ fontSize: 14, color: "var(--brand-blue-700)", fontWeight: 600, textDecoration: "none" }}>
                  Call {PHONE_DISPLAY} <Icon name="arrow-up-right" size={12} style={{ verticalAlign: -1, marginLeft: 2 }}/>
                </a>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((it, i) => (
              <FAQItem key={i} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)}/>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── TRUST / REVIEWS ───────────────────────────────────────────────
function ReviewCard({ name, location, service, body, rating = 5, when, featured }) {
  return (
    <div style={{
      background: featured ? "var(--brand-navy-700)" : "#fff",
      color: featured ? "#fff" : "var(--brand-navy-700)",
      border: featured ? "1px solid var(--brand-navy-700)" : "1px solid var(--gray-200)",
      borderRadius: 16, padding: "26px 26px", display: "flex", flexDirection: "column", gap: 14,
      boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-xs)",
      minHeight: 280,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "inline-flex", gap: 1 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ fontSize: 16, lineHeight: 1, color: i < rating ? "var(--warning-500)" : "var(--gray-300)" }}>★</span>
          ))}
        </div>
        <span style={{ fontSize: 12, color: featured ? "rgba(255,255,255,0.5)" : "var(--gray-500)" }}>{when}</span>
      </div>
      <p style={{
        margin: 0, fontSize: 15.5, lineHeight: 1.55,
        color: featured ? "rgba(255,255,255,0.9)" : "var(--gray-700)",
      }}>“{body}”</p>
      <div style={{
        marginTop: "auto", paddingTop: 14,
        borderTop: featured ? "1px solid rgba(255,255,255,0.14)" : "1px solid var(--gray-100)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
      }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{name}</div>
          <div style={{ fontSize: 13, color: featured ? "rgba(255,255,255,0.6)" : "var(--gray-500)" }}>{location}</div>
        </div>
        <span style={{
          padding: "4px 10px", borderRadius: 99, fontSize: 11, fontWeight: 600,
          letterSpacing: "0.06em", textTransform: "uppercase",
          background: featured ? "rgba(255,255,255,0.12)" : "var(--brand-blue-50)",
          color: featured ? "#fff" : "var(--brand-blue-700)",
          border: featured ? "1px solid rgba(255,255,255,0.18)" : "1px solid var(--brand-blue-100)",
        }}>{service}</span>
      </div>
    </div>
  );
}

function Trust() {
  const reviews = [
    { name: "Sarah K.", location: "Kent", service: "Install", featured: true, body: "Jack who came to install my aircon was wonderfully kind and hard working. He explained everything to me so clearly whilst installing it and guided me on all its different settings and uses once installed. He did a fabulous job and it looks great. It's been neatly finished and the product does its job very well. Thank goodness for it in this heatwave. I've been enjoying the nice cool breeze everyday since then. Can't wait to try it for heating in the winter!", rating: 5, when: "1 week ago" },
    { name: "Emma R.", location: "Kent", service: "Install", body: "Having used Set Temp for my home salon, they were very professional and knowledgeable with their services. Was very respectful with cleaning up after the job was finished, customer service was excellent. Definitely recommend using these.", rating: 5, when: "2 weeks ago" },
    { name: "Mark T.", location: "Kent", service: "Install", body: "I've used Set Temp on multiple projects and they never fail to deliver a 10/10 service and would definitely recommend. Well done guys keep up the good work 👍", rating: 5, when: "1 month ago" },
  ];
  return (
    <section style={{ background: "var(--sky-50)", padding: "112px 0", position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.6,
        background: "radial-gradient(60% 50% at 50% 0%, #fff, transparent 70%)",
        pointerEvents: "none",
      }}/>
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 48, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Reliability you can feel</Eyebrow>
            <h2 style={{
              fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.022em",
              fontWeight: 600, color: "var(--brand-navy-700)", margin: "20px 0 14px", textWrap: "balance",
            }}>
              What our clients say.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--gray-600)", margin: 0 }}>
              Verified residential and commercial customers. We ask for honest feedback after every job.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: "var(--brand-navy-700)", letterSpacing: "-0.02em", lineHeight: 1 }}>5.0</span>
                <div style={{ display: "inline-flex", gap: 1 }}>
                  {[0,1,2,3,4].map(i => <span key={i} style={{ fontSize: 16, lineHeight: 1, color: "var(--warning-500)" }}>★</span>)}
                </div>
              </div>
              <div style={{ fontSize: 12, color: "var(--gray-600)" }}>Average rating · 7 reviews</div>
            </div>
            <div style={{ width: 1, height: 40, background: "var(--gray-300)" }}/>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontWeight: 700, color: "var(--brand-navy-700)", fontSize: 14 }}>★ Google</span>
              <span style={{ fontWeight: 600, color: "var(--gray-700)", fontSize: 13 }}>Verified reviews</span>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="st-reviews-grid">
          {reviews.map(r => <ReviewCard key={r.name} {...r}/>)}
        </div>
      </Container>
    </section>
  );
}

// ── CONTACT FORM ──────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", type: "residential", message: "" });
  const [status, setStatus] = React.useState("idle"); // idle | submitting | done | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setStatus("submitting");
    setTimeout(() => setStatus("done"), 900);
  };
  return (
    <Section id="contact" label="Contact" style={{ background: "#fff", padding: "112px 0" }}>
      <Container>
        <div style={{
          display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 0,
          background: "#fff", borderRadius: 22, overflow: "hidden",
          border: "1px solid var(--gray-200)", boxShadow: "var(--shadow-lg)",
        }} className="st-contact-grid">
          {/* Left: details */}
          <div className="st-contact-left" style={{
            background: "var(--brand-navy-700)", color: "#fff",
            padding: "48px 44px", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(70% 90% at 100% 0%, rgba(16,128,208,0.30), transparent 60%)",
              pointerEvents: "none",
            }}/>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 24, height: "100%" }}>
              <Pill tone="navy" icon="zap" style={{
                background: "rgba(247,144,9,0.16)", borderColor: "rgba(247,144,9,0.40)",
                color: "var(--warning-500)", fontWeight: 600, alignSelf: "flex-start",
              }}>Quick responses</Pill>
              <h2 style={{
                fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em",
                fontWeight: 600, margin: 0, color: "#fff", textWrap: "balance",
              }}>
                Give Jack a call.
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "rgba(255,255,255,0.78)" }}>
                Drop us a few details and we'll be in touch quickly with a response.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
                {[
                  { icon: "phone",   label: "Phone",   value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
                  { icon: "mail",    label: "Email",   value: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: "map-pin", label: "Coverage", value: "South East · Kent · London", href: null },
                  { icon: "clock",   label: "Hours",   value: "Mon–Sun · 7am – 9pm", href: null },
                ].map(c => (
                  <div key={c.label} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.12)",
                  }}>
                    <span style={{
                      width: 36, height: 36, flexShrink: 0, borderRadius: 10,
                      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      color: "var(--brand-blue-200)",
                    }}><Icon name={c.icon} size={16}/></span>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{c.label}</span>
                      {c.href
                        ? <a href={c.href} style={{ color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600 }}>{c.value}</a>
                        : <span style={{ fontSize: 15, fontWeight: 500 }}>{c.value}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: "auto", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)",
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Compliance</span>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.08)", fontSize: 12, fontWeight: 600 }}>F-GAS</span>
                  <span style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.08)", fontSize: 12, fontWeight: 600 }}>REFCOM</span>
                  <span style={{ padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.08)", fontSize: 12, fontWeight: 600 }}>£5M PUBLIC LIABILITY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="st-contact-right" style={{ padding: "44px 44px", position: "relative" }}>
            {status === "done" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", padding: "32px 0" }}>
                <span style={{
                  width: 56, height: 56, borderRadius: 99, background: "var(--success-50)", color: "var(--success-600)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}><Icon name="check" size={28}/></span>
                <h3 style={{ margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--brand-navy-700)" }}>
                  Thanks, {form.name.split(" ")[0] || "we got it"}.
                </h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--gray-600)", maxWidth: 460 }}>
                  An engineer will call you on <strong style={{ color: "var(--brand-navy-700)" }}>{form.phone}</strong> within 2 working hours to talk through your project and book a free site survey.
                </p>
                <div style={{
                  marginTop: 8, padding: "16px 18px", background: "var(--sky-50)", borderRadius: 12,
                  border: "1px solid var(--sky-100)", display: "flex", gap: 12, alignItems: "center",
                }}>
                  <Icon name="calendar-check" size={20} color="var(--brand-blue-600)"/>
                  <span style={{ fontSize: 14, color: "var(--brand-navy-700)", fontWeight: 500 }}>
                    Reference: <strong style={{ fontFamily: "var(--font-mono)" }}>ST-{Date.now().toString().slice(-6)}</strong>
                  </span>
                </div>
                <Button variant="ghost" size="md" leadingIcon="arrow-left"
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", type: "residential", message: "" }); }}>
                  Submit another enquiry
                </Button>
              </div>
            ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em", color: "var(--brand-navy-700)" }}>
                  Request a free consultation
                </h3>
                <p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--gray-600)" }}>
                  We'll try to respond inside 2 working hours.
                </p>
              </div>
              <Field label="Full name" placeholder="Full Name" value={form.name} onChange={set("name")} icon="user" required/>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="st-form-row">
                <Field label="Email address" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} icon="mail" required/>
                <Field label="Phone number" type="tel" placeholder="07700 900 123" value={form.phone} onChange={set("phone")} icon="phone" required/>
              </div>
              <Field label="Project type" as="select" value={form.type} onChange={set("type")} icon="building"
                options={[
                  { value: "residential", label: "Residential — home install or service" },
                  { value: "commercial",  label: "Commercial — office, retail, hospitality" },
                  { value: "industrial",  label: "Industrial — workshop, warehouse" },
                  { value: "repair",      label: "Repair-only — existing system fault" },
                ]}/>
              <Field label="Tell us about your project" as="textarea" rows={4}
                placeholder="A few words on the space, number of rooms, any deadlines or constraints…"
                value={form.message} onChange={set("message")}/>
              <div className="st-contact-form-footer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginTop: 4, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, color: "var(--gray-500)", maxWidth: 360, lineHeight: 1.4 }}>
                  By submitting you agree to our privacy policy. We never share details and don't run marketing follow-ups.
                </span>
                <Button variant="primary" size="xl" type="submit" trailingIcon={status === "submitting" ? "loader-2" : "arrow-right"}
                  disabled={status === "submitting"} className="st-contact-submit">
                  {status === "submitting" ? "Sending…" : "Request my free quote"}
                </Button>
              </div>
            </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "var(--brand-navy-900)", color: "#fff", paddingTop: 56 }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 48, flexWrap: "wrap", paddingBottom: 48 }}>
          <div style={{ maxWidth: 400 }}>
            <Logo inverted size={40}/>
            <p style={{ margin: "20px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
              Reliable comfort in every season — installed, serviced and repaired by an owner-led team with 9+ years of trade experience.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14.5, paddingTop: 4 }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: "#fff", textDecoration: "none", fontWeight: 600, display: "inline-flex", gap: 10, alignItems: "center" }}>
              <Icon name="phone" size={15} color="var(--brand-blue-300)"/>{PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", display: "inline-flex", gap: 10, alignItems: "center" }}>
              <Icon name="mail" size={15} color="var(--brand-blue-300)"/>{EMAIL}
            </a>
            <span style={{ color: "rgba(255,255,255,0.55)", display: "inline-flex", gap: 10, alignItems: "center" }}>
              <Icon name="map-pin" size={15} color="var(--brand-blue-300)"/>South East · Kent · London
            </span>
          </div>
        </div>

        {/* Certifications row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap",
          padding: "26px 0", borderTop: "1px solid rgba(255,255,255,0.10)", borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
            Accreditations &amp; trade standards
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "F-Gas", sub: "Refrigerant" },
              { label: "Refcom", sub: "Elite" },
              { label: "Gas Safe", sub: "Register" },
              { label: "NICEIC", sub: "Electrical" },
            ].map(c => (
              <span key={c.label} style={{
                display: "inline-flex", flexDirection: "column", padding: "8px 14px",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8, lineHeight: 1.1,
              }}>
                <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.04em" }}>{c.label}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{c.sub}</span>
              </span>
            ))}
          </div>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap",
          padding: "22px 0 28px", fontSize: 13, color: "rgba(255,255,255,0.55)",
        }}>
          <span>© 2026 Set Temp Air Conditioning Ltd. Company No. 14729581. Registered in England &amp; Wales.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy policy</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms of service</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Cookie preferences</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { LaunchOffer, EnergyGuide, GuideCard, FAQ, FAQItem, Trust, ReviewCard, Contact, Footer });
