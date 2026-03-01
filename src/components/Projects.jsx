import { PROJECTS } from '../data'
import FadeIn from './FadeIn'

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div className="section-label">// side quests</div>
          <h2 className="section-title">More than just a hobby</h2>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.15}>
              <div
                className="card"
                style={{
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top glow accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  borderRadius: '16px 16px 0 0',
                }} />

                {/* Background pattern */}
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 120, height: 120,
                  background: `radial-gradient(circle, ${project.color}14 0%, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }} />

                <img src={project.thumbnail} alt={`${project.name} thumbnail`} style={{ width: '100%', borderRadius: 12, marginBottom: 20 }} />
                {/* Category */}
                <div style={{
                  fontFamily: 'Fira Code, monospace',
                  fontSize: '0.68rem',
                  color: project.color,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}>
                  {project.tagline}
                </div>

                {/* Name */}
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: 'var(--text)',
                  marginBottom: 16,
                  lineHeight: 1,
                }}>
                  {project.name}
                </h3>

                {/* Description */}
                <p style={{
                  color: 'var(--text2)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: 24,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                  {project.tags.map(t => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-orange"
                        style={{ fontSize: '0.8rem', padding: '9px 18px' }}
                      >
                        <LinkIcon />
                        Visit
                      </a>
                    )}
                  </span>
                  {project.github && (
                    project.github.map(repo => (
                      <span>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-outline"
                          style={{ fontSize: '0.8rem', padding: '9px 18px', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                        >
                          <GitHubIcon />
                          {repo.label}
                        </a>
                      </span>
                    ))
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* More on GitHub nudge */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 48,
            textAlign: 'center',
          }}>
            <a
              href="https://github.com/thebrodigy"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ display: 'inline-flex' }}
            >
              <GitHubIcon />
              More on GitHub ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
