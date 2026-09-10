export default function Experience(props) {
  const experiences = [
    {
      company: "John Deere",
      logo: "/johndeere.png",
      role: "Product Engineering Intern",
      period: "May 2026 – Aug 2026",
      location: "Silvis, IL",
      current: false,
      tags: ["Simulink", "Simscape", "Hydraulics", "Control Systems"],
      bullets: [
        "Built and validated a Simulink/Simscape model of a multi-cylinder active hydraulic suspension system, matching simulated natural frequency and damping against hand-calculated predictions.",
        "Defined software, hardware, and mechanical requirements for an active hydraulic suspension controller to meet performance and safety specifications.",
        "Evaluated and helped select a sensor for the system against design and performance requirements.",
        "Designed a proportional feedback controller with valve command logic that maps controller output to fill and dump valve commands.",
        "Selected and integrated a cost-effective controller that met system specifications after the initial option exceeded budget; wired sensor and actuator components to firmware drivers, ensuring correct signal flow and fault tolerance.",
      ],
    },
    {
      company: "Collins Aerospace",
      logo: "/rtx.png",
      role: "Electrical Engineer Co-Op",
      period: "Jan 2025 – Aug 2025",
      location: "Cedar Rapids, IA",
      current: false,
      tags: ["Electrical Troubleshooting", "Wiring Diagrams", "Requirements Management"],
      bullets: [
        "Updated product test requirement documents, ensuring compliance with revised specifications and improving test clarity and repeatability.",
        "Used root cause analysis to resolve test system issues by troubleshooting cables and equipment with wiring diagrams and multimeters; ensured test station backups were functional and available to prevent production downtime.",
        "Gathered and tested nonconforming parts; compiled and presented failure data for quality engineers to support root cause analysis and corrective action, recovering over $160,000 in part cost.",
        "Mentored a peer by delegating tasks and offering technical support.",
        "Contributed to a circuit board re-spin, supporting validation efforts by creating an engineering markup for a custom adapter board used in test; collaborated with design engineers to finalize documentation.",
      ],
    },
    {
      company: "Casey's",
      logo: "/caseys.jpg",
      logoClass: "w-full h-full scale-150",
      role: "Software Engineer Intern",
      period: "May 2024 – Aug 2024",
      location: "Ankeny, IA",
      current: false,
      tags: ["SQL", "C#", "SSMS", "Agile", "Supply Chain Software"],
      bullets: [
        "Developed and optimized SQL queries in SQL Server Management Studio, including tracking beverages shipped from distribution center to 50+ stores, and created stored procedures for data filtering.",
        "Assisted in data migration for 2,600+ stores and 3 distribution centers to/from order prediction software.",
        "Used C# to update calculations, create conversions, and build tests to validate data within business software.",
        "Used Agile and Scrum development processes to successfully resolve 30+ Kanban board tickets, comprised of user stories and bugs.",
        "Collaborated in pair programming/mobbing sessions with multiple teams to deliver software more effectively and efficiently.",
      ],
    },
    {
      company: "Republic Companies",
      logo: "/republiccompanies.jpg",
      logoClass: "w-full h-full",
      role: "Information Technology Intern",
      period: "Jun 2023 – Aug 2023",
      location: "Davenport, IA",
      current: false,
      tags: ["JavaScript", "Infor", "IT Support", "Computer Hardware"],
      bullets: [
        "Developed front-end features for business software using JavaScript and Infor.",
        "Assessed and troubleshot computer problems reported by 10+ employees.",
        "Maintained and serviced computer hardware, including drives, servers, and network systems.",
      ],
    },
  ];

  return (
    <div id={props.id} className="bg-navy-blue text-white h-auto md:px-24 md:py-12 font-mono">
      <div className="flex flex-col items-center px-6">
        <h1 className="mt-10 md:mt-0 mb-10 text-4xl font-medium">
          Career <span className="font-bold">Path</span>
        </h1>
        <div className="w-full max-w-3xl pb-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex mb-6">
              <div className="flex flex-col items-center mr-5 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={`${exp.logoClass ?? "w-10 h-10"} object-contain`}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-gray-600 mt-3" />
                )}
              </div>
              <div className="flex-1 bg-mist-black rounded-xl p-5 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg font-bold">{exp.role}</span>
                    {exp.current && (
                      <span className="badge badge-success badge-sm">Current</span>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="text-gray-400 text-sm mb-3">
                  {exp.company} · {exp.location}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="badge badge-outline badge-info text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-blue-400 flex-shrink-0 mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
