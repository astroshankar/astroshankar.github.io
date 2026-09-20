import Link from "next/link";
import styles from "./photography.module.css";

export default function PhotographyPage() {
  return (
    <main className={styles.photographyPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Photography.
          </h1>

          <p className={styles.heroDescription}>
            Exploring the world through astrophotography,
            photography, and visual storytelling.
          </p>
        </div>
      </section>

      {/* MAIN LINKS */}
      <section className={styles.linksSection}>
        <Link
          href="/photography/astrophotography"
          className={styles.photographyLink}
        >
          <span className={styles.linkNumber}>01</span>

          <span className={styles.linkTitle}>
            Astrophotography
          </span>
        </Link>

        <Link
          href="/photography/aviation"
          className={styles.photographyLink}
        >
          <span className={styles.linkNumber}>02</span>

          <span className={styles.linkTitle}>
            Aviation
          </span>
        </Link>
      </section>
    </main>
  );
}