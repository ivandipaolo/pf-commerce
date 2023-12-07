import { cn } from "@/lib"
import { ReactNode } from "react"

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
        "px-6 lg:px-60",
        className
      )}
    >
      {children}
    </div>
  )
}
