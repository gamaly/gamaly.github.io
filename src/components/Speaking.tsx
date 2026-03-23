const talks = [
  {
    role: "Panelist",
    title: "The Role of Artificial Intelligence in Peacebuilding",
    event: "PeaceCon 2024",
  },
  {
    role: "Speaker",
    title: "Retrieval Augmented Generation and Conflict Data",
    event: "AI for Peace Conference, 2023",
  },
  {
    role: "Moderator",
    title:
      "Toward Ethical Artificial Intelligence in International Development",
    event: "ICT4D, 2022",
  },
  {
    role: "Moderator",
    title: "Understanding Algorithmic Bias",
    event: "Law Justice and Development Week, The World Bank, 2021",
  },
  {
    role: "Panelist",
    title: "Open Mapping and Data in Disaster Response",
    event: "FedGeo Day, 2019",
  },
  {
    role: "Speaker",
    title: "Data Science in 20-minutes or Less",
    event: "MerlTech, 2018",
  },
];

export default function Speaking() {
  return (
    <section
      id="speaking"
      className="py-16 md:py-24 px-6 border-t border-parchment"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-12">
          Speaking
        </h2>

        <ul className="space-y-5">
          {talks.map((talk) => (
            <li key={talk.title} className="flex flex-col sm:flex-row gap-1 sm:gap-0">
              <span className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light w-24 shrink-0 pt-1">
                {talk.role}
              </span>
              <div>
                <p className="font-[family-name:var(--font-body)] text-base text-charcoal leading-snug">
                  {talk.title}
                </p>
                <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mt-0.5">
                  {talk.event}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
