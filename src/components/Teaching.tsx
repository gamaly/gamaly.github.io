const techChangeCourses = [
  "TC141: Mapping for Social Good (2012, 2013, 2015)",
  "TC104: Technology for Humanitarian Assistance (2012)",
];

export default function Teaching() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-8">
          Teaching
        </h2>

        <div className="space-y-6">
          <p className="font-[family-name:var(--font-body)] text-base text-charcoal/75 leading-relaxed">
            Guest lecturer and course instructor at Johns Hopkins SAIS, the U.S.
            Department of State, and the U.S. Institute of Peace, including
            early online course development on Moodle when that was still a
            frontier.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/80 font-medium">
                U.S. Department of State
              </p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mb-1">
                Learning and Training Specialist
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
                Designed and taught multiple courses in monitoring and evaluation and conflict analysis.
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/80 font-medium">
                U.S. Institute of Peace
              </p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mb-1">
                Education and Training Center
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
                Courses in international negotiation and conflict resolution.
              </p>
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs text-warm-gray-light mb-3">
              TechChange courses
            </p>
            <ul className="space-y-1.5">
              {techChangeCourses.map((course) => (
                <li
                  key={course}
                  className="font-[family-name:var(--font-body)] text-sm text-charcoal/70"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
