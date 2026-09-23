"use client";

import styles from "./astrophotography.module.css";

const astroPhotos = [
  {
    image: "/images/astro/astro1.jpeg",
    title: "The Orion Nebula and Running Man Nebula",
    date: "",
    location: "",
    equipment: "",
    credit: "Vishak Sasidharan | Shankar Mahadevan",
    orientation: "landscape",
  },
  {
    image: "/images/astro/astro2.jpeg",
    title: "The Pleiades Star Cluster",
    date: "",
    location: "",
    equipment: "",
    credit: "Vishak Sasidharan | Shankar Mahadevan",
    orientation: "landscape",
  },
  {
    image: "/images/astro/astro3.jpeg",
    title: "Our Sun",
    date: "",
    location: "",
    equipment: "",
    credit: "Vishak Sasidharan | Shankar Mahadevan",
    orientation: "square",
  },
  {
    image: "/images/astro/astro4.jpeg",
    title: "Our Moon",
    date: "",
    location: "",
    equipment: "",
    credit: "Vishak Sasidharan | Shankar Mahadevan",
    orientation: "square",
  },
  {
    image: "/images/astro/astro5.jpeg",
    title: "The Rosette Nebula",
    date: "",
    location: "",
    equipment: "",
    credit: "Vishak Sasidharan | Shankar Mahadevan",
    orientation: "landscape",
  },
  {
    image: "/images/astro/astro6.jpeg",
    title: "The Whirlpool Galaxy",
    date: "",
    location: "",
    equipment: "",
    credit: "Vishak Sasidharan | Shankar Mahadevan",
    orientation: "landscape",
  },
  {
    image: "/images/astro/astro7.jpeg",
    title: "The Zodiac Equator - Star Trail",
    date: "",
    location: "",
    equipment: "",
    credit: "Shankar Mahadevan",
    orientation: "landscape",
  },
  {
    image: "/images/astro/astro8.jpeg",
    title: "A Night full of Stars",
    date: "",
    location: "",
    equipment: "",
    credit: "Shankar Mahadevan",
    orientation: "landscape",
  },
  {
    image: "/images/astro/astro9.jpeg",
    title: "Our Milky Way Galaxy",
    date: "",
    location: "",
    equipment: "",
    credit: "Shankar Mahadevan | Naimish Balaji | STELLARIA",
    orientation: "portrait",
  },
  {
    image: "/images/astro/astro10.jpeg",
    title: "Our Milky Way Galaxy",
    date: "",
    location: "",
    equipment: "",
    credit: "Shankar Mahadevan | Naimish Balaji | STELLARIA",
    orientation: "portrait",
  },
];

export default function AstrophotographyPage() {
  /*
    This prevents the browser context menu on the page.
    It only deters casual saving; it is not a security mechanism.
  */
  const preventContextMenu = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
  };

  return (
    <main
      className={styles.page}
      onContextMenu={preventContextMenu}
    >

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <p className={styles.eyebrow}>
            PHOTOGRAPHY / ASTROPHOTOGRAPHY
          </p>

          <h1 className={styles.title}>
            Astrophotos.
          </h1>

          <p className={styles.intro}>
            Exploring the night sky through long exposures,
            planetary imaging, and deep-sky photography.
          </p>

        </div>
      </section>


      {/* =====================================================
          GALLERY
          ===================================================== */}

      <section className={styles.gallery}>

        {astroPhotos.map((photo, index) => (

          <figure
            className={`${styles.photo} ${
              styles[photo.orientation]
            }`}
            key={photo.image}
          >

            <div className={styles.imageWrapper}>

              <img
                src={photo.image}
                alt={photo.title}
                className={styles.image}
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
              />

              {/* Invisible interaction layer */}
              <div
                className={styles.imageShield}
                aria-hidden="true"
              />

            </div>


            <figcaption className={styles.caption}>

              <div className={styles.captionTop}>

                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className={styles.photoTitle}>
                  {photo.title}
                </h2>

              </div>


              <div className={styles.metadata}>

                {photo.date && (
                  <div className={styles.metaItem}>
                    <span>DATE</span>
                    <strong>{photo.date}</strong>
                  </div>
                )}

                {photo.location && (
                  <div className={styles.metaItem}>
                    <span>LOCATION</span>
                    <strong>{photo.location}</strong>
                  </div>
                )}

                {photo.equipment && (
                  <div className={styles.metaItem}>
                    <span>EQUIPMENT</span>
                    <strong>{photo.equipment}</strong>
                  </div>
                )}

                {photo.credit && (
                  <div className={styles.metaItem}>
                    <span>CREDIT</span>
                    <strong>{photo.credit}</strong>
                  </div>
                )}

              </div>

            </figcaption>

          </figure>

        ))}

      </section>

    </main>
  );
}