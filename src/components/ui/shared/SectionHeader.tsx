
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false,
  className = "" 
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="heading-xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 body-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
