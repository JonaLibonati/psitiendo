
export const ServicesCard = ({ index, currentIndex, item, onClick }) => {

  const bgColor = `${index === 0 ? "bg-owl-gray" : "bg-charcoal"}`;

  return (
    <li className={`absolute w-full ${index === currentIndex ? "z-100" : index === 0 && currentIndex === -1 ? "z-100" : "z-20"}`} onClick={onClick}>
      <div className={`z-50 p-4 md:p-10 ${bgColor} rounded-r-2xl rounded-bl-2xl ${index !== 0 ? "rounded-tl-2xl" : ""} h-[515px] md:h-[440px]`}>
        <h3 className="pb-4">{item.headline}</h3>
        <p className="pb-2">{item.subheadline}</p>
        <ul className="md:pl-4">
          {item.list.map((item, i) => <li key={i}><p>• {item}</p></li>)}
        </ul>
      </div>
    </li>
  )
}
