const experience = [
  {
    org: "U.S. Department of the Treasury",
    role: "Data and Technology Advisor, Office of Technical Assistance",
    description:
      "Advisory support to the Department and international counterparts on data science and data engineering tools and methods.",
  },
  {
    org: "Exchange.Design",
    role: "Co-founder & CTO",
    description:
      "Supported mission-driven organizations in adopting AI and data science tools and methods. Departed early 2026.",
  },
  {
    org: "UN Foundation / Data2X",
    role: "Data Science Advisor",
    description:
      "Advisory on data strategy and applied analytics for gender data initiatives across global development programs.",
  },
  {
    org: "DAI Global",
    role: "Associate Director, Data Science & Digital Products",
    description:
      "Led data science and analytics teams delivering platforms and decision-support tools across international development programs.",
  },
  {
    org: "U.S. Department of State",
    role: "Conflict Data Analyst",
    description:
      "Integrated data analysis and geospatial methods into conflict prevention and stabilization policy work.",
  },
];

export default function PastVentures() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-12">
          Select Experience
        </h2>

        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.org}>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                <h3 className="font-[family-name:var(--font-mono)] text-base font-bold text-charcoal">
                  {item.org}
                </h3>
                <span className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light">
                  {item.role}
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
