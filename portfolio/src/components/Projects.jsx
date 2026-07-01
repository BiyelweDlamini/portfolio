export default function Projects() {
  const projects = [
    {
      title: 'Using Tensorflow and CNNs to Detect forged handwritten signatures',
      desc: 'A deep learning model to identify forged signatures using convolutional neural networks. I implemented a CNN architecture, trained it on a dataset of genuine and forged signatures, and achieved a model that could fairly distinguish between authentic and forged signatures. This project demonstrates my skills in machine learning, image processing, and model evaluation. It was my final year project for my BSc in Information Technology at the University of Eswatini.',
    },
    {
      title: 'Web Development',
      desc: 'Developments of websites using HTML, CSS, and JavaScript. I have built responsive and interactive web pages, ensuring cross-browser compatibility and optimal user experience.',
    },
    {
      title: 'Flappy Bird Game Clone',
      desc: 'A simple implementation of the popular Flappy Bird game using Unity and C#. I recreated the core mechanics of the game, including player controls, obstacle generation, and scoring system. This project showcases my understanding of game development principles and Unity engine.',
    },
    {
      title: 'API Integrations',
      desc: 'Integrate services for streamlined workflows.',
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


