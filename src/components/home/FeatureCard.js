export default function FeatureCard({
  icon,
  title,
  description,
  bgClass = "",
}) {
  return (
    <div
      className={`p-8 rounded-2xl hover-lift card-shadow-hover ${bgClass} border border-secondary/30 h-full flex flex-col transition-all duration-300`}
    >
      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-md flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-text flex-shrink-0">
        {title}
      </h3>
      <p className="text-text opacity-75 leading-relaxed text-sm flex-grow">
        {description}
      </p>
    </div>
  );
}
