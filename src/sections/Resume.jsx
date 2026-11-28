import { Download, Eye } from 'lucide-react'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { education, experience, profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { coreSkills } from '../data/skills.js'

export default function Resume() {
  return (
    <section id="resume" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Resume"
          title="Everything important, in one place"
          description="Preview a snapshot of my resume, then download or open the complete PDF."
        />

        <div className="resume-grid">
          <div className="resume-preview" data-reveal>
            <div className="resume-paper">
              <div className="resume-paper-head">
                <div>
                  <p className="resume-preview-label">Resume preview</p>
                  <h3>{profile.name}</h3>
                  <p>
                    {profile.title} &middot; {profile.location}
                  </p>
                </div>
                <span className="resume-chip">PDF</span>
              </div>

              <div className="resume-preview-section">
                <h4>Professional Summary</h4>
                <p>{profile.about.intro}</p>
              </div>

              <div className="resume-preview-section">
                <h4>Core Skills</h4>
                <p>{coreSkills}</p>
              </div>

              <div className="resume-preview-section">
                <h4>Experience</h4>
                <p>{experience[0].role}</p>
                <p className="resume-preview-muted">
                  {experience[0].company} &middot; {experience[0].duration}
                </p>
              </div>

              <div className="resume-preview-section">
                <h4>Selected Projects</h4>
                <ul>
                  {projects.map((project) => (
                    <li key={project.id}>
                      <span>{project.name}</span>
                      <span>
                        {project.technologies.slice(0, 2).join(', ')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="resume-preview-section">
                <h4>Education</h4>
                <p>{education[0].degree}</p>
                <p className="resume-preview-muted">
                  {education[0].institution} &middot;{' '}
                  {education[0].duration}
                </p>
              </div>

              <div className="resume-paper-foot">
                <span>{profile.email}</span>
                <span>{profile.phone}</span>
              </div>
            </div>
          </div>

          <div
            className="resume-copy"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <h3>A concise summary for recruiters and hiring teams.</h3>
            <p>
              The PDF covers my professional summary, technical skills,
              experience, projects, and education. Download a copy or open it
              in your browser before we talk.
            </p>

            <div className="resume-actions">
              <Button
                href={profile.resumeUrl}
                download={`${profile.name}-Resume.pdf`}
                icon={<Download size={17} />}
              >
                Download Resume
              </Button>
              <Button
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<Eye size={17} />}
              >
                Open Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
