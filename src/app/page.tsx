"use client";

import Logo from "@/components/Logo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  { name: "Classic Manicure", price: "$25", icon: "💅" },
  { name: "Gel Manicure", price: "$40", icon: "✨" },
  { name: "Acrylic Full Set", price: "$55", icon: "💎" },
  { name: "Classic Pedicure", price: "$35", icon: "🦶" },
  { name: "Gel Pedicure", price: "$50", icon: "🌸" },
  { name: "Spa Pedicure", price: "$60", icon: "🧖" },
  { name: "Nail Art", price: "from $10", icon: "🎨" },
  { name: "Dip Powder", price: "$45", icon: "🌈" },
  { name: "Fill-Ins", price: "$35", icon: "🔄" },
];

const gallery = [
  {
    label: "French",
    desc: "Timeless elegance",
    gradient: "from-pink-500/20 via-white/5 to-transparent",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
  },
  {
    label: "Ombre",
    desc: "Seamless color fade",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=400&fit=crop",
  },
  {
    label: "Abstract",
    desc: "Bold artistic lines",
    gradient: "from-orange-400/15 via-pink-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&h=400&fit=crop",
  },
  {
    label: "Floral",
    desc: "Garden on your nails",
    gradient: "from-green-400/10 via-pink-500/15 to-transparent",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=400&fit=crop",
  },
];

