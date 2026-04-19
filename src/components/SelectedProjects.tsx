const projects = [
  {
    title: "Digital Harms Tracker",
    description:
      "Structured database linking digital harm incidents to policy responses. Public interest AI infrastructure.",
    status: "Active",
    link: "https://digitalharmstracker.org",
    linkLabel: "digitalharmstracker.org",
  },
  {
    title: "Bait to Plate",
    description:
      "One of the largest seafood supply chain accountability databases in development, built at The Outlaw Ocean Project. Links fishing vessels, labor records, and catch data to trace accountability from ocean to consumer.",
    status: "Active",
  },
  {
    title: "USAID Digital Frontiers",
    description:
      "Technical advisory and delivery work for USAID's flagship digital development program — a $90M DAI-implemented initiative advancing responsible technology across USAID Missions worldwide. Work included AI strategy, responsible AI frameworks, and technical capacity building.",
    status: "Completed",
  },
  {
    title: "EvidenceBase.ai",
    description:
      "Personalized copilot tool built for non-profits to surface and synthesize evidence for program design and decision-making. Open source project, sunset in 2025.",
    status: "Sunset",
  },
  {
    title: "FEWS NET Health Threat Extension Support",
    description:
      "ML-powered subnational disease forecasts for Mozambique and Somalia, built for USAID. Extended FEWS NET food security monitoring to include health threat modeling at the subnational level.",
    status: "Completed",
  },
  {
    title: "AI-Powered Conflict Dataset Builder",
    description:
      "Proof of concept using NLP to build structured datasets from conflict news coverage.",
    status: "Archived",
  },
  {
    title: "Spa Creek Water Testing Platform",
    description:
      "Civic tech for Spa Creek Conservancy — weekly water quality tracking for Annapolis waterways. Volunteer project.",
    status: "Completed",
  },
];

export default function SelectedProjects() {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-parchment">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-warm-gray-light mb-12">
          Selected Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col sm:flex-row gap-2 sm:gap-6"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-[family-name:var(--font-mono)] text-base font-bold text-charcoal">
                    {project.title}
                  </h3>
                  <span
                    className={`font-[family-name:var(--font-mono)] text-xs ${
                      project.status === "Active"
                        ? "text-amber"
                        : "text-warm-gray-light"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-charcoal/70 leading-relaxed">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-sm text-amber hover:text-amber-dark transition-colors mt-1"
                  >
                    {project.linkLabel}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 10L10 2M10 2H4M10 2V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
