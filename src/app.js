// Set Temp — app shell
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "banner": "urgent",
  "showLaunch": true,
  "showGuides": true,
  "showHeroReadout": true
}/*EDITMODE-END*/;

function useScrolled(threshold = 32) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// Smooth scroll all anchor links
function useSmoothAnchors() {
  React.useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id || id === "_") return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", "#" + id);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

function App() {
  const scrolled = useScrolled();
  useSmoothAnchors();
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);
  return (
    <>
      <UrgentBanner variant={tweaks.banner}/>
      <Header scrolled={scrolled}/>
      <Hero/>
      <BrandStrip/>
      <About/>
      <Services/>
      <Sectors/>
      <SiteSurveyBanner/>
      {tweaks.showLaunch && <LaunchOffer/>}
      {tweaks.showGuides && <EnergyGuide/>}
      <FAQ/>
      <Trust/>
      <Contact/>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Top banner">
          <TweakRadio
            label="Variant"
            value={tweaks.banner}
            onChange={(v) => setTweaks({ banner: v })}
            options={[
              { value: "urgent",   label: "Urgent" },
              { value: "standard", label: "Standard" },
              { value: "off",      label: "Hidden" },
            ]}/>
        </TweakSection>
        <TweakSection title="Page sections">
          <TweakToggle label="Launch offer & pricing" checked={tweaks.showLaunch} onChange={(v) => setTweaks({ showLaunch: v })}/>
          <TweakToggle label="Energy efficiency guide" checked={tweaks.showGuides} onChange={(v) => setTweaks({ showGuides: v })}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
