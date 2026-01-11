import Link from "next/link";

export default function SolutionCard({ icon, title, description, href }) {
  return (
    <div className="bg-white p-10 rounded-3xl card-shadow-hover border border-secondary/30 group relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-primary/5 transition-all duration-300"></div>

      <div className="relative z-10">
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-5 text-text group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p
          className="text-text opacity-80 mb-8 leading-relaxed"
          style={{ minHeight: "120px" }}
        >
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center font-semibold text-primary group-hover:gap-3 transition-all duration-300"
        >
          <span>Learn More</span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