const serviceOptions = [
  "Classic Manicure",
  "Gel Manicure",
  "Acrylic Full Set",
  "Classic Pedicure",
  "Gel Pedicure",
  "Spa Pedicure",
  "Nail Art",
  "Dip Powder",
  "Fill-Ins",
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* ==================== NAV ==================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-base/70 border-b border-primary/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#hero" className="flex items-center gap-3 group">
            <Logo size={40} />
            <span className="font-display font-bold text-lg tracking-tight text-text group-hover:text-primary transition-colors">
              BLOOMING NAILS
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted">
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="hover:text-primary transition-colors">
              Reviews
            </a>
            <a
              href="#booking"
              className="magnetic-btn !py-2 !px-5 !text-sm !font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* ==================== HERO (Sticky) ==================== */}
      <section id="hero" className="relative h-[200vh]">
        <div className="hero-sticky">
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&h=900&fit=crop&crop=center"
            alt="Professional nail art manicure in a modern salon"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0810]/80 via-[#0D0810]/60 to-[#0D0810]/90" />

          {/* Glow orbs */}
          <div className="orb orb-pink" />
          <div className="orb orb-lilac" />

          {/* Content fades out on scroll */}
          <div className="hero-content hero-fade-target px-6 relative z-10">
            <div className="mb-8">
              <Logo size={80} className="mx-auto" />
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-2">
              Nails that{" "}
              <span className="gradient-text">bloom.</span>
            </h1>
            <p className="font-body text-muted text-lg md:text-xl max-w-lg mx-auto mt-4 mb-10">
              Tucson&apos;s boutique nail studio crafting artistry at your
              fingertips.
            </p>
            <a href="#booking" className="magnetic-btn text-lg">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section
        id="services"
        className="section-seamless relative py-28 md:py-36 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 clip-reveal">
            <p className="font-body text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-4">
              Treat yourself to{" "}
              <span className="gradient-text">perfection</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="holo-card clip-reveal"
                style={
                  {
                    "--stagger": `${i * 0.05}s`,
                  } as React.CSSProperties
                }
              >
                <div className="glass-icon">
                  <span role="img" aria-label={s.name}>
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-text mb-1">
                  {s.name}
                </h3>
                <p className="font-display font-bold text-2xl gradient-text">
                  {s.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section
        id="gallery"
        className="section-seamless relative py-28 md:py-36 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 text-reveal">
            <p className="font-body text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
              Nail Art Gallery
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-4">
              Styles we <span className="gradient-text">love</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, i) => (
              <div
                key={item.label}
                className="gallery-block slide-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="gallery-block-inner relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={`${item.label} nail art style`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} from-[#0D0810]/70 to-transparent`} />
                </div>
                <div className="gallery-label">
                  <h3 className="font-display font-bold text-xl text-text">
                    {item.label}
                  </h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIAL ==================== */}
      <section
        id="testimonials"
        className="section-seamless relative py-28 md:py-36 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 clip-reveal">
            <p className="font-body text-tertiary text-sm font-semibold uppercase tracking-widest mb-3">
              What Clients Say
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
              Kind <span className="gradient-text">words</span>
            </h2>
          </div>

          <div className="testimonial-card clip-reveal">
            <p className="font-body text-text/90 text-lg md:text-xl leading-relaxed mb-6 relative z-10">
              I get compliments on my nails every single day since I started
              coming to Blooming Nails. The nail art is insane &mdash; my floral
              set looked like actual tiny paintings. Best salon in Tucson,
              hands down!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-sm">
                M
              </div>
              <div>
                <p className="font-display font-semibold text-text text-sm">
                  Maria S.
                </p>
                <p className="text-muted text-xs">Tucson, AZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOOKING FORM ==================== */}
      <section
        id="booking"
        className="section-seamless relative py-28 md:py-36 px-6"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 text-reveal">
            <p className="font-body text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Appointments
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-4">
              Book your <span className="gradient-text">glow-up</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <form
            className="space-y-5 slide-up"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll confirm your appointment shortly.");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="form-field"
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="form-field"
                aria-label="Email Address"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-field"
                aria-label="Phone Number"
              />
              <select
                name="service"
                required
                className="form-field"
                aria-label="Select Service"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Service
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="date"
                name="date"
                required
                className="form-field"
                aria-label="Preferred Date"
              />
              <input
                type="time"
                name="time"
                required
                className="form-field"
                aria-label="Preferred Time"
              />
            </div>

            <textarea
              name="notes"
              rows={4}
              placeholder="Nail inspo, special requests, or notes..."
              className="form-field resize-none"
              aria-label="Nail inspo or notes"
            />

            <div className="text-center pt-4">
              <button type="submit" className="magnetic-btn text-lg w-full sm:w-auto">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer-seamless py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Logo + Brand */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <Logo size={50} />
                <div>
                  <p className="font-display font-bold text-lg tracking-tight text-text leading-tight">
                    BLOOMING NAILS
                  </p>
                  <p className="font-display text-xs tracking-[0.25em] text-muted uppercase">
                    Studio
                  </p>
                </div>
              </div>
              <p className="text-muted text-sm text-center md:text-left max-w-xs">
                Tucson&apos;s boutique nail studio where every set is a work of
                art.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h4 className="font-display font-semibold text-text mb-4 text-sm uppercase tracking-widest">
                Contact
              </h4>
              <p className="text-muted text-sm mb-2">
                <a
                  href="tel:+15205550199"
                  className="hover:text-primary transition-colors"
                >
                  (520) 555-0199
                </a>
              </p>
              <p className="text-muted text-sm mb-2">
                <a
                  href="mailto:hello@bloomingnails.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@bloomingnails.com
                </a>
              </p>
              <p className="text-muted text-sm">Tucson, AZ</p>
            </div>

            {/* Hours */}
            <div className="text-center md:text-left">
              <h4 className="font-display font-semibold text-text mb-4 text-sm uppercase tracking-widest">
                Hours
              </h4>
              <div className="space-y-1 text-sm text-muted">
                <p>
                  <span className="text-text/80">Mon &ndash; Sat</span>{" "}
                  10:00 AM &ndash; 7:00 PM
                </p>
                <p>
                  <span className="text-text/80">Sunday</span>{" "}
                  11:00 AM &ndash; 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-primary/10 text-center">
            <p className="text-muted text-xs">
              &copy; {new Date().getFullYear()} Blooming Nails Studio. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
