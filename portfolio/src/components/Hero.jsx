import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="home" className="heroPage">
      <div className="heroBg" aria-hidden="true" />

      <div className="heroInner">
        <div className="heroLeft">
          <img className="heroAvatar" src={heroImg} alt="Profile" />
          <div className="heroLeftPlaceholder">Replace with your image</div>
        </div>

        <div className="heroRight">
          <h1>Your Name</h1>
          <p>
            Short introduction goes here. Replace this placeholder text with your
            headline and what you do.
          </p>

          <div className="heroRightActions">
            <a className="heroCta" href="#contact">
              Contact me
            </a>
            <a className="heroCtaSecondary" href="#projects">
              View projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


