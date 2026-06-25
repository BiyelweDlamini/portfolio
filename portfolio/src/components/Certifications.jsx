export default function Certifications() {
  const certs = [
    'Microsoft 365 Administration',
    'AWS IAM & Access Control',
    'Linux Scheduling & Automation',
    'API Integration Fundamentals',
    'Data Verification & Excel',
    'Requirements & Documentation',
  ]

  return (
    <section id="certifications" style={{ padding: '32px' }}>
      <h2>Certifications</h2>
      <p>Hover over cards to view certification highlights.</p>

      <div className="row g-2 experience-cards">
        {certs.map((c) => (
          <div key={c} className="col-12 col-sm-6 col-lg-4">
            <div className="experience-card h-100">
              <div className="experience-card-inner">{c}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


