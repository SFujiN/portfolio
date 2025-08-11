import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Wrench,
  FolderGit2,
  Award,
} from "lucide-react";

// ---- Quick edit: change anything inside this data object ----
const DATA = {
  name: "Donald Huynh",
  tagline: "Software Engineer • Full‑Stack • Systems",
  location: "Eagan, MN",
  email: "d0n4lddanghuynh@gmail.com",
  phone: "Provided upon request",
  github: "https://github.com/SFujiN",
  linkedin: "https://www.linkedin.com/in/donald-huynh338",
  resumeUrl: "/Donald_Huynh_Resume_2025.pdf", // replace with your hosted PDF if you have one
  education: [
    {
      school: "University of Minnesota – College of Continuing & Professional Studies",
      location: "Minneapolis, MN",
      title: "Custom Track",
      dates: "2024 – Present",
      details: ["Dean’s List (Spring 2024)", "Cumulative GPA: 3.18"],
    },
    {
      school: "University of Minnesota – College of Science & Engineering",
      location: "Minneapolis, MN",
      title: "B.S. in Computer Science",
      dates: "2018 – 2022",
      details: [
        "Relevant coursework: Applied Machine Learning, Computer Architecture, Software Engineering I, Fundamentals of Computer Graphics I, User Interface & Design, Linear Algebra, Calculus I, II and III, Introduction to Probablility and Statistics",
      ],
    },
  ],
  experience: [
    {
      company: "University of Minnesota",
      role: "Teaching Assistant",
      location: "Minneapolis, MN",
      dates: "2025 – Present",
      bullets: [
        "Educate and communicate with students on STEM topics.",
        "Spring 2025: Linear Algebra (CSCI 2033), Computer Architecture (CSCI/EE 4203/4363).",
        "Fall 2025: Computer Architecture (CSCI/EE 4203/4363).",
      ],
    },
    {
      company: "Hennepin County",
      role: "IT Analyst Intern II",
      location: "Minneapolis, MN",
      dates: "2023 – 2024",
      bullets: [
        "Researched technologies used across the IT department.",
        "Developed and maintained applications using TypeScript, Angular, and .NET Core.",
        "Troubleshot issues and performed application maintenance to improve stability.",
      ],
    },
  ],
  projects: [
    {
      name: "Ray Tracer",
      stack: ["C++"],
      link: null,
      desc:
        "Built a ray tracer inspired by 'Ray Tracing in One Weekend'; implemented ray–sphere intersection, shading, and camera controls.",
    },
    {
      name: "Aegis Voting System Counter",
      stack: ["C++", "UML", "GoogleTest"],
      link: null,
      desc:
        "Team of four; processed Open Party Listing and Instant Runoff voting. Used Waterfall and Agile Scrum across phases.",
    },
    {
      name: "Drone Delivery System",
      stack: ["C++", "UML", "GoogleTest"],
      link: null,
      desc:
        "Collaborated with multiple teams to design and test a delivery platform with unit tests for reliability.",
    },
  ],
  skills: {
    languages: [
      "Python",
      "C++",
      "C",
      "C#",
      "Java",
      "TypeScript",
      "JavaScript",
      "OCaml",
      "HTML/CSS",
      "SQL",
      "UML",
    ],
    tools: [
      "Node.js",
      "Angular",
      ".NET Core",
      "Git",
      "VS Code",
      "GNU Make",
      "GDB",
      "Valgrind",
      "GoogleTest",
    ],
    operatingSystems: ["Linux (Ubuntu/Debian)", "Windows", "macOS"],
  },
  other: [
    {
      title: "Volunteer Canvasser",
      org: "Get Out the Vote",
      location: "Savannah, GA",
      dates: "2022",
      notes: ["Engaged 100+ households for Georgia Runoff Election awareness."],
    },
    {
      title: "Participant",
      org: "MinneHack Hackathon",
      location: "Minneapolis, MN",
      dates: "2018 & 2019",
      notes: [
        "2019: Designed 3D models for a VR game (team of four).",
        "2018: Built a CSV data processing tool.",
      ],
    },
  ],
};

const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="h-5 w-5" />
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">{DATA.name}</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#other" className="hover:underline">Other</a>
          </nav>
          <div className="flex gap-3">
            <a aria-label="GitHub" href={DATA.github} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-neutral-100">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href={DATA.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-neutral-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Resume" href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-neutral-100">
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{DATA.name}</h1>
          <p className="text-neutral-600 mt-1">{DATA.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-700">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4"/>{DATA.location}</span>
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${DATA.email}`}><Mail className="h-4 w-4"/>{DATA.email}</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={`tel:${DATA.phone.replace(/[^\d]/g, "")}`}><Phone className="h-4 w-4"/>{DATA.phone}</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={DATA.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4"/>GitHub</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={DATA.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/>LinkedIn</a>
          </div>
        </motion.section>

        {/* Experience */}
        <Section id="experience" icon={Briefcase} title="Experience">
          <div className="space-y-6">
            {DATA.experience.map((job) => (
              <div key={job.company + job.role} className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{job.role} • {job.company}</h3>
                  <div className="text-sm text-neutral-600">{job.location} • {job.dates}</div>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <div className="h-8" />
        <Section id="projects" icon={FolderGit2} title="Projects">
          <div className="grid md:grid-cols-2 gap-4">
            {DATA.projects.map((p) => (
              <div key={p.name} className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-neutral-700">{p.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="text-xs rounded-full bg-neutral-100 px-2 py-1">{s}</span>
                      ))}
                    </div>
                  </div>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer" className="shrink-0 text-neutral-600 hover:text-neutral-900" aria-label="Open project">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <div className="h-8" />
        <Section id="skills" icon={Wrench} title="Technical Skills">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl border border-neutral-200 p-4">
              <h4 className="font-semibold">Languages</h4>
              <ul className="mt-2 list-disc pl-5">
                {DATA.skills.languages.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4">
              <h4 className="font-semibold">Frameworks & Tools</h4>
              <ul className="mt-2 list-disc pl-5">
                {DATA.skills.tools.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4">
              <h4 className="font-semibold">Operating Systems</h4>
              <ul className="mt-2 list-disc pl-5">
                {DATA.skills.operatingSystems.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Education */}
        <div className="h-8" />
        <Section id="education" icon={GraduationCap} title="Education">
          <div className="space-y-4">
            {DATA.education.map((e) => (
              <div key={e.school} className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{e.school}</h3>
                  <div className="text-sm text-neutral-600">{e.location} • {e.dates}</div>
                </div>
                <div className="text-sm text-neutral-700">{e.title}</div>
                {e.details?.length ? (
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        {/* Other */}
        <div className="h-8" />
        <Section id="other" icon={Award} title="Other Experience">
          <div className="space-y-4">
            {DATA.other.map((o) => (
              <div key={o.org + o.title} className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{o.title} • {o.org}</h3>
                  <div className="text-sm text-neutral-600">{o.location} • {o.dates}</div>
                </div>
                {o.notes?.length ? (
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    {o.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} {DATA.name}
        </footer>
      </main>
    </div>
  );
}

