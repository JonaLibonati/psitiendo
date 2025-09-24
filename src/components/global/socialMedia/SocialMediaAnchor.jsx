
export const SocialMediaAnchor = ({icon, href, ariaLabel}) => {
  return (
    <a className="cursor-pointer" href={href} target="_blank" aria-label={ariaLabel}>
      {icon}
    </a>
  )
}
