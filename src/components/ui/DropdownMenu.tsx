"use client"

import { useRef, useState } from "react"

import { useOnClickOutside } from "@/hooks"
import { cn } from "@/lib"

type Props = {
  className?: string
  title: string
  options: string[]
  titleClassName?: string
  optionsClassName?: string
}

const DropdownMenu = ({
  className,
  title,
  options,
  titleClassName,
  optionsClassName,
}: Props) => {
  const [isOpen, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null) // Create a ref

  const closeDropdown = () => setOpen(false)

  useOnClickOutside(dropdownRef, () => closeDropdown())

  const toggleDropdown = () => setOpen(!isOpen)

  return (
    <div
      className={cn(className, '')}
      style={{ position: "relative" }}
      ref={dropdownRef}
    >
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={cn(
          "md:text-xl text-text-secondary bg-transparent font-light rounded-lg text-2xl px-2 py-2.5 text-center inline-flex items-center",
          titleClassName
        )}
        type="button"
        onClick={toggleDropdown}
      >
        {title}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          style={{ position: "absolute", top: "100%", left: 0 }}
        >
          <ul
            className="py-3 text-sm text-gray-700 flex flex-col gap-2 text-start"
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((option, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={
                    (cn("block px-4 py-2 hover:bg-gray-100 "), optionsClassName)
                  }
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
