import styles from "./contact.module.css";

const socialLinks = [
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=D91A5yEAAAAJ",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ashankarmahadevan/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/astro_shankar/",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h1 className={styles.title}>
            <span>Let&apos;s talk with</span>
            <span className={styles.script}>curiosity.</span>
          </h1>

          <a
            className={styles.email}
            href="mailto:astroshankar02@gmail.com"
          >
            <span>astroshankar02@gmail.com</span>
            <span className={styles.arrow}>↗</span>
          </a>

          <nav className={styles.socials} aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
                <span>↗</span>
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}