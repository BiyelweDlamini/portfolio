import heroImg from '../assets/hero.png'
import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'

export default function Hero() {
  return (
    <section id="home" style={{ padding: '32px 0' }}>
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={javascriptLogo} className="framework" alt="JavaScript logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>

      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/components</code> and save to test <code>HMR</code>
        </p>
      </div>
    </section>
  )
}

