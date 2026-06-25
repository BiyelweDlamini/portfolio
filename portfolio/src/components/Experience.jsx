export default function Experience() {
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
          {[
            'SQL reporting',
            'Python automation',
            'Linux Cron Jobs',
            'AWS IAM',
            'API integrations',
            'Microsoft 365 administration',
            'User Roles Management',
          ].map((label) => (
            <div key={label} className="col-12 col-sm-6 col-lg-4">
              <div className="experience-card h-100">
                <div className="experience-card-inner">{label}</div>
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
          {['Web development', 'Testing', 'Documentation', 'Requirements gathering'].map((label) => (
            <div key={label} className="col-12 col-sm-6 col-lg-4">
              <div className="experience-card h-100">
                <div className="experience-card-inner">{label}</div>
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
          {['Accuracy', 'Excel', 'Data verification'].map((label) => (
            <div key={label} className="col-12 col-sm-6 col-lg-4">
              <div className="experience-card h-100">
                <div className="experience-card-inner">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}


