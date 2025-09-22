
export const ServicesTab = ({ onClick, index, currentIndex, item }) => {

  const bgColor = `${index === 0 ? "bg-owl-gray" : "bg-charcoal" }`;

  return (
    <div onClick={onClick}
      className={
        `hover:text-violet-100 cursor-pointer px-5 w-min md:w-fit rounded-t-2xl ${bgColor}
        ${currentIndex === -1 ? "py-2" : ""}  
        ${index === 0 && currentIndex === -1 ? "relative z-50 py-3 z-50" : index === currentIndex ? "py-3 z-50 relative" : "top-0 py-2 mt-2 z-20 absolute"}  
        ${index === 1 ? "left-[136px] md:left-[204px]" : ""}`
      }>
      <h4>{item.headlineTab}</h4>
    </div>
  )
}
