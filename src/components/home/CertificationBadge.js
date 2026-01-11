export default function CertificationBadge({ icon, title, description }) {
  return (
    <div className="text-center p-8 rounded-3xl bg-white border border-secondary/30 card-shadow-hover hover-lift group">
      <div className="w-28 h-28 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-text group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text opacity-70">{description}</p>
    </div>
  );
}
