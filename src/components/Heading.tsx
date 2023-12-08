import Image from "next/image"
import React from "react"

export const Heading = () => {
  return (
    <div className="bg-background-secondary hidden lg:flex flex-row justify-between py-4 px-28 font-light text-base text-white">
      <p className="">Welcome to Needus & Get the best product</p>
      <div className=" flex flex-row gap-2 justify-center text-center items-center">
        <div className="flex flex-row">
          <p>ENG</p>
          <Image
            src="/images/icons/arrowdown.svg"
            width={15}
            height={15}
            alt="heart like"
            className=""
          />
        </div>
        <span className="text-xs text-center">|</span>
        <div className="flex flex-row">
          <p>USD</p>
          <Image
            src="/images/icons/arrowdown.svg"
            width={15}
            height={15}
            alt="heart like"
            className=""
          />
        </div>
      </div>
    </div>
  )
}
