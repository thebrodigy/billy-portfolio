import FadeIn from "./FadeIn"
import { SERVICES } from "../data"

export default function Services() {
    return (
        <section id="services" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
                <FadeIn>
                    <div className="section-label">// what i can do for you</div>
                    <h2 className="section-title">Services I offer</h2>
                </FadeIn>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 24,
                    alignItems: 'stretch',
                    marginBottom: 40,
                }}>

                    {SERVICES.map((service, i) => (
                        <FadeIn key={service.name} delay={i * 0.07}>
                            <div
                                className="card"
                                style={{ padding: '24px 28px', height: '100%' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                                    <span style={{ fontSize: '1.2rem' }}>{service.emoji}</span>
                                    <span style={{
                                        fontFamily: 'Syne, sans-serif',
                                        fontWeight: 700,
                                        fontSize: '0.82rem',
                                        color: 'var(--text)',
                                        letterSpacing: '0.02em',
                                    }}>
                                        {service.name}
                                    </span>
                                </div>
                                <div style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.5 }} >
                                    {service.description}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}