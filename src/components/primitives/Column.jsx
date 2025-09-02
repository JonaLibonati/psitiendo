
export const Column = ({className, children}) => {
  return (
    <div className={`relative z-50 w-[300px] md:w-[700px] lg:w-[960px] mx-auto ${className}`}>
      {children}
    </div>
  )
}
