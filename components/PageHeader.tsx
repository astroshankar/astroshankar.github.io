type PageHeaderProps = {
  number: string;
  title: string;
  description: string;
};

export default function PageHeader({
  number,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="section-number">{number}</p>

      <h1>{title}</h1>

      <p className="page-description">{description}</p>
    </header>
  );
}