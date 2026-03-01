import { META } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '28px 24px',
        background: 'var(--bg2)',
      }}
    >
      <div style={{
        maxWidth: 1000,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>
            © {year} {META.name}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {[
            { label: 'GitHub', href: META.github },
            { label: 'LinkedIn', href: META.linkedin },
            { label: 'Email', href: `mailto:${META.email}` },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                fontFamily: 'Fira Code, monospace',
                fontSize: '0.72rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          ))}
        </div>

        <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.68rem', color: 'var(--muted)' }}>
          Built with React + Vite + Tailwind CSS ☕
        </span>
      </div>
    </footer>
  )
}
