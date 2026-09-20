import styles from "./about.module.css";

const researchAreas = [
  "Fluid Flows",
  "Experimental Aerodynamics",
  "Optical Diagnostics",
  "Aeroacoustics",
  "Flow Instability",
  "Unsteady Measurements",
];

const journey = [
  {
    year: "2020 — 2024",
    institution: "SASTRA University",
    title: "B.Tech Aerospace Engineering",
  },
  {
    year: "2024 — 2026",
    institution: "IISc Bengaluru",
    title: "Research Associate",
  },
  {
    year: "2026 — Present",
    institution: "IIT Madras",
    title: "Research Associate",
  },
];

const interests = [
  "Astrophotography",
  "Astronomy",
  "Music",
  "Aviation",
  "Science Outreach",
  "Adventure",
];

export default function About() {
  return (
    <main className={styles.aboutPage}>

      {/* INTRO */}

      <section className={styles.intro}>
        <h1>
          About
          <br />
          me.
        </h1>

        <div className={styles.introText}>
          <p>
            Aerospace researcher and experimentalist, with interests that
            extend well beyond the laboratory.
          </p>
        </div>
      </section>


      {/* RESEARCH */}

      <section className={styles.researchSection}>

        <div className={styles.sectionMarker}>
          <span>The researcher</span>
        </div>

        <div className={styles.researchLayout}>

          <div className={styles.researchImage}>
            <img
              src="/images/about1.png"
              alt="Shankar Mahadevan presenting his research"
            />
          </div>

          <div className={styles.researchContent}>

            <h2>
              Understanding flows, one experiment at a time.
            </h2>

            <p>
              I am an aerospace researcher interested in understanding
              fluid flow physics through measurement and observation.
            </p>

            <p>
              My work brings together experimental aerodynamics, optical
              diagnostics, and various measurement techniques to study
              complex flow phenomena, including transition, instability,
              shock interactions, and unsteady flows.
            </p>

            <div className={styles.keywordRow}>
              {researchAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>

          </div>

        </div>

      </section>


      {/* JOURNEY */}

      <section className={styles.journeySection}>

        <div className={styles.sectionMarker}>
          <span>The journey</span>
        </div>

        <div className={styles.journeyLayout}>

          <h2>
            The path
            <br />
            so far.
          </h2>

          <div className={styles.timeline}>

            {journey.map((item) => (
              <article
                className={styles.timelineItem}
                key={`${item.year}-${item.institution}`}
              >

                <div className={styles.timelineYear}>
                  {item.year}
                </div>

                <div className={styles.timelineDot}>
                  <span />
                </div>

                <div className={styles.timelineContent}>

                  <p className={styles.institution}>
                    {item.institution}
                  </p>

                  <h3>{item.title}</h3>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* BEYOND THE LABORATORY */}

      <section className={styles.beyondSection}>

        <div className={styles.sectionMarker}>
          <span>Beyond the laboratory</span>
        </div>

        <div className={styles.beyondLayout}>

          <div className={styles.beyondContent}>

            <h2>
              There is more
              <br />
              to explore.
            </h2>

            <p>
              Outside the laboratory, I enjoy exploring the world through
              photography, astronomy, music, art, and aviation. I like
              making things as much as I like observing them — whether
              that means capturing a night sky, sketching, composing
              music, or simply discovering a new place.
            </p>

            <p>
              I also enjoy sharing what I learn and being part of
              communities through teaching, outreach, and social
              initiatives. These interests may sit outside my research,
              but they are an important part of who I am.
            </p>

            <div className={styles.keywordRow}>
              {interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>

          </div>

          <div className={styles.beyondImage}>
            <img
              src="/images/about2.png"
              alt="Shankar Mahadevan outdoors"
            />
          </div>

        </div>

      </section>

    </main>
  );
}