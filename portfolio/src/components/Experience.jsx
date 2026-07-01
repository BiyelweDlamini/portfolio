export default function Experience() {
  const eMaliHighlights = [
    { label: 'SQL reporting', icon: '📊' },
    { label: 'Python automation', icon: '🐍' },
    { label: 'Linux Cron Jobs', icon: '⏰' },
    { label: 'AWS IAM', icon: '☁️' },
    { label: 'API integrations', icon: '🔌' },
    { label: 'Microsoft 365 administration', icon: '🧑‍💼' },
    { label: 'User Roles Management', icon: '👥' },
  ];

  const slomoesHighlights = [
    { label: 'Web development', icon: '🌐' },
    { label: 'Testing', icon: '🧪' },
    { label: 'Documentation', icon: '📄' },
    { label: 'Requirements gathering', icon: '📝' },
  ];

  const examsHighlights = [
    { label: 'Accuracy', icon: '✅' },
    { label: 'Excel', icon: '📗' },
    { label: 'Data verification', icon: '🔍' },
  ];

  return (
    <section id="experience" style={{ padding: '32px' }}>
      <h2>Experience</h2>

      <article>
        <h3 style={{ margin: '0 0 6px' }}>E-Mali Ltd</h3>
        <p style={{ margin: '0 0 4px', color: 'var(--text-h)' }}>
          IT Administrator | July 2025 – Present
        </p>

        <h4 style={{ margin: '12px 0 8px' }}>Highlight:</h4>

        <div className="row g-2 experience-cards">
          {eMaliHighlights.map(({ label, icon }) => (
            <div key={label} className="col-12 col-sm-6 col-lg-4">
              <div className="experience-card h-100">
                <div className="experience-card-inner">
                  <span className="experience-card-icon" aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>


      <article style={{ marginTop: 22 }}>
        <h3 style={{ margin: '0 0 6px' }}>Slomoes Corporation</h3>
        <p style={{ margin: '0 0 4px', color: 'var(--text-h)' }}>
          Software Developer | February 2025 – May 2025
        </p>

        <h4 style={{ margin: '12px 0 8px' }}>Highlight:</h4>
        <div className="row g-2 experience-cards">
          {slomoesHighlights.map(({ label, icon }) => (
            <div key={label} className="col-12 col-sm-6 col-lg-4">
              <div className="experience-card h-100">
                <div className="experience-card-inner">
                  <span className="experience-card-icon" aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article style={{ marginTop: 22 }}>
        <h3 style={{ margin: '0 0 6px' }}>Examinations Counsil of Eswatini</h3>
         <p style={{ margin: '0 0 4px', color: 'var(--text-h)' }}>
          Data Capturer | November 2024 – December 2024
        </p>

        <h4 style={{ margin: '12px 0 8px' }}>Highlight:</h4>
        <div className="row g-2 experience-cards">
          {examsHighlights.map(({ label, icon }) => (
            <div key={label} className="col-12 col-sm-6 col-lg-4">
              <div className="experience-card h-100">
                <div className="experience-card-inner">
                  <span className="experience-card-icon" aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}


