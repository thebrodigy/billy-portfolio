import { META } from '../data'
import FadeIn from './FadeIn'

const CONTACT_ITEMS = [
  { icon: '✉️', label: 'Email', value: 'labaybillyjames@gmail.com', href: `mailto:${META.email}` },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/billy-labay', href: META.linkedin },
  { icon: '🐙', label: 'GitHub', value: 'github.com/thebrodigy', href: META.github },
  { icon: '📍', label: 'Location', value: 'Laguna, Philippines', href: null },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'start',
        }}>
          {/* Left: headline */}
          <div>
            <FadeIn>
              <div className="section-label">// let's connect</div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                Got something<br />
                <span style={{
                  background: 'linear-gradient(135deg, #f97316, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  cool in mind?
                </span>
              </h2>
              <p style={{
                color: 'var(--text2)',
                fontSize: '1rem',
                lineHeight: 1.75,
                maxWidth: 380,
                marginBottom: 36,
              }}>
                I'm open to backend engineering roles, interesting side projects, and just good conversations about building scalable systems. Drop me a line!
              </p>
              <a href={`mailto:${META.email}`} className="btn-orange" style={{ fontSize: '0.9rem', padding: '14px 28px' }}>
                Send me an email 📬
              </a>
            </FadeIn>
          </div>

          {/* Right: contact links */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CONTACT_ITEMS.map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.09}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="card"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16,
                        padding: '16px 22px',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.25s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateX(6px)'
                        e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateX(0)'
                        e.currentTarget.style.borderColor = 'var(--border)'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontFamily: 'Fira Code, monospace',
                          fontSize: '0.62rem',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          marginBottom: 3,
                        }}>
                          {item.label}
                        </div>
                        <div style={{ color: 'var(--text)', fontSize: '0.88rem', fontWeight: 500 }}>
                          {item.value}
                        </div>
                      </div>
                      <span style={{ color: '#f97316', fontSize: '1rem' }}>↗</span>
                    </a>
                  ) : (
                    <div
                      className="card"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16,
                        padding: '16px 22px',
                        cursor: 'default',
                      }}
                    >
                      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontFamily: 'Fira Code, monospace',
                          fontSize: '0.62rem',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          marginBottom: 3,
                        }}>
                          {item.label}
                        </div>
                        <div style={{ color: 'var(--text)', fontSize: '0.88rem', fontWeight: 500 }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
