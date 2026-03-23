const aiWriting = [
  {
    title:
      "Who Gets to Build with AI? Rethinking Openness in the Age of Foundation Models",
    source: "Exchange.Design",
    link: "https://www.exchange.design/blog/who-gets-to-build-with-ai-rethinking-openness-in-the-age-of-foundation-models",
  },
  {
    title:
      "Transforming Data Interaction: Key Takeaways from Our Work with AI-Driven Context Augmentation",
    source: "Exchange.Design",
  },
];

const devWriting = [
  {
    title: "Five Tools to Foster Creative Innovation",
    source: "digital@DAI, 2021",
  },
  {
    title: "COVID-19 Data Analysis: Demography, Behavior, and Environment",
    source: "digital@DAI, 2020",
  },
  {
    title: "Open Source Versus Proprietary Data Management Stack",
    source: "digital@DAI, 2019",
  },
  {
    title: "Getting the Basics of ICT4D Right",
    source: "digital@DAI, 2018",
  },
  {
    title: "Putting the Brakes on Traffic Accidents",
    source: "Pardee Center, University of Denver, 2012",
  },
];

export default function Writing() {
  return (
    <section
      id="writing"
      className="py-16 md:py-24 px-6 border-t border-parchment"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-12">
          Writing &amp; Publications
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-gray-light mb-6">
              AI &amp; Technology
            </h3>
            <ul className="space-y-4">
              {aiWriting.map((item) => (
                <li key={item.title}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-body)] text-base text-charcoal leading-snug hover:text-amber transition-colors"
                    >
                      &ldquo;{item.title}&rdquo;
                    </a>
                  ) : (
                    <p className="font-[family-name:var(--font-body)] text-base text-charcoal leading-snug">
                      &ldquo;{item.title}&rdquo;
                    </p>
                  )}
                  <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mt-0.5">
                    {item.source}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-gray-light mb-6">
              International Development &amp; Data
            </h3>
            <ul className="space-y-4">
              {devWriting.map((item) => (
                <li key={item.title}>
                  <p className="font-[family-name:var(--font-body)] text-base text-charcoal leading-snug">
                    &ldquo;{item.title}&rdquo;
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mt-0.5">
                    {item.source}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
