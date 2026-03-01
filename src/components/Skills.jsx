import { SKILLS, CERTIFICATIONS, EDUCATION } from '../data'
import FadeIn from './FadeIn'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div className="section-label">// what I know</div>
          <h2 className="section-title">Skills & Tools</h2>
        </FadeIn>

        {/* Skill categories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'stretch',
          marginBottom: 40,
        }}>
          {SKILLS.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.07}>
              <div
                className="card"
                style={{ padding: '24px 28px', height: '100%' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: '1.2rem' }}>{group.emoji}</span>
                  <span style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    color: 'var(--text)',
                    letterSpacing: '0.02em',
                  }}>
                    {group.category}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {group.items.map(skill => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications + Education row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {/* Certifications */}
          <FadeIn delay={0.1}>
            <div>
              <div style={{
                fontFamily: 'Fira Code, monospace',
                fontSize: '0.7rem',
                color: '#f97316',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Certifications
              </div>
              {CERTIFICATIONS.map(cert => (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '0.8rem', padding: '9px 18px' }}
                >
                  <div
                    key={cert.code}
                    className="card"
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      background: 'linear-gradient(135deg, rgba(249,115,22,0.05) 0%, var(--card-bg) 100%)',
                      border: '1px solid rgba(249,115,22,0.2)',
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>{cert.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        color: 'var(--text)',
                        marginBottom: 4,
                      }}>
                        {cert.name}
                      </div>
                      <div style={{
                        fontFamily: 'Fira Code, monospace',
                        fontSize: '0.65rem',
                        color: 'var(--muted)',
                      }}>
                        {cert.code} · {cert.certId}
                      </div>
                    </div>
                    <span style={{
                      fontFamily: 'Fira Code, monospace',
                      fontSize: '0.65rem',
                      color: '#4ade80',
                      background: 'rgba(74,222,128,0.1)',
                      border: '1px solid rgba(74,222,128,0.25)',
                      padding: '3px 8px',
                      borderRadius: 20,
                    }}>
                      ✓ Verified
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.2}>
            <div>
              <div style={{
                fontFamily: 'Fira Code, monospace',
                fontSize: '0.7rem',
                color: '#f97316',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Education
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {EDUCATION.map(edu => (
                  <div
                    key={edu.degree}
                    className="card"
                    style={{ padding: '18px 24px' }}
                  >
                    <div style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      color: 'var(--text)',
                      marginBottom: 4,
                    }}>
                      🎓 {edu.degree}
                    </div>
                    <div style={{ color: 'var(--text2)', fontSize: '0.82rem', marginBottom: 4 }}>
                      {edu.school}
                    </div>
                    <div style={{
                      fontFamily: 'Fira Code, monospace',
                      fontSize: '0.68rem',
                      color: 'var(--muted)',
                    }}>
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
