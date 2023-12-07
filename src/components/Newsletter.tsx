import Image from "next/image"
import React from "react"

import { MaxWidthWrapper } from "."

export const Newsletter = () => {
  return (
    <div className="relative">
      <MaxWidthWrapper className=" h-36">
        <div className="z-30 relative flex justify-center flex-col content-center h-full">
          <h2 className="font-semibold text-white text-lg">
            Join our newsletter and get offers
          </h2>
          <h3 className="font-normal text-sm text-white">
            Sign up our newsletter
          </h3>
          <div className="flex flex-row w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="basis-2/3"
            />
            <button className="basis-1/3">Subscribe</button>
          </div>
        </div>
      </MaxWidthWrapper>
      <Image
        src="/images/newsletter.webp"
        alt="newsletter"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute top-0 z-10 filter brightness-[60%]"
      />
    </div>
  )
}
