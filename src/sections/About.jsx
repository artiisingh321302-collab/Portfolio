import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="A developer focused on the full stack"
          description="A quick look at my background, the products I work on, and the kind of engineer I strive to be."
        />

        <div className="about-grid">
          <div className="about-text" data-reveal>
            <p>{profile.about.intro}</p>
            {profile.about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <h3 className="about-subtitle">What I&apos;m working toward</h3>
            <ul className="goal-list">
              {profile.about.goals.map((goal) => (
                <li key={goal}>
                  <CheckCircle2
                    size={18}
                    className="goal-icon"
                    aria-hidden="true"
                  />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              variant="secondary"
              icon={<ArrowRight size={16} />}
            >
              Let&apos;s connect
            </Button>
          </div>

          <aside
            className="about-card"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <div className="about-card-head">
              <span className="about-avatar" aria-hidden="true">
                {profile.initials}
              </span>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
              </div>
            </div>

            <dl className="facts-list">
              {profile.quickFacts.map((fact) => (
                <div className="fact-row" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about-card-footer">
              <p>Find me online</p>
              <SocialLinks />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
