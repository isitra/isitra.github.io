import React, { useEffect, useState } from "react";
import "./App.css";

/* ─────────────────────────
   CONTENT CONFIG (all strings)
   ───────────────────────── */

const COUPLE = {
  groomShort: "Rakesh",
  brideShort: "Isita",
  groomFull: "Rakesh Seal",
  brideFull: "Isita Karmakar",
};

const WEDDING_CONFIG = {
  dateTimeISO: "2026-02-06T11:00:00",
  displayDate: "February 6, 2026",
  city: "Samudragarh, West Bengal",
};

const WEDDING_DATE = new Date(WEDDING_CONFIG.dateTimeISO);

const HERO_COPY = {
  tag: "We’re getting married!",
  subtitle: "Surrounded by our favourite people, we begin our forever.",
};

const SECTION_COPY = {
  countdown: {
    title: "Countdown to Our Big Day",
    subtitle: "We can’t wait to celebrate this day with you.",
  },
  story: {
    title: "Our Story",
    subtitle: "A journey from strangers to soulmates.",
    p1: "It all started with a simple hello that turned into endless conversations, shared dreams, and a bond that grew stronger with every passing day. From long walks and late-night talks to inside jokes and quiet moments, we found home in each other.",
    p2: "Now, as we step into this new chapter, we feel incredibly grateful to have you with us to witness and bless our union.",
    quote: "Two hearts, one journey, infinite love",
  },
  gallery: {
    title: "Our Gallery",
    subtitle: "A few glimpses of our journey so far.",
  },
  video: {
    title: "Pre-Wedding Film",
    subtitle: "Press play and be part of our little love story.",
  },
  locations: {
    title: "Events & Locations",
    subtitle: "We would be honoured to have you at every celebration.",
  },
  footer: {
    thanks: "Thank you for being a part of our special day.",
  },
};

const GALLERY_IMAGES = [
  {
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    alt: "Couple walking together",
  },
  {
    src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
    alt: "Couple holding hands",
  },
  {
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    alt: "Couple smiling together",
  },
  {
    src: "https://images.pexels.com/photos/853407/pexels-photo-853407.jpeg",
    alt: "Ring and hands close-up",
  },
  {
    src: "https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg",
    alt: "Couple in a field",
  },
  {
    src: "https://images.pexels.com/photos/1572485/pexels-photo-1572485.jpeg",
    alt: "Wedding bouquet",
  },
];

const PREWEDDING_VIDEO_URL =
  "https://www.youtube.com/embed/hopMHZrO7Mw?si=YAuK87Yz7DA_UYJ9&amp;controls=0"; // TODO: replace with real video

const EVENT_LOCATIONS = [
  {
    id: "ceremony",
    title: "Wedding Ceremony",
    date: WEDDING_CONFIG.displayDate,
    time: "10:30 PM",
    venue: "Karmakar Bhavan",
    address: "Goalpara, Samudragarh, West Bengal",
    mapLink:
      "https://maps.app.goo.gl/Namh9GhBgBtN6Svx8",
  },
  {
    id: "reception",
    title: "Reception",
    date: "February 8, 2026",
    time: "7:00 PM",
    venue: "Pioneer Club ",
    address: "Paruldanga, Samudragarh, West Bengal",
    mapLink:
      "https://maps.app.goo.gl/g5kD9yMLgfMMqvHXA",
  },
  {
    id: "mehendi",
    title: "Mehendi & Sangeet",
    date: "December 4, 2026",
    time: "5:00 PM",
    venue: "Karmakar Bhavan",
     address: "Goalpara, Samudragarh, West Bengal",
    mapLink: "https://maps.app.goo.gl/yEeREGZsi4iKaPbN7",
  },
];

/* ─────────────────────────
   APP ROOT
   ───────────────────────── */

function App() {
  const [viewCount, setViewCount] = useState(null);

  // Simple localStorage-based view counter
  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_site_views");
      const next = stored ? parseInt(stored, 10) + 1 : 1;
      localStorage.setItem("wedding_site_views", String(next));
      setViewCount(next);
    } catch (e) {
      setViewCount(null);
    }
  }, []);

  return (
    <div className="wedding-page">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <Story />
        <Gallery />
        <VideoSection />
        <Locations />
      </main>
      <Footer viewCount={viewCount} />
    </div>
  );
}

/* ─────────────────────────
   HEADER
   ───────────────────────── */

function Header() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-main">{COUPLE.groomShort}</span>
          <span className="logo-amp">&</span>
          <span className="logo-main">{COUPLE.brideShort}</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToId("hero")}>Home</button>
          <button onClick={() => scrollToId("gallery")}>Gallery</button>
          <button onClick={() => scrollToId("video")}>Pre-Wedding</button>
          <button onClick={() => scrollToId("locations")}>Locations</button>
        </nav>
      </div>
    </header>
  );
}

