export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = null,
  className = '',
  ...props
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && (
        <span className="btn-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </>
  )

  if (href) {
    const isExternal = /^https?:/i.test(href)
    return (
      <a
        className={classes}
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
