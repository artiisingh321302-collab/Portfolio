import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile } from '../data/profile.js'

const linkDefinitions = {
  github: {
    label: 'GitHub',
    href: profile.socials.github,
    Icon: GithubIcon,
    external: true,
  },
  linkedin: {
    label: 'LinkedIn',
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  email: {
    label: 'Email',
    href: `mailto:${profile.email}`,
    Icon: Mail,
    external: false,
  },
}

export default function SocialLinks({
  links = ['github', 'linkedin', 'email'],
  className = '',
  size = 18,
}) {
  return (
    <div className={`social-links ${className}`.trim()}>
      {links.map((key) => {
        const { label, href, Icon, external } = linkDefinitions[key] || {}
        if (!Icon || !href) return null

        return (
          <a
            key={key}
            className="social-link"
            href={href}
            aria-label={label}
            title={label}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
