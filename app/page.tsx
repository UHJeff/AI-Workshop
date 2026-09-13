const currentYear = new Date().getFullYear();

const projects = [
  {
    title: "AI Workshops",
    description: "Running hands-on sessions to help students and founders get comfortable building with AI.",
  },
  {
    title: "BUS / ENGR 102",
    description: "Teaching and supporting coursework at the intersection of business and engineering.",
  },
  {
    title: "AI Jobs",
    description: "Helping connect people with emerging AI-related roles and opportunities.",
  },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <h1>Jeff Hui</h1>
        <p className="tagline">I help UH startups</p>
      </header>

      <main>
        <section className="section" id="this-semester">
          <h2>This semester</h2>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.title} className="project-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <p>
            I&apos;m Jeff Hui, and I help UH startups get off the ground &mdash;
            whether that means teaching practical AI skills, connecting
            founders with the right people, or building the tools they need
            to move faster. I care about making startup and AI knowledge
            accessible to the UH community.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {currentYear} Jeff Hui
        </p>
        <p>Built with Claude Code</p>
      </footer>
    </>
  );
}
