
import { GoDash } from "react-icons/go"
import { IoAdd } from "react-icons/io5"
import { cn } from "./lib/utils"
import React from "react"

interface AccordionItem {
  title: string
  content: string | string[]
  badge?: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

const Collapse: React.FC<{
  open: boolean
  children: React.ReactNode
}> = ({ open, children }) => {
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = open
        ? `${contentRef.current.scrollHeight}px`
        : "0px"
    }
  }, [open])

  return (
    <div
      ref={contentRef}
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{ maxHeight: "0px" }}
    >
      {children}
    </div>
  )
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    )
  }

  return (
    <div className={cn(
      "w-full bg-black  mx-auto px-4 md:px-6",
      className
    )}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "mx-0 sm:mx-3 overflow-hidden  bg-black mb-3",
            index !== items.length - 1 && "border-b border-[#FAFAF9]"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between w-full px-3 sm:px-4 py-3 text-left cursor-pointer  transition-colors"
            )}
            onClick={() => toggleItem(index)}
          >
            <div className="flex-1 flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="text-primary font-medium text-sm sm:text-base flex-shrink-0">
                {index + 1}.
              </span>
              <span className="text-base sm:text-lg text-white font-medium ">
                {item.title}
              </span>
              {/* {item.badge && (
                <span className="hidden sm:inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full flex-shrink-0">
                  {item.badge}
                </span>
              )} */}
            </div>
            <div className="h-4 w-4 ml-2 flex-shrink-0"> {/* Added flex-shrink-0 */}
              {!openItems.includes(index) ? (
                <IoAdd size={20} className="text-primary" />
              ) : (
                <GoDash size={20} className="text-primary" />
              )}
            </div>
          </div>
          <Collapse open={openItems.includes(index)}>
            <div className="px-3 sm:px-4 pb-4 pt-2">
              {Array.isArray(item.content) ? (
                <ul className="space-y-2">
                  {item.content.map((line, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-start gap-2 break-words"
                    >
                      <GoDash size={12} className="text-gray-400 mt-1.5 flex-shrink-0" />
                      <span className="flex-1">{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600 break-words">
                  {item.content}
                </p>
              )}
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  )
}

// Example usage with longer content to test responsiveness
// export function AccordionExample() {
//   const accordionItems = [
//     {
//       title: "This is a very long title that will test the responsive truncation of our accordion component",
//       content: "This is a detailed paragraph that might contain a lot of information. We need to make sure it wraps properly on mobile devices and maintains readability across all screen sizes.",
//       badge: "New"
//     },
//     {
//       title: "Array Content Example",
//       content: [
//         "First point about this topic that might be quite long and wrap to multiple lines on mobile devices",
//         "Second important point to note with additional details that need to be displayed properly",
//         "Third point with extra information that should be easy to read on all screen sizes",
//         "Fourth point concluding the topic with important final details"
//       ]
//     },
//     {
//       title: "Another Example with Badge",
//       content: "More content to demonstrate responsive behavior and proper text wrapping on different screen sizes.",
//       badge: "Updated"
//     }
//   ]

//   return (
//     <Accordion 
//       className="bg-black py-4 sm:py-6 rounded-xl shadow-sm" 
//       items={accordionItems} 
//     />
//   )
// }