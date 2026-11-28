import {
  BadgeCheck,
  CalendarDays,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { education } from '../data/profile.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="B.Tech, diploma, and school education, with passing years exactly as listed on my resume."
        />

        <div className="education-grid">
          {education.map((item, index) => (
            <article
              className="education-card"
              key={item.id}
              data-reveal
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              <span className="education-icon" aria-hidden="true">
                <GraduationCap size={28} />
              </span>

              <div className="education-body">
                <span className="timeline-badge">{item.badge}</span>
                <h3>{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-description">
                  {item.description}
                </p>

                <ul className="education-meta">
                  <li>
                    <CalendarDays size={15} aria-hidden="true" />
                    {item.duration}
                  </li>
                  {item.score && (
                    <li>
                      <BadgeCheck size={15} aria-hidden="true" />
                      {item.score}
                    </li>
                  )}
                  <li>
                    <MapPin size={15} aria-hidden="true" />
                    {item.location}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
