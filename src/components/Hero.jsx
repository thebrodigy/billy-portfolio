import { META, STATS } from '../data'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-10%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }} />

      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative' }}>

        {/* Main layout: text left, photo right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          gap: 12,
          alignItems: 'center',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1fr) auto',
        }}>

          {/* LEFT: Text */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px',
                border: '1px solid rgba(249,115,22,0.3)',
                borderRadius: 20,
                background: 'rgba(249,115,22,0.08)',
                marginBottom: 28,
                opacity: 0,
                animation: 'fadeUp 0.7s ease 0.05s forwards',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'block', animation: 'pulseGlow 2s infinite', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.72rem', color: '#f97316', letterSpacing: '0.06em' }}>
                open to new opportunities
              </span>
            </div>

            {/* Name */}
            <div style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.15s forwards' }}>
              <h1 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(3rem, 9vw, 5.5rem)',
                lineHeight: 0.95,
                color: 'var(--text)',
                marginBottom: 4,
              }}>
                Code. Ship.
              </h1>
              <h1 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(3rem, 9vw, 5.5rem)',
                lineHeight: 0.95,
                background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 24,
              }}>
                Impact.
              </h1>
            </div>   
          </div>

          {/* RIGHT: Photo */}
          <div
            style={{
              opacity: 0,
              animation: 'fadeIn 0.9s ease 0.5s forwards',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 12,
            }}
          >
            <div style={{ position: 'relative' }}>
              {/* Spinning ring */}
              <div style={{
                position: 'absolute', inset: -8,
                borderRadius: '50%',
                border: '2px dashed rgba(249,115,22,0.3)',
                animation: 'spinSlow 20s linear infinite',
              }} />

              {/* Photo / placeholder */}
              <div style={{
                width: 240,
                height: 240,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid transparent',
                background: `
                  linear-gradient(var(--bg2), var(--bg2)) padding-box,
                  linear-gradient(135deg, #f97316, #fbbf24, #f97316) border-box
                `,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img src={META.photo}
                    alt="Billy Labay"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Floating badge: Caffeine */}
              <div style={{
                position: 'absolute', bottom: 10, right: -20,
                background: 'var(--bg2)',
                border: '1px solid var(--orange-border)',
                borderRadius: 12,
                padding: '8px 12px',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 24px var(--shadow)',
                animation: 'float 5s ease-in-out infinite',
              }}>
                <span style={{ fontSize: '1.1rem' }}>☕</span>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.7rem', color: 'var(--text)' }}>∞</div>
                  <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.6rem', color: 'var(--muted)' }}>Caffeine Intake</div>
                </div>
              </div>

              {/* Floating badge: 8 yrs */}
              <div style={{
                position: 'absolute', top: 10, left: -24,
                background: 'var(--bg2)',
                border: '1px solid var(--orange-border)',
                borderRadius: 12,
                padding: '8px 12px',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 24px var(--shadow)',
                animation: 'float 5s ease-in-out 2s infinite',
              }}>
                <span style={{ fontSize: '1.1rem' }}>🔥</span>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.7rem', color: 'var(--text)' }}>8+ Years</div>
                  <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.6rem', color: 'var(--muted)' }}>Fullstack Exp.</div>
                </div>
              </div>
            </div>
          </div>
        <div>

        {/* Tagline */}
        <div style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.35s forwards', marginBottom: 36 }}>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: 'var(--text2)',
            maxWidth: 480,
            lineHeight: 1.75,
          }}>
            Hi! I'm <strong>Billy Labay</strong> — a fullstack software engineer who writes boring, reliable code — intentionally, because in the world of software, boring is beautiful.
          </p>
        </div>
      
        {/* Role chip */}
        <div style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.25s forwards', marginBottom: 20 }}>
          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
            <span key='Fullstack Engineer' className="chip">Backend Engineer</span>
            <span key='Java' className="chip">Java</span>
            <span key='Spring Boot' className="chip">Spring Boot</span>
            <span key='JavaScript' className="chip">JavaScript</span>
            <span key='Angular' className="chip">Angular</span>
            <span key='React' className="chip">React</span>
            <span key='Azure' className="chip">Azure</span>
          </div>
        </div>

      {/* CTA Buttons */}
        <div style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.45s forwards', display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
          <a href={`mailto:${META.email}`} className="btn-orange">
            Say hello 👋
          </a>
          <a href={META.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
            LinkedIn ↗
          </a>
          <a href={META.github} target="_blank" rel="noreferrer" className="btn-outline">
            GitHub ↗
          </a>
        </div>

        {/* Stats */}
          <div style={{
            opacity: 0,
            animation: 'fadeUp 0.7s ease 0.55s forwards',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 24,
            paddingTop: 28,
            borderTop: '1px solid var(--border)',
          }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                  color: '#f97316',
                  lineHeight: 1,
                  marginBottom: 5,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: 'Fira Code, monospace',
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
