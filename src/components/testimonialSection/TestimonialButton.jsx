
export const TestimonialButton = ({ icon, ariaLabel, order = "", className = "", onClick, children }) => {
  return (
    <button
      className={`border p-2 rounded-full size-fit cursor-pointer ${className} ${order}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
      {icon}
    </button>
  )
}
