"use client";
import React, { createContext, useContext, useState, forwardRef, ReactNode, useEffect, use } from "react"
import { cn } from "@repo/ui/utils"
import { GoDash } from "react-icons/go"
import { IoAdd } from "react-icons/io5"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { MdDelete } from "react-icons/md"


type AccordionContextType = {
  value: string[]
  toggle: (value: string) => void
  deleteItem: (value: string) => void
  variance?: string
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)


interface AccordionProps {
  variance?: string,
  children: ReactNode
  type?: "single" | "multiple"
  className?: string
  defaultValue?: string[]
}

const Accordion = ({
  variance = "first",
  children,
  type = "single",
  className,
  defaultValue = []
}: AccordionProps) => {
  const [value, setValue] = useState<string[]>(defaultValue)

  const toggle = (itemValue: string) => {
    if (type === "single") {
      setValue(value.includes(itemValue) ? [] : [itemValue])
    } else {
      setValue(
        value.includes(itemValue)
          ? value.filter(v => v !== itemValue)
          : [...value, itemValue]
      )
    }
  }

  const deleteItem = (itemValue: string) => {
    setValue(prev => prev.filter(v => v !== itemValue))
  }

  return (
    <AccordionContext.Provider value={{ value, toggle, deleteItem, variance }}>
      <div className={cn("w-full space-y-1", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}


interface AccordionItemProps {
  children: ReactNode
  value: string
  className?: string
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, value, className }, ref) => {

    return (
      <div
        ref={ref}
        className={cn(
          "border-b border-gray-800",
          className
        )}
        data-value={value}
      >
        {children}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"


interface AccordionTriggerProps {
  children: ReactNode
  value: string
  className?: string
}

const AccordionTrigger = forwardRef<HTMLDivElement, AccordionTriggerProps>(
  ({ children, value, className }, ref) => {
    const context = useContext(AccordionContext)
    if (!context) throw new Error("AccordionTrigger must be used within Accordion")
    console.log(context.variance);


    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between w-full py-4 text-left cursor-pointer",
          "text-white hover:bg-gray-900 transition-colors",
          className
        )}
        onClick={() => context.variance == "first" && context.toggle(value)}
      >
        <div className="flex-1">
          {children}
        </div>
        <div className="flex items-center gap-4">
          {context.variance == "second" ? <><button
            className="text-primary  py-1 rounded hover:text-button-hover"
            onClick={() => context.deleteItem(value)}
          >
            <MdDelete />
          </button>
            <FaChevronUp
              size={18}
              className="cursor-pointer text-primary"
              onClick={() => context.toggle(value)}
            />
            <FaChevronDown
              size={18}
              className="cursor-pointer text-primary"
              onClick={() => context.toggle(value)}
            /></> : <> {!context.value.includes(value) ? (
              <IoAdd size={20} className="text-primary" />
            ) : (
              <GoDash size={20} className="text-primary" />
            )}</>}


        </div>
      </div>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"


interface AccordionContentProps {
  children: ReactNode
  value: string
  className?: string
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, value, className }, ref) => {
    const context = useContext(AccordionContext)
    if (!context) throw new Error("AccordionContent must be used within Accordion")

    const isOpen = context.value.includes(value)
    const [height, setHeight] = useState<number>(0)
    const contentRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (contentRef.current) {
        setHeight(isOpen ? contentRef.current.scrollHeight : 0)
      }
    }, [isOpen])

    return (
      <div
        ref={ref}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef} className={cn("px-4 pb-4", className)}>
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"


export function AccordionExample1() {
  return (

    <Accordion
      className="w-3/4 bg-black rounded-xl  py-8 md:px-8 md:py-12 "
      type="multiple"
      defaultValue={["item-1"]}
      variance="first"
    > 
      <div className="text-[#FAFAF9] text-[42px] mb-4">How it works</div>

      <AccordionItem value="item-1">
        <AccordionTrigger value="item-1">
          <div className="flex items-center gap-2">
            <span className="text-primary">1.</span>
            <span className="text-lg font-medium">Custom Content Example</span>
          </div>
        </AccordionTrigger>
        <AccordionContent value="item-1">
          <div className="space-y-4 text-gray-400">
            <p>This can be any content you want to include:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Custom components</li>
              <li>Rich text</li>
              <li>Images</li>
              <li>Forms</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger value="item-2">
          <div className="flex items-center gap-2">
            <span className="text-primary">2.</span>
            <span className="text-lg font-medium">Geführt zum Ziel</span>
          </div>
        </AccordionTrigger>
        <AccordionContent value="item-2">
          <div className="space-y-4 text-gray-400">
            <p>This can be any content you want to include:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Custom components</li>
              <li>Rich text</li>
              <li>Images</li>
              <li>Forms</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger value="item-3">
          <div className="flex items-center gap-2">
            <span className="text-primary">3.</span>
            <span className="text-lg font-medium">Selbständig und Effizient</span>
          </div>
        </AccordionTrigger>

        <AccordionContent value="item-3">
          <div className="space-y-4 text-gray-400">
            <p>Du lernst wie du Ideen findest, umsetzt und gestaltest. Wir zeigen dir die Tools für deinen Bedarf und führen 
              dich durch den Workflow zum Resultat. 
              Am Ende hast du eine tolle Kampagne, eine Website, Visuals oder einen Film für Social Media. </p>
            
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger value="item-4">
          <div className="flex items-center gap-2">
            <span className="text-primary">4.</span>
            <span className="text-lg font-medium">KI & Partner</span>
          </div>
        </AccordionTrigger>

        <AccordionContent value="item-4">
          <div className="space-y-4 text-gray-400">
            <p>This can be any content you want to include:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Custom components</li>
              <li>Rich text</li>
              <li>Images</li>
              <li>Forms</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger value="item-5">
          <div className="flex items-center gap-2">
            <span className="text-primary">4.</span>
            <span className="text-lg font-medium">Mehr Budget für andere Dinge</span>
          </div>
        </AccordionTrigger>

        <AccordionContent value="item-5">
          <div className="space-y-4 text-gray-400">
            <p>This can be any content you want to include:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Custom components</li>
              <li>Rich text</li>
              <li>Images</li>
              <li>Forms</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
}