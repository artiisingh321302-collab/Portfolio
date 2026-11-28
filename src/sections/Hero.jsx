import { ArrowRight, Atom, Database, Download, MapPin, Server } from 'lucide-react'
import Button from '../components/Button.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="availability">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.availability}
          </span>

          <p className="hero-kicker">
            Hello, I&apos;m <span>{profile.name}</span>
          </p>

          <h1 className="hero-title" id="hero-title">
            Building Modern Web Applications{' '}
            <span className="hero-title-accent">with React &amp; .NET</span>
          </h1>

          <p className="hero-role">
            <span>{profile.title}</span>
            <span className="hero-role-divider" aria-hidden="true">
              /
            </span>
            <span>{profile.experienceLabel}</span>
          </p>

          <p className="hero-intro">{profile.heroIntro}</p>

          <div className="hero-actions">
            <Button
              href={profile.resumeUrl}
              download={`${profile.name}-Resume.pdf`}
              icon={<Download size={17} />}
            >
              Download Resume
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              icon={<ArrowRight size={17} />}
            >
              View Projects
            </Button>
          </div>

          <div className="hero-meta">
            <span className="hero-location">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
            <span className="hero-meta-divider" aria-hidden="true" />
            <SocialLinks />
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              src="/images/profile-placeholder.svg"
              alt={`${profile.name} - profile photo placeholder`}
              width="800"
              height="1000"
            />
          </div>

          <ul className="floating-tech" aria-label="Core technologies">
            <li className="float-chip chip-react">
              <Atom size={15} aria-hidden="true" />
              React
            </li>
            <li className="float-chip chip-dotnet">
              <Server size={15} aria-hidden="true" />
              ASP.NET Core
            </li>
            <li className="float-chip chip-postgres">
              <Database size={15} aria-hidden="true" />
              PostgreSQL
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
