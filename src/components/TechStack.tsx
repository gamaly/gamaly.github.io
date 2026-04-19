const skills = [
  { label: "Languages", items: "Python · R · SQL · JavaScript" },
  { label: "AI & NLP", items: "LLMs · NLP · text analysis · TF-IDF to transformers" },
  { label: "Geospatial", items: "GIS · ArcGIS · QGIS · geospatial analytics" },
  { label: "Data & Infra", items: "data engineering · statistical modeling · Power BI · Azure ML · Neo4j" },
  { label: "Statistics", items: "regression · sampling · causal inference · program evaluation" },
  { label: "Methods", items: "survey design · network analysis · spatial statistics" },
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-8">
          Technical
        </h2>

        <div className="space-y-3">
          {skills.map((row) => (
            <div key={row.label} className="flex flex-col sm:flex-row gap-1 sm:gap-0">
              <span className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light w-32 shrink-0 pt-0.5">
                {row.label}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-sm text-charcoal/80">
                {row.items}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
