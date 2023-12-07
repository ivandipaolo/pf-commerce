import { ReactNode } from "react"

import { cn } from "@/lib"

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        "px-7 lg:px-60",
        className
      )}
    >
      {children}
    </div>
  )
}
