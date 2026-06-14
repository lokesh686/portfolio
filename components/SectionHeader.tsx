export default function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-mono text-accent">{number}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-1.5 text-sm text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
