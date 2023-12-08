"use client"

import { useState } from "react"

import { cn } from "@/lib"

type Props = {
  className?: string
  numberClassName?: string
  iconsClassName?: string
}

const Counter = ({ className, iconsClassName, numberClassName }: Props) => {
  const [count, setCount] = useState(1)

  return (
    <div
      className={cn(
        "flex items-center justify-center space-x-1.5 border-text-extra border text-2xl font-extralight h-full w-fit",
        className
      )}
    >
      <button
        className={cn(
          "text-black px-1 border-r border-text-extra",
          iconsClassName
        )}
        onClick={count > 1 ? () => setCount(count - 1) : () => setCount(1)}
      >
        -
      </button>
      <span className={cn("text-black font-medium text-2xs", numberClassName)}>
        {count}
      </span>
      <button
        className={cn(
          "text-black px-1 border-text-extra border-l text-2xl font-extralight",
          iconsClassName
        )}
        onClick={count < 20 ? () => setCount(count + 1) : () => setCount(20)}
      >
        +
      </button>
    </div>
  )
}

export default Counter
