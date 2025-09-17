import { QuoteIcon } from "../global/icons/QuoteIcon"

export const TestimonialCard = ({text, footer, i, index}) => {




  return (
    <div className={`flex flex-wrap place-content-center bg-charcoal px-4 md:px-6 py-6 md:py-8 h-[100%] rounded-xl w-full md:w-[500px] lg:w-[600px] transition duration-1000 ${i < index ? "absolute translate-x-[-800px] opacity-0" : i > index ? "absolute translate-x-[800px] opacity-0" : "relative translate-x-0 opacity-100"}`}>
      <p className="flex justify-center pb-4"><QuoteIcon className={"size-8 md:size-10 text-white basis-full"} /></p>
      <p className="md:px-4 basis-full">{text}</p>
      <p className="pt-4 md:pt-6 basis-full">{footer}</p>
    </div>
    
  )
}
