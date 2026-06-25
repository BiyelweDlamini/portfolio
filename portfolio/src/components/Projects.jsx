export default function Projects() {
  const projects = [
    {
      title: 'SQL Reporting Dashboard',
      desc: 'Automated KPI reporting and scheduled exports.',
    },
    {
      title: 'Python Automation Scripts',
      desc: 'Process automation to reduce manual admin effort.',
    },
    {
      title: 'Linux Cron Job Workflows',
      desc: 'Reliable scheduled tasks for recurring operations.',
    },
    {
      title: 'API Integrations',
      desc: 'Integrate services for streamlined workflows.',
    },
    {
      title: 'Microsoft 365 Administration',
      desc: 'User management, access policies, and productivity.',
    },
    {
      title: 'AWS IAM Access Control',
      desc: 'Fine-grained permissions and role-based access.',
    },
  ]

  return (
    <section id="projects" style={{ padding: '32px' }}>
      <h2>Projects</h2>
      <p>Hover over cards to preview key project highlights.</p>

      <div className="row g-2 experience-cards">
        {projects.map((p) => (
          <div key={p.title} className="col-12 col-sm-6 col-lg-4">
            <div className="experience-card h-100">
              <div className="experience-card-inner">
                <div className="experience-card-title">{p.title}</div>
                <div className="experience-card-subtitle">{p.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


