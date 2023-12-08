"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

import { MaxWidthWrapper } from "."
import { cn } from "@/lib"

const Newsletter = () => {
  const [email, setEmail] = useState<string>("")
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

  useEffect(() => {
    if (isSubscribed) {
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }, [isSubscribed])

  return (
    <div className="relative">
      <MaxWidthWrapper className="h-44 lg:h-32 mr-4 lg:mr-0">
        <div className="z-30 relative flex justify-center flex-col content-center h-full lg:grid grid-cols-2">
          <div>
            <h2 className="font-semibold text-white text-lg lg:text-3xl lg:font-medium">
              Join our newsletter and get offers
            </h2>
            <h3 className="font-normal text-sm text-white lg:text-2xl">
              Sign up our newsletter
            </h3>
          </div>
          <div className="flex flex-row w-full my-2">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="basis-2/3 px-4 text-text-tertiary text-2xs font-normal !outline-none lg:min-h-[4rem] lg:text-lg"
            />
            <button
              onClick={() => {
                setIsSubscribed(true)
                setEmail("")
              }}
              disabled={email === ""}
              className={cn(
                " text-white border font-medium text-xs px-6 py-3 h-full basis-1/3 max-w-[8rem] min-w-[8rem] lg:max-w-[12rem] lg:min-w-[12rem]  lg:text-lg",
                isSubscribed ? "bg-background-subscribed" : "bg-primary",
                email === "" &&
                  !isSubscribed &&
                  "grayscale grayscale-20 cursor-not-allowed"
              )}
            >
              {isSubscribed ? "SUBSCRIBED!" : "SUBSCRIBE"}
            </button>
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

export default Newsletter
