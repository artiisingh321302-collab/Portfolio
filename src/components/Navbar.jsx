import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/profile.js'
import useActiveSection from '../hooks/useActiveSection.js'
import Button from './Button.jsx'
import SocialLinks from './SocialLinks.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 900px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a
          className="brand"
          href="#home"
          aria-label={`${profile.name} - home`}
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className={`nav-link ${
                activeSection === item.id ? 'is-active' : ''
              }`}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <X size={19} aria-hidden="true" />
            ) : (
              <Menu size={19} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <nav
            className="container mobile-nav"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.id}
                className={`mobile-nav-link ${
                  activeSection === item.id ? 'is-active' : ''
                }`}
                href={item.href}
                onClick={closeMenu}
                aria-current={
                  activeSection === item.id ? 'page' : undefined
                }
              >
                <span className="mobile-nav-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            ))}

            <div className="mobile-menu-footer">
              <Button
                href={profile.resumeUrl}
                download
                size="sm"
                icon={<Download size={16} />}
              >
                Download Resume
              </Button>
              <SocialLinks />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
