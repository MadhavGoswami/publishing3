type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 mt-2 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}