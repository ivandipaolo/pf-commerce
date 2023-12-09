import Image from "next/image"

import { DropdownMenu } from "./ui"

export const Navbar = () => {
  const headerOptions = [
    {
      title: "Home",
      options: ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5"],
    },
    {
      title: "About",
      options: ["About 1", "About 2", "About 3", "About 4", "About 5"],
    },
    {
      title: "Product",
      options: [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Product 5",
      ],
    },
    {
      title: "Pages",
      options: ["Pages 1", "Pages 2", "Pages 3", "Pages 4", "Pages 5"],
    },
    {
      title: "Contact",
      options: [
        "Contact 1",
        "Contact 2",
        "Contact 3",
        "Contact 4",
        "Contact 5",
      ],
    },
  ]
  return (
    <div className="w-full bg-background-secondary hidden flex-row lg:flex text-white ">
      <div className="bg-primary basis-1/4 px-7 flex flex-row items-center justify-center text-center gap-6 min-h-full py-7">
        <Image
          src="/images/icons/menulist.svg"
          alt="search"
          width={20}
          height={20}
          className="w-8"
        />
        <h2 className="font-medium text-2xl md:text-lg w-auto lg:whitespace-nowrap">All Categories</h2>
        <svg
          className="w-4 h-4 ms-3 text-white"
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
      </div>
      <div className="flex flex-row gap-4 text-center items-center justify-center basis-3/5 border-r-2">
        {headerOptions.map((headerOption, index) => (
          <DropdownMenu
            key={index}
            options={headerOption.options}
            title={headerOption.title}
            titleClassName="text-white text-xl"
          />
        ))}
      </div>
      <div className="flex flex-row basis-1/4  gap-12 justify-start pl-10 items-center">
        <Image
          src="/images/icons/contact.svg"
          alt="search"
          width={20}
          height={20}
          className="w-12"
        />
        <div className="text-center">
          <p className="font-light text-base">CONTACT US 24/7</p>
          <p className="font-medium text-lg">+12012987481</p>
        </div>
      </div>
    </div>
  )
}
