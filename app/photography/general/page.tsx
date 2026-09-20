import PageHeader from "@/components/PageHeader";

export default function GeneralPhotographyPage() {
  return (
    <main>
      <PageHeader
        number="03.02 / GENERAL"
        title="Everything else."
        description="Landscapes, aviation, travel, people, and the little moments that make it into the frame."
      />

      <section className="page-content">
        <h2>A visual journal.</h2>

        <p>
          This gallery will grow over time with photographs from travel,
          aviation, landscapes, and everyday life.
        </p>
      </section>
    </main>
  );
}