import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'
import useTheme from './hooks/useTheme.js'
import useScrollReveal from './hooks/useScrollReveal.js'

function App() {
  const { theme, toggleTheme } = useTheme()

  useScrollReveal()

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
