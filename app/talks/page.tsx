import PageHeader from "@/components/PageHeader";

export default function TalksPage() {
  return (
    <main>
      <PageHeader
        number="04 / TALKS & WORKSHOPS"
        title="Talks."
        description="Presentations, workshops, conferences, demonstrations, and conversations around science and engineering."
      />

      <section className="page-content">
        <h2>Talks & workshops.</h2>

        <p>
          This section will collect invited talks, workshops, conference
          presentations, demonstrations, and other speaking engagements.
        </p>

        <div className="page-list">
          <article className="page-list-item">
            <div>
              <span className="page-list-number">COMING SOON</span>
              <h3>Talk archive</h3>
              <p>
                Presentation slides, recordings, and supporting material will
                be added here.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}