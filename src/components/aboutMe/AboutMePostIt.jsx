
export const AboutMePostIt = ({ img, onClick, justify }) => {
  return (
    <button className={`flex justify-center relative basis-1/2 cursor-pointer h-[200px] ${justify}`} onClick={onClick}>
      <img src={img} className="absolute top-0 w-[200px] md:w-[230px] max-w-none" />
    </button>
  )
}
