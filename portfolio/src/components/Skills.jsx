export default function Skills() {
  const skills = [
    'SQL Reporting',
    'Python Automation',
    'Linux Cron Jobs',
    'AWS IAM',
    'API Integrations',
    'Microsoft 365 Admin',
    'User Roles Management',
    'Web Development',
    'Testing',
    'Documentation',
    'Requirements Gathering',
    'Excel / Data Verification',
  ]

  return (
    <section id="skills" style={{ padding: '32px' }}>
      <h2>Skills</h2>
      <p>Hover over the skill cards.</p>

      <div className="row g-2 experience-cards">
        {skills.map((s) => (
          <div key={s} className="col-12 col-sm-6 col-lg-4">
            <div className="experience-card h-100">
              <div className="experience-card-inner">{s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


