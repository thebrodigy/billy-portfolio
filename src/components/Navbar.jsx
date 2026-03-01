import { useEffect, useState } from 'react'

const NAV_LINKS = ['About', 'Services', 'Experience', 'Projects', 'Skills', 'Contact']

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const MOBILE_BREAKPOINT = 768

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('About')
  const [isMobile, setIsMobile]   = useState(window.innerWidth < MOBILE_BREAKPOINT)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 40)
  window.addEventListener('scroll', onScroll)

  // Watch each section and update active nav on scroll
  const observers = []
  NAV_LINKS.forEach(link => {
    const el = document.getElementById(link.toLowerCase())
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(link)
      },
      {
        rootMargin: '-40% 0px -55% 0px', // triggers when section is in the middle of viewport
        threshold: 0,
      }
    )
    obs.observe(el)
    observers.push(obs)
  })

  return () => {
    window.removeEventListener('scroll', onScroll)
    observers.forEach(obs => obs.disconnect())
  }
}, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#hamburger-btn')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [menuOpen])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 64,
        background: scrolled ? 'var(--card-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '0 20px',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* ── Logo ── */}
          <button
            onClick={() => scrollTo('About')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}
          >
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: 'var(--text)', whiteSpace: 'nowrap' }}>
              billy<span style={{ color: '#f97316' }}>labay</span>
            </span>
          </button>

          {/* ── Desktop links (hidden on mobile) ── */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {NAV_LINKS.map(l => (
                <button key={l} className={`nav-link ${active === l ? 'active' : ''}`} onClick={() => scrollTo(l)}>
                  {l}
                </button>
              ))}
            </div>
          )}

          {/* ── Right controls ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            {/* Theme toggle — always visible */}
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger — only on mobile */}
            {isMobile && (
              <button
                id="hamburger-btn"
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 6, display: 'flex', flexDirection: 'column', gap: 5,
                }}
              >
                {[0, 1, 2].map(i => (
                  <span key={i} style={{
                    display: 'block', width: 22, height: 2, borderRadius: 2,
                    background: 'var(--text)',
                    transition: 'all 0.28s ease',
                    transform:
                      menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                      menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }} />
                ))}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <div
        id="mobile-menu"
        style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 49,
          background: 'var(--bg2)',
          borderBottom: menuOpen ? '1px solid var(--border)' : 'none',
          backdropFilter: 'blur(16px)',
          overflow: 'hidden',
          maxHeight: menuOpen ? 320 : 0,
          transition: 'max-height 0.35s ease, border-color 0.2s',
        }}
      >
        <div style={{ padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {NAV_LINKS.map((l, i) => (
            <button
              key={l}
              className="nav-link"
              onClick={() => scrollTo(l)}
              style={{
                padding: '13px 4px',
                textAlign: 'left',
                width: '100%',
                fontSize: '1rem',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid var(--border)' : 'none',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-8px)',
                transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`,
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
