import Link from "next/link";
import styles from "./research.module.css";

export default function ResearchPage() {
  return (
    <main className={styles.researchPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Research.</h1>

          <p className={styles.heroDescription}>
            Investigating high-speed flow physics through experiments,
            optical diagnostics, measurements, and computational analysis.
          </p>
        </div>
      </section>

      {/* MAIN LINKS */}
      <section className={styles.linksSection}>
        <Link
          href="/research/overview"
          className={styles.researchLink}
        >
          <span className={styles.linkNumber}>01</span>

          <span className={styles.linkTitle}>
            Research at a glance
          </span>
        </Link>

        <Link
          href="/research/publications"
          className={styles.researchLink}
        >
          <span className={styles.linkNumber}>02</span>

          <span className={styles.linkTitle}>
            Publications
          </span>
        </Link>
      </section>
    </main>
  );
}