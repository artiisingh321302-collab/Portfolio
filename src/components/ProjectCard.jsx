import { ExternalLink, Lock, Mail } from 'lucide-react'
import { GithubIcon } from './BrandIcons.jsx'

export default function ProjectCard({ project, index = 0 }) {
  const isCompleted = project.status === 'Completed'
  const isConfidential = Boolean(project.confidential)

  return (
    <article
      className="project-card"
      data-reveal
      style={{ '--reveal-delay': `${index * 90}ms` }}
    >
      <div className="project-media">
        <img
          src={project.image}
          alt={project.imageAlt}
          width="800"
          height="500"
          loading="lazy"
        />
        <span
          className={`status-badge ${
            isCompleted ? 'is-complete' : 'is-progress'
          }`}
        >
          <span className="status-dot" aria-hidden="true" />
          {project.status}
        </span>
        {isConfidential && (
          <span className="confidential-badge">
            <Lock size={11} aria-hidden="true" />
            Confidential
          </span>
        )}
      </div>

      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        {isConfidential && (
          <p className="project-note">
            <Lock size={15} aria-hidden="true" />
            <span>
              Enterprise product. Source code and a public demo are not
              available.
            </span>
          </p>
        )}

        <ul
          className="tag-list"
          aria-label={`${project.name} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology} className="tag">
              {technology}
            </li>
          ))}
        </ul>

        <div className="project-links">
          {isConfidential ? (
            <a className="project-link" href="#contact">
              <Mail size={16} aria-hidden="true" />
              Request a walkthrough
            </a>
          ) : (
            <>
              {project.github ? (
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              ) : (
                <span
                  className="project-link is-disabled"
                  title="Repository is private"
                  aria-disabled="true"
                >
                  <GithubIcon size={16} />
                  Private repository
                </span>
              )}

              {project.live ? (
                <a
                  className="project-link"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              ) : (
                <a className="project-link" href="#contact">
                  <Mail size={16} aria-hidden="true" />
                  Details on request
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  )
}
