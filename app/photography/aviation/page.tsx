"use client";

import styles from "./aviation.module.css";

const aviationPhotos = [
  {
    image: "/images/aviation/1.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/2.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/3 - Copy.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/3.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/4 - Copy.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/4.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/5 - Copy.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/5.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/6.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/7.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/8.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/9.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
  {
    image: "/images/aviation/t2.jpg",
    date: "",
    time: "",
    location: "",
    event: "",
    aircraft: "",
    credit: "Shankar Mahadevan",
  },
];

export default function AviationPage() {
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
            PHOTOGRAPHY / AVIATION
          </p>

          <h1 className={styles.title}>
            Aviation.
          </h1>

          <p className={styles.intro}>
            Aircraft, flight, formations, and the moments between
            motion and sky.
          </p>

        </div>
      </section>


      {/* =====================================================
          GALLERY
          ===================================================== */}

      <section className={styles.gallery}>

        {aviationPhotos.map((photo, index) => (

          <figure
            className={styles.photo}
            key={`${photo.image}-${index}`}
          >

            <div className={styles.imageWrapper}>

              <img
                src={photo.image}
                alt="Aviation photograph"
                className={styles.image}
                draggable={false}
                onContextMenu={(event) =>
                  event.preventDefault()
                }
              />

              <div
                className={styles.imageShield}
                aria-hidden="true"
              />

            </div>


            {/* =================================================
                METADATA
                ================================================= */}

            <figcaption className={styles.metadata}>

              {photo.date && (
                <div className={styles.metaItem}>
                  <span>DATE</span>
                  <strong>{photo.date}</strong>
                </div>
              )}

              {photo.time && (
                <div className={styles.metaItem}>
                  <span>TIME</span>
                  <strong>{photo.time}</strong>
                </div>
              )}

              {photo.location && (
                <div className={styles.metaItem}>
                  <span>LOCATION</span>
                  <strong>{photo.location}</strong>
                </div>
              )}

              {photo.event && (
                <div className={styles.metaItem}>
                  <span>EVENT</span>
                  <strong>{photo.event}</strong>
                </div>
              )}

              {photo.aircraft && (
                <div className={styles.metaItem}>
                  <span>AIRCRAFT</span>
                  <strong>{photo.aircraft}</strong>
                </div>
              )}

              {photo.credit && (
                <div className={styles.metaItem}>
                  <span>CREDIT</span>
                  <strong>{photo.credit}</strong>
                </div>
              )}

            </figcaption>

          </figure>

        ))}

      </section>

    </main>
  );
}