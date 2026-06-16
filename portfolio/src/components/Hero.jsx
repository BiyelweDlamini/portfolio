import heroImg from '../assets/hero.png'
import biyelweImg from '../assets/biyelwe.png'

export default function Hero() {
  return (
    <section id="home" className="heroPage">
      <div className="heroBg" aria-hidden="true" />

      <div className="heroInner">
        <div className="heroLeft">
          <img className="heroAvatar" src={biyelweImg} alt="Profile" />
          <div className="heroLeftPlaceholder">Replace with your image</div>
        </div>

        <div className="heroRight">
          <h1>Biyelwe Dlamini</h1>
          <p>Hi, I'm Biyelwe Dlamini.</p>
            
          <p>IT Administrator & Software Developer with hands-on experience in fintech. I build practical solutions through automation, system support, and software development to help businesses operate more efficiently and securely.</p>
          
          <p>Explore my projects, experience, and the technologies I use to solve real-world problems</p>

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


