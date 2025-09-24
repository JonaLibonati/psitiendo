
export const AboutMePostIt = ({ img, onClick, justify, ariaLabel, alt }) => {
  return (
    <button className={`flex justify-center relative basis-1/2 cursor-pointer h-[200px] ${justify}`} onClick={onClick} aria-label={ariaLabel}>
      <img src={img} className="absolute top-0 w-[200px] md:w-[230px] max-w-none" alt={alt} />
    </button>
  )
}
