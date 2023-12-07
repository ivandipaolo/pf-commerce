import Image from "next/image"

import { MaxWidthWrapper } from "@/components"

export const Header = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-3 w-full items-center mt-8">
      <div className="bg-primary h-10 w-10 max-w-[2.5rem] flex justify-center items-center basis-1/4">
        <Image
          src="/images/icons/burgermenu.svg"
          alt="menu"
          width={40}
          height={40}
          className="w-5"
        />
      </div>
      <div className="basis-1/2 text-center">
        <p className="font-semibold">
          Needus<span className="text-primary">.</span>
        </p>
      </div>
      <div className="flex flex-row justify-end gap-5">
        <div className="flex flex-row">
          <Image
            src="/images/icons/search.svg"
            alt="search"
            width={40}
            height={40}
            className="w-5"
          />
          <Image
            src="/images/icons/user.svg"
            alt="user"
            width={40}
            height={40}
            className="w-5"
          />
          <Image
            src="/images/icons/likes.svg"
            alt="likes"
            width={40}
            height={40}
            className="w-5"
          />
          {/* Todo: adjust icons sizes */}
        </div>
        <div className="relative p-1">
          <div className="rounded-full bg-primary absolute right-0 top-0 flex justify-center items-center text-center content-center">
            <p className="text-white text-[7px] w-3 h-3 pt-[1.5px]">6</p>
          </div>
          <Image
            src="/images/icons/cart.svg"
            alt="cart"
            width={40}
            height={40}
            className="w-5"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
