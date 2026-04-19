const education = [
  {
    institution: "University of Denver",
    degree: "MA, International Studies",
    concentrations: [
      "International Political Economy",
      "Comparative Politics",
      "International Political Theory",
    ],
  },
  {
    institution: "St. Mary's College of Maryland",
    degree: "Bachelor of Arts, Policy, Ethics & Conflict",
    concentrations: [],
  },
  {
    institution: "George Mason University",
    degree: "Certificate Program, Northern Virginia Mediation Service",
    note: "Courses toward mediation certification",
    concentrations: [
      "Facilitation of Public Disputes",
      "Facilitation and Group Consensus Building",
      "Alternative Dispute Resolution: Beyond Mediation",
      "Professional Mediation Skills and Process",
      "Designing Conflict Management Systems",
    ],
  },
];

export default function Education() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-12">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((item) => (
            <div key={item.institution}>
              <p className="font-[family-name:var(--font-body)] text-base font-semibold text-charcoal leading-snug">
                {item.institution}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mt-0.5 mb-3">
                {item.degree}
              </p>
              {item.concentrations.length > 0 && (
                <ul className="space-y-1">
                  {item.note && (
                    <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mb-2">
                      {item.note}
                    </p>
                  )}
                  {item.concentrations.map((c) => (
                    <li
                      key={c}
                      className="font-[family-name:var(--font-body)] text-sm text-charcoal/70"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
