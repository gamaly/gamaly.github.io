const work = [
  {
    title: "Digital Harms Tracker",
    role: "Founder · Developer · Data Engineer",
    description:
      "Building open infrastructure that links digital harm incidents to policy and regulatory responses. Designed for researchers, journalists, and advocates working on platform accountability.",
    link: "https://digitalharmstracker.org",
    linkLabel: "digitalharmstracker.org",
  },
  {
    title: "The Outlaw Ocean Project",
    role: "AI & Data Science Editor",
    description:
      "Leading the application of data science and AI in investigative journalism at The Outlaw Ocean Project. Current focus includes Bait to Plate, one of the largest seafood supply chain accountability databases in development, tracking labor abuse and illegal fishing across global fishing fleets.",
  },
  {
    title: "Technical & Advisory Work",
    role: "Independent",
    description:
      "Data science, analytics, and advisory work for government and nonprofit clients. AI strategy, data infrastructure, applied analytics, and responsible technology deployment.",
  },
];

export default function CurrentWork() {
  return (
    <section id="work" className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-12">
          Current Work
        </h2>

        <div className="space-y-10">
          {work.map((item) => (
            <div key={item.title} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                <h3 className="font-[family-name:var(--font-mono)] text-base font-bold text-charcoal">
                  {item.title}
                </h3>
                <span className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light">
                  {item.role}
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-base text-charcoal/75 leading-relaxed mb-2">
                {item.description}
              </p>
              {item.clients && (
                <ul className="mt-2 space-y-1">
                  {item.clients.map((c) => (
                    <li key={c.name} className="flex gap-2">
                      <span className="font-[family-name:var(--font-body)] text-sm text-charcoal/80">{c.name}</span>
                      <span className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light pt-0.5">{c.detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-sm text-amber hover:text-amber-dark transition-colors"
                >
                  {item.linkLabel}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
