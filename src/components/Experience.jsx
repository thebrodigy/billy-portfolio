import { EXPERIENCES } from '../data'
import FadeIn from './FadeIn'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div className="section-label">// career path</div>
          <h2 className="section-title">Where I've worked</h2>
        </FadeIn>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, #f97316, rgba(249,115,22,0.1))',
          }} className="hidden md:block" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {EXPERIENCES.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.12}>
                <div style={{ display: 'flex', gap: 32, position: 'relative' }}>
                  {/* Timeline dot (desktop) */}
                  <div
                    className="hidden md:flex"
                    style={{ flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 4 }}
                  >
                    <div style={{
                      width: 14, height: 14, borderRadius: '50%',
                      background: exp.current ? '#f97316' : 'var(--bg4)',
                      border: '2px solid #f97316',
                      marginLeft: -6.5,
                      boxShadow: exp.current ? '0 0 0 4px rgba(249,115,22,0.2)' : 'none',
                      transition: 'all 0.3s',
                      animation: exp.current ? 'pulseGlow 2s infinite' : 'none',
                      zIndex: 1,
                      flexShrink: 0,
                    }} />
                  </div>

                  {/* Card */}
                  <div
                    className="card"
                    style={{
                      flex: 1,
                      padding: '28px 32px',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                          <span style={{ fontSize: '1.4rem' }}>{exp.emoji}</span>
                          <h3 style={{
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            color: 'var(--text)',
                          }}>
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span style={{
                              fontFamily: 'Fira Code, monospace',
                              fontSize: '0.62rem',
                              padding: '2px 8px',
                              borderRadius: 20,
                              background: 'rgba(249,115,22,0.12)',
                              border: '1px solid rgba(249,115,22,0.3)',
                              color: '#f97316',
                              letterSpacing: '0.06em',
                            }}>
                              current
                            </span>
                          )}
                        </div>
                        <div style={{ color: '#f97316', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'Syne, sans-serif' }}>
                          {exp.company}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 3 }}>
                          {exp.period}
                        </div>
                        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>
                          📍 {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {exp.highlights.map(h => (
                        <li key={h} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <span style={{
                            color: '#f97316',
                            fontSize: '0.6rem',
                            marginTop: 7,
                            flexShrink: 0,
                          }}>▶</span>
                          <span style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.65 }}>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 17, marginBottom: 24 }}>
                      {exp.tags.map(t => (
                        <span key={t.label} className="chip">
                          <i className={`${t.icon} colored`} style={{ fontSize: '0.9rem' }} />
                          <span style={{ fontSize: '0.75rem', color: 'var(--text2)' }}>&nbsp;{t.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
