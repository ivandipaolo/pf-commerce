'use client'

import { useState } from "react"

type Props = {
  className?: string
  title: string
  options: string[]
  placeholder?: string
}

const DropdownMenu = ({ className, title, options, placeholder }: Props) => {
  const [isOpen, setOpen] = useState(false)

  const toggleDropdown = () => setOpen(!isOpen)

  return (
    <div className={className} style={{ position: 'relative' }}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-text-secondary bg-transparent font-light rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center"
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
          style={{ position: 'absolute', top: '100%', left: 0 }}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((option, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 "
                  onClick={() => console.log(`${option} clicked`)} // Replace with your onClick handler
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
