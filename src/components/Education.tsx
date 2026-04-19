export default function Education() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-12">
          Education
        </h2>

        <div className="space-y-10">

          {/* University of Denver */}
          <div>
            <p className="font-[family-name:var(--font-body)] text-base font-semibold text-charcoal leading-snug">
              University of Denver
            </p>
            <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mt-0.5 mb-3">
              MA, International Studies — International Political Economy, Comparative Politics, International Political Theory
            </p>
            <ul className="space-y-2">
              <li className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
                <span className="text-charcoal/80">Graduate Researcher, Pardee Center for International Futures.</span>{" "}
                Research with the International Futures (IFs) integrated assessment model.
              </li>
              <li className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
                <span className="text-charcoal/80">Graduate Researcher, Global Health Affairs Program.</span>{" "}
                Mobile survey design for global health data collection.
              </li>
              <li className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
                <span className="text-charcoal/80">Coordinator, TechWeek@Korbel.</span>{" "}
                Convened international experts on remote sensing, mobile technology, and digital tools in development.
              </li>
            </ul>
          </div>

          {/* St. Mary's College of Maryland */}
          <div>
            <p className="font-[family-name:var(--font-body)] text-base font-semibold text-charcoal leading-snug">
              St. Mary&rsquo;s College of Maryland
            </p>
            <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mt-0.5 mb-3">
              BA, Policy, Ethics &amp; Conflict (self-designed major)
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
              Senior thesis on international diplomatic efforts in conflict resolution.
            </p>
          </div>

          {/* George Mason University */}
          <div>
            <p className="font-[family-name:var(--font-body)] text-base font-semibold text-charcoal leading-snug">
              George Mason University
            </p>
            <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mt-0.5 mb-3">
              Coursework toward mediation certification, Northern Virginia Mediation Service
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
              Public disputes, consensus-building, dispute resolution, and conflict management systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
