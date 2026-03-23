export default function About() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl leading-relaxed text-charcoal/90">
          Social scientist by training, data and AI practitioner by profession.
          I&rsquo;ve spent twenty years building technology and data systems for
          organizations working on hard
          problems&thinsp;&mdash;&thinsp;conflict, accountability, ocean crime,
          global development. I co-founded Exchange.Design, an AI consultancy
          supporting mission-driven organizations in adopting AI and data
          science, and currently lead data science and AI work at{" "}
          <a
            href="https://www.theoutlawocean.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:text-amber-dark transition-colors underline underline-offset-4 decoration-amber/30"
          >
            The Outlaw Ocean Project
          </a>
          . I&rsquo;m also the founder and primary developer of the{" "}
          <a
            href="https://digitalharmstracker.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:text-amber-dark transition-colors underline underline-offset-4 decoration-amber/30"
          >
            Digital Harms Tracker
          </a>
          , a public interest database linking digital harm incidents to policy
          responses. I believe technology infrastructure matters: the tools
          researchers, advocates, and governments use shape what&rsquo;s
          visible, what gets acted on, and what doesn&rsquo;t.
        </p>
      </div>
    </section>
  );
}
