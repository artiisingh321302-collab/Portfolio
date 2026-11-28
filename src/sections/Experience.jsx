import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Experience across web, desktop, and automation"
          description="My current role, the products I work on, and the technologies I use to deliver reliable applications."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.id} data-reveal>
              <span className="timeline-marker" aria-hidden="true">
                <Briefcase size={18} />
              </span>

              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <span className="timeline-badge">{item.badge}</span>
                    <h3>{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>

                  <div className="timeline-meta">
                    <span>
                      <CalendarDays size={15} aria-hidden="true" />
                      {item.duration}
                    </span>
                    <span>
                      <MapPin size={15} aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="timeline-summary">{item.summary}</p>

                <ul className="check-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2
                        size={17}
                        aria-hidden="true"
                        className="check-icon"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="tag-list" aria-label="Technologies">
                  {item.technologies.map((technology) => (
                    <li className="tag" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
