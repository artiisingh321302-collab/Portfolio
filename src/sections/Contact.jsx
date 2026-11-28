import { useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { profile } from '../data/profile.js'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const CONTACT_LINKS = [
  {
    key: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    external: false,
  },
  {
    key: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    Icon: Phone,
    external: false,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'Explore my repositories',
    href: profile.socials.github,
    Icon: GithubIcon,
    external: true,
  },
]

function validateForm(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.subject.length > 120) {
    errors.subject = 'Please keep the subject under 120 characters.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.'
  } else if (values.message.length > 1000) {
    errors.message = 'Please keep your message under 1000 characters.'
  }

  return errors
}

function FormField({ id, label, optional = false, error, children }) {
  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {optional && <span className="optional">Optional</span>}
      </label>
      {children}
      {error && (
        <p className="form-error" id={`${id}-error`}>
          <AlertCircle size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitted(false)

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      const firstError = Object.keys(nextErrors)[0]
      document.getElementById(firstError)?.focus()
      return
    }

    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to conversations about .NET, full-stack development, and new opportunities."
        />

        <div className="contact-grid">
          <div className="contact-info" data-reveal>
            <h3>Get in touch</h3>
            <p className="contact-intro">
              The fastest way to reach me is by email. You can also find me on
              LinkedIn and GitHub.
            </p>

            <ul className="contact-list">
              {CONTACT_LINKS.map(
                ({ key, label, value, href, Icon, external }) => (
                  <li key={key}>
                    <a
                      href={href}
                      {...(external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {})}
                    >
                      <span className="contact-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <span className="contact-list-text">
                        <span className="contact-list-label">{label}</span>
                        <span className="contact-list-value">{value}</span>
                      </span>
                    </a>
                  </li>
                ),
              )}
            </ul>

            <div className="availability-card">
              <span className="pulse-dot" aria-hidden="true" />
              <div>
                <strong>{profile.availability}</strong>
                <p>
                  Based in {profile.location}. Happy to connect with teams
                  across time zones.
                </p>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <div className="form-row">
              <FormField id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? 'name-error' : undefined
                  }
                />
              </FormField>

              <FormField id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? 'email-error' : undefined
                  }
                />
              </FormField>
            </div>

            <FormField
              id="subject"
              label="Subject"
              optional
              error={errors.subject}
            >
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
                maxLength={120}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? 'subject-error' : undefined
                }
              />
            </FormField>

            <FormField
              id="message"
              label="Message"
              error={errors.message}
            >
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a little about the role, project, or idea."
                maxLength={1000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? 'message-error' : undefined
                }
              />
            </FormField>

            <div className="form-footer">
              <p className="form-note">
                <Info size={14} aria-hidden="true" />
                <span>
                  This is a frontend-only form. Validation runs in the
                  browser; add a backend or form service (such as Formspree)
                  to receive messages.
                </span>
              </p>
              <Button type="submit" icon={<Send size={16} />}>
                Send Message
              </Button>
            </div>

            {submitted && (
              <div className="form-status" role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                <p>
                  <strong>Your message passed validation.</strong> It was not
                  delivered because this portfolio is frontend-only. Connect
                  a form service or email me directly at{' '}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
