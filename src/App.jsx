import { useTheme } from './hooks/useTheme'

import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import Services from './components/Services'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="grain">
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
