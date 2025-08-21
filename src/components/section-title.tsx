interface Props {
  section: string;
  subheading?: string;
  className?: string;
}

const SectionTitle = ({ section, subheading, className }: Props) => {
  return (
    <div className={`space-y-2 ${className || ""}`}>
      {/* Small uppercase label */}
      <span className="text-sm md:text-base text-primary font-medium tracking-wider">
        {section.toUpperCase()}
      </span>

      {/* Main heading */}
      {subheading && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {subheading}
        </h2>
      )}
    </div>
  );
};

export default SectionTitle;
