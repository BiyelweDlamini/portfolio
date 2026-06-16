export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <nav
        style={{
          width: '1126px',
          maxWidth: '100%',
          margin: '0 auto',
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          padding: '14px 16px',
          flexWrap: 'wrap',
        }}
      >
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#experience" style={linkStyle}>Experience</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#certifications" style={linkStyle}>Certifications</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </nav>
    </header>
  )
}

const linkStyle = {
  color: 'var(--text-h)',
  textDecoration: 'none',
  padding: '6px 10px',
  borderRadius: 8,
  background: 'var(--social-bg)',
  border: '1px solid rgba(0,0,0,0)',
  transition: 'box-shadow 0.3s, border-color 0.3s',
}
