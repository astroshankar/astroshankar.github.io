export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>© {new Date().getFullYear()} Shankar Mahadevan</p>
        {/* <p>Aerospace Researcher · IIT Madras</p> */}
      </div>

      <div className="footer-links">
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
          href="https://www.instagram.com/astro_shankar/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>

        <a href="mailto:astroshankar02@gmail.com">
          Email ↗
        </a>
      </div>
    </footer>
  );
}