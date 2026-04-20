export default function About() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl leading-relaxed text-charcoal/90">
          Social scientist by training, data and technology practitioner by profession.
          I&rsquo;ve spent twenty years building technology and data systems for
          organizations working on hard problems: conflict, accountability, ocean
          crime, global development.
        </p>
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl leading-relaxed text-charcoal/90">
          I believe technology infrastructure matters. The tools researchers,
          advocates, and governments use shape what&rsquo;s visible, what gets
          acted on, and what doesn&rsquo;t. My work sits where that
          infrastructure meets the people who need it: policy staff,
          investigative journalists, humanitarian responders, civil society
          researchers.
        </p>
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl leading-relaxed text-charcoal/90">
          Current focus: leading data science and AI at{" "}
          <a
            href="https://www.theoutlawocean.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:text-amber-dark transition-colors underline underline-offset-4 decoration-amber/30"
          >
            The Outlaw Ocean Project
          </a>
          , building the{" "}
          <a
            href="https://digitalharmstracker.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:text-amber-dark transition-colors underline underline-offset-4 decoration-amber/30"
          >
            Digital Harms Tracker
          </a>
          , public-interest infrastructure linking platform harm evidence to
          the policy and legal response, and advising U.S. government agencies
          on data science and technology.
        </p>
      </div>
    </section>
  );
}
