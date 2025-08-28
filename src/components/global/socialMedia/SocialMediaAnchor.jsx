
export const SocialMediaAnchor = ({icon, href}) => {
  return (
    <a className="cursor-pointer" href={href} target="_blank">
      {icon}
    </a>
  )
}
