const researchAreas = [
  {
    number: "01",
    title: "High-Speed Flows",
    description:
      "Supersonic and hypersonic flows, shock interactions, and unsteady flow phenomena.",
  },
  {
    number: "02",
    title: "Flow Diagnostics",
    description:
      "Optical and time-resolved techniques for observing and measuring complex flows.",
  },
  {
    number: "03",
    title: "Aeroacoustics",
    description:
      "Flow-generated sound, instability mechanisms, and acoustic feedback in high-speed flows.",
  },
];

const selectedWork = [
  {
    title: "Focused Laser Differential Interferometry",
    category: "Flow diagnostics",
  },
  {
    title: "Controlling Boundary-Layer Transition",
    category: "Hypersonic flows",
  },
  {
    title: "Listening to Supersonic Jets",
    category: "Aeroacoustics",
  },
];

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">AEROSPACE RESEARCHER · IIT MADRAS</p>

          <h1>
            Shankar
            <br />
            Mahadevan<span>.</span>
          </h1>

          <p className="hero-description">
            Exploring the physics of high-speed flows through experiments, imaging, and measurements.
          </p>

          <div className="hero-links">
            <a href="#research" className="primary-link">
              Explore my research <span>↘</span>
            </a>

          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-grid" />

          <img
            src="/images/shankar.png"
            alt="Shankar Mahadevan"
            className="hero-photo"
          />
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <p className="section-number">01 / ABOUT</p>

          <h2>
            Researcher,
            <br />
            engineer,
            <br />
            <em>curious mind.</em>
          </h2>
        </div>

        <div className="about-text">
          <p className="large-text">
            I am an aerospace researcher in the Department of Aerospace
            Engineering at the Indian Institute of Technology Madras.
          </p>

          <p>
            My work brings together experimental aerodynamics, optical diagnostics, 
            and flow measurements, with a particular interest in transition, 
            instability, aeroacoustics, and unsteady flow phenomena.
          </p>

          <p>
            Beyond the laboratory, I find the same curiosity in photography, 
            astronomy, aviation, music, and the people and places around me.
          </p>

          <a href="/about" className="text-link">
            More about me <span>↗</span>
          </a>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="section research-section">
        <div className="section-topline">
          <p className="section-number">02 / RESEARCH</p>
          
          <p className="section-note"> </p>
        </div>

        <div className="research-grid">
          {researchAreas.map((area) => (
            <article key={area.number} className="research-card">
              <p className="card-number">{area.number}</p>

              <h3>{area.title}</h3>

              <p>{area.description}</p>

              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="research-photo-credit">
          <span>Supersonic jet · laser-sheet illumination</span>
          <span>© Shankar Mahadevan</span>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="section work-section">
        <div className="section-topline">
          <p className="section-number">03 / SELECTED WORK</p>

          <a href="/research" className="text-link">
            View all research <span>↗</span>
          </a>
        </div>

        <div className="work-list">
          {selectedWork.map((work, index) => (
            <article key={work.title} className="work-item">
              <span className="work-index">0{index + 1}</span>

              <div className="work-main">
                <p>{work.category}</p>
                <h3>{work.title}</h3>
              </div>

              <span className="work-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="photography" className="photo-section">
        <div className="photo-content">
          <p className="section-number">04 / PHOTOGRAPHY</p>

          <h2>
            Looking beyond
            <br />
            the laboratory.
          </h2>

          <p>
            Astrophotography, landscapes, aviation, and the moments that make
            their way into the camera.
          </p>

          <a href="/photography" className="primary-link">
            Enter the gallery <span>↗</span>
          </a>
        </div>

        <div className="photo-credit">
          <span>A night full of stars.</span>
          <span>© Shankar Mahadevan</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <p className="section-number">05 / CONTACT</p>

        <h2>
          Let's talk with
          <br />
          <em>curiosity.</em>
        </h2>

        <a
          href="mailto:astroshankar02@gmail.com"
          className="email-link"
        >
          astroshankar02@gmail.com
        </a>

        <div className="contact-links">
          <a
            href="https://scholar.google.com/citations?hl=en&user=D91A5yEAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar ↗
          </a>

          <a
            href="https://www.linkedin.com/in/ashankarmahadevan/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="/contact"
            className="contact-more-link"
          >
            More ways to connect ↗
          </a>
        </div>
      </section>

    </main>
  );
}