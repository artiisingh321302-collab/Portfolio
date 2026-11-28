import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile.js'
import SocialLinks from './SocialLinks.jsx'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              className="brand"
              href="#home"
              aria-label={`${profile.name} - back to top`}
            >
              <span className="brand-mark" aria-hidden="true">
                {profile.initials}
              </span>
              <span className="brand-name">{profile.name}</span>
            </a>
            <p className="footer-text">
              {profile.title} from {profile.location}, building modern web
              applications with React and .NET.
            </p>
            <SocialLinks />
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h2 className="footer-heading">Explore</h2>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <div className="footer-meta">
            <span>Built with React &amp; Vite</span>
            <button
              type="button"
              className="back-to-top"
              onClick={scrollToTop}
            >
              <ArrowUp size={15} aria-hidden="true" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