/* ─────────────────────────
   HERO
   ───────────────────────── */

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tag">{HERO_COPY.tag}</p>
        <h1 className="hero-title">
          {COUPLE.groomShort} &amp; {COUPLE.brideShort}
        </h1>
        <p className="hero-names">
          <span className="hero-name-full">{COUPLE.groomFull}</span> &amp;{" "}
          <span className="hero-name-full">{COUPLE.brideFull}</span>
        </p>
        <p className="hero-date">
          {WEDDING_CONFIG.displayDate} • {WEDDING_CONFIG.city}
        </p>
        <p className="hero-subtitle">{HERO_COPY.subtitle}</p>
        <div className="hero-buttons">
          <a href="#locations" className="btn primary">
            View Ceremony Details
          </a>
          <a href="#gallery" className="btn ghost">
            See Our Moments
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────
   COUNTDOWN
   ───────────────────────── */

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = WEDDING_DATE.getTime() - now;

    if (distance <= 0) {
      return {
        completed: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;
    const second = 1000;

    return {
      completed: false,
      days: Math.floor(distance / day),
      hours: Math.floor((distance % day) / hour),
      minutes: Math.floor((distance % hour) / minute),
      seconds: Math.floor((distance % minute) / second),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="countdown">
      <div className="section-inner">
        <h2 className="section-title">{SECTION_COPY.countdown.title}</h2>
        <p className="section-subtitle">{SECTION_COPY.countdown.subtitle}</p>

        {timeLeft.completed ? (
          <p className="countdown-complete">
            It&apos;s our wedding day! Thank you for being a part of it.
          </p>
        ) : (
          <div className="countdown-grid">
            <CountdownBox label="Days" value={timeLeft.days} />
            <CountdownBox label="Hours" value={timeLeft.hours} />
            <CountdownBox label="Minutes" value={timeLeft.minutes} />
            <CountdownBox label="Seconds" value={timeLeft.seconds} />
          </div>
        )}
      </div>
    </section>
  );
}

function CountdownBox({ label, value }) {
  return (
    <div className="countdown-box">
      <div className="countdown-value">{String(value).padStart(2, "0")}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );
}

/* ─────────────────────────
   STORY
   ───────────────────────── */

function Story() {
  return (
    <section className="story">
      <div className="section-inner story-inner">
        <div className="story-text">
          <h2 className="section-title">{SECTION_COPY.story.title}</h2>
          <p className="section-subtitle">{SECTION_COPY.story.subtitle}</p>
          <p>{SECTION_COPY.story.p1}</p>
          <p>{SECTION_COPY.story.p2}</p>
        </div>
        <div className="story-card">
          <p className="story-quote">
            &ldquo;{SECTION_COPY.story.quote}.&rdquo;
          </p>
          <p className="story-signature">
            — {COUPLE.groomShort} &amp; {COUPLE.brideShort}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────
   GALLERY
   ───────────────────────── */

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="section-inner">
        <h2 className="section-title">{SECTION_COPY.gallery.title}</h2>
        <p className="section-subtitle">{SECTION_COPY.gallery.subtitle}</p>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, idx) => (
            <figure key={idx} className="gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────
   VIDEO
   ───────────────────────── */

function VideoSection() {
  return (
    <section id="video" className="video-section">
      <div className="section-inner">
        <h2 className="section-title">{SECTION_COPY.video.title}</h2>
        <p className="section-subtitle">{SECTION_COPY.video.subtitle}</p>

        <div className="video-wrapper">
          <iframe
            src={PREWEDDING_VIDEO_URL}
            title={`${COUPLE.groomShort} & ${COUPLE.brideShort} | Pre-Wedding Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────
   LOCATIONS (with small map)
   ───────────────────────── */

function Locations() {
  return (
    <section id="locations" className="locations">
      <div className="section-inner">
        <h2 className="section-title">{SECTION_COPY.locations.title}</h2>
        <p className="section-subtitle">{SECTION_COPY.locations.subtitle}</p>

        <div className="locations-grid">
          {EVENT_LOCATIONS.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({ location }) {
  const { title, date, time, venue, address, mapLink } = location;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <article className="location-card">
      <h3>{title}</h3>
      <p className="location-date">
        {date} • {time}
      </p>
      <p className="location-venue">{venue}</p>
      <p className="location-address">{address}</p>

      {/* small embedded map */}
      <div className="location-map-wrapper">
        <iframe
          src={mapEmbedUrl}
          loading="lazy"
          title={`${title} map`}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a href={mapLink} target="_blank" rel="noreferrer" className="btn small">
        View on Maps
      </a>
    </article>
  );
}

/* ─────────────────────────
   FOOTER (with views)
   ───────────────────────── */

function Footer({ viewCount }) {
  return (
    <footer className="footer">
      <p>
        With love,{" "}
        <strong>
          {COUPLE.groomShort} &amp; {COUPLE.brideShort}
        </strong>
      </p>
      <p className="footer-sub">{SECTION_COPY.footer.thanks}</p>
      {viewCount !== null && (
        <p className="footer-views">
          {viewCount.toLocaleString()} views
        </p>
      )}
    </footer>
  );
}

export default App;
