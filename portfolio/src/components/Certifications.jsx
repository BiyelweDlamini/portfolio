export default function Certifications() {
  const certs = [
    'IBM Full Stack Software Developer Professional Certificate - IBM',
    'Programming in HTML5, with JavaScript and CSS - Softech',
    'IOT (Internet of things) wireless & cloud computing emerging technologies - Coursera',
    'Computer hardware basics - Cisco',
    'Python Essentials 1 - Cisco',
    'Python Essentials 2 - Cisco',
    'Data Analytics essentials - Cisco',
    'Introduction to Data Science – Cisco',
    'IT Customer Support Basics - Cisco',
    'Intro to Machine Learning - Kaggle Learn',
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


