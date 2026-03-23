export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 border-t border-parchment"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-8">
          Contact
        </h2>

        <div className="space-y-3">
          <p className="font-[family-name:var(--font-body)] text-base text-charcoal/75">
            Takoma Park, MD
          </p>
          <a
            href="https://bsky.app/profile/gmaly.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-amber hover:text-amber-dark transition-colors"
          >
            @gmaly.bsky.social
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
