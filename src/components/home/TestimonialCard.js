export default function TestimonialCard({ quote, author, role, bgClass = "" }) {
  return (
    <div
      className={`p-10 rounded-3xl ${bgClass} border border-secondary/30 card-shadow-hover hover-lift relative overflow-hidden`}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <svg
          className="w-20 h-20 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="mb-6 italic text-text text-lg leading-relaxed">{quote}</p>
        <div className="border-t border-secondary/30 pt-4">
          <p className="font-bold text-text">{author}</p>
          <p className="text-sm text-text opacity-70">{role}</p>
        </div>
      </div>
    </div>
  );
}
