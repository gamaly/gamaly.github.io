export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-charcoal mb-8">
          Building data tools and technology infrastructure for researchers,
          journalists, government, and civil society.
        </h1>

        <p className="font-[family-name:var(--font-mono)] text-sm text-warm-gray mb-3">
          Based in Takoma Park, MD
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10">
          <span className="font-[family-name:var(--font-mono)] text-sm text-warm-gray-light">
            AI &amp; Data Science Editor,{" "}
            <span className="text-charcoal">The Outlaw Ocean Project</span>
          </span>
          <span className="font-[family-name:var(--font-mono)] text-sm text-warm-gray-light hidden md:inline">
            /
          </span>
          <span className="font-[family-name:var(--font-mono)] text-sm text-warm-gray-light">
            Founder &amp; Developer,{" "}
            <span className="text-charcoal">Digital Harms Tracker</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://digitalharmstracker.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 bg-charcoal text-cream rounded-sm hover:bg-amber transition-colors"
          >
            Digital Harms Tracker
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center font-[family-name:var(--font-mono)] text-sm px-5 py-2.5 border border-charcoal/20 text-charcoal rounded-sm hover:border-amber hover:text-amber transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
