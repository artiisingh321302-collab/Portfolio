import { Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { currentlyLearning, skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The tools I build with"
          description="Frontend, backend, database, and developer tools I use to turn ideas into working applications."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className="skill-group"
              key={group.id}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <header className="skill-group-head">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </header>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="learning-banner" data-reveal>
          <span className="learning-icon" aria-hidden="true">
            <Sparkles size={20} />
          </span>
          <div className="learning-copy">
            <h3>Currently learning</h3>
            <p>Always adding to the toolkit, one project at a time.</p>
          </div>
          <ul className="chip-list" aria-label="Currently learning">
            {currentlyLearning.map((topic) => (
              <li className="chip" key={topic}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
