import styles from "./publications.module.css";

const publications = [
  // {
  //   year: "2026",
  //   type: "MANUSCRIPT UNDER PREPARATION",
  //   title:
  //     "On the role of interaction between near-wake shear layers in high-speed cylinder wake oscillations",
  //   authors:
  //     "Premika, Thasu, Mahadevan, S., & Duvvuri, Subrahmanyam",
  //   venue: "",
  //   doi: "",
  // },
  // {
  //   year: "2026",
  //   type: "MANUSCRIPT UNDER PREPARATION",
  //   title:
  //     "Assessment of jet from chevron nozzle with modified valley contour and chevron count",
  //   authors:
  //     "Devanathan, D., Mahadevan, S., Manikandan, K., & Das, R.",
  //   venue: "",
  //   doi: "",
  // },
  {
    year: "2025",
    type: "JOURNAL ARTICLE",
    title:
      "Bevel angle effect on the supersonic jet structure of Mach 1.6",
    authors:
      "Mugundhan, D., Padmashri, K., Mahadevan, S., Manikandan, K., & Das, R.",
    venue:
      "Engineering Research Express, 7(1), 015530",
    doi:
      "https://doi.org/10.1088/2631-8695/ada66c",
  },
  {
    year: "2025",
    type: "CONFERENCE PROCEEDINGS",
    title:
      "Experimental study to explore acoustic characteristics of a supersonic chevron nozzle",
    authors:
      "Mahadevan, S., Manikandan, K., Devanathan, D., Pratheek, V. V. H., Kailash, R., & Das, R.",
    venue:
      "Proceedings of Fluid Mechanics and Fluid Power (FMFP) 2023, Vol. 1, pp. 23–36",
    doi: "https://doi.org/10.1007/978-981-97-6776-2_3",
  },
  {
    year: "2025",
    type: "CONFERENCE PROCEEDINGS",
    title:
      "Aeroacoustics characteristics of the supersonic free jet at Mach number 1.8",
    authors:
      "Manikandan, K., Mahadevan, S., Devanathan, D., & Das, R.",
    venue:
      "Proceedings of the 15th International Symposium on Experimental and Computational Aerothermodynamics of Internal Flows (ISAIF-15), pp. 105–116",
    doi:
      "https://doi.org/10.1007/978-981-96-4082-9_9",
  },
  {
    year: "2024",
    type: "CONFERENCE PROCEEDINGS",
    title:
      "Computational study of parallel and non-parallel Trapezoidal Double Cavity in Scramjet Combustor",
    authors:
      "Raguram, T., Pavithra, R., Padmashri, K., Mahadevan, S., Manikandan, K., & Das, R.",
    venue:
      "Symposium on Applied Aerodynamics and Design of Aerospace Vehicle (SAROD 2024), VSSC, ISRO, Trivandrum, India",
    doi: "",
  },
];

export default function PublicationsPage() {
  return (
    <main className={styles.publicationsPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <h1 className={styles.heroTitle}>
            Publications.
          </h1>

          {/* <p className={styles.heroDescription}>
            Journal articles, conference proceedings, and research
            manuscripts in high-speed aerodynamics and aeroacoustics.
          </p> */}

        </div>
      </section>


      {/* PUBLICATIONS */}
      <section className={styles.publicationsSection}>

        <div className={styles.publicationsList}>

          {publications.map((publication, index) => (

            <article
              className={styles.publication}
              key={`${publication.year}-${index}`}
            >

              {/* LEFT META */}
              <div className={styles.publicationMeta}>

                <span className={styles.publicationNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.publicationYear}>
                  {publication.year}
                </span>

                <span className={styles.publicationType}>
                  {publication.type}
                </span>

              </div>


              {/* PAPER */}
              <div className={styles.publicationContent}>

                <h2 className={styles.publicationTitle}>
                  {publication.title}
                </h2>

                <p className={styles.publicationAuthors}>
                  {publication.authors}
                </p>

                {publication.venue && (
                  <p className={styles.publicationVenue}>
                    {publication.venue}
                  </p>
                )}

                {publication.doi && (
                  <a
                    href={publication.doi}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.doi}
                  >
                    DOI ↗
                  </a>
                )}

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}