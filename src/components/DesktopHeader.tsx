import Image from "next/image"

import { DropdownMenu } from "./ui"
import { MaxWidthWrapper } from "."

export const DesktopHeader = () => {
  return (
    <MaxWidthWrapper className="hidden lg:flex flex-row gap-10 py-10 items-center">
      <div className="font-inconsolata font-bold text-5xl basis-1/4 text-left">
        <h1 className="text-text-secondary">
          Needus<span className="text-primary">.</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 border border-border-secondary p-2 pl-10 basis-3/4">
        <div className="flex flex-row items-center justify-between relative text-center border-r border-border-secondary ">
          <input
            type="text"
            placeholder="Search Products"
            className="border border-border-primary text-text-search text-xl p-3 text-opacity-50"
          />
          <Image
            src="/images/icons/search.svg"
            alt="search"
            width={20}
            height={20}
            className="min-h-full w-14 p-4 border border-background-secondary rounded-sm text-white"
          />
          {/* Todo: Modify svg */}
        </div>
        <div className="  text-text-secondary text-xl flex flex-row justify-between items-center text-center p-1 px-6 w-full">
          <DropdownMenu
            options={["Option 1", "Option 2", "Option 3", "Option 4"]}
            title="All Categories"
          />
          <div className="flex flex-row gap-2">
            <p>Login</p>
            <span className="text-opacity-10 text-black">|</span>
            <p>SignUp</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Image
          src="/images/icons/likes.svg"
          alt="likes"
          width={45}
          height={45}
          className="w-8"
        />
        <div className="relative p-1">
          <div className="rounded-full bg-primary absolute right-0 top-0 flex justify-center items-center text-center content-center">
            <p className="text-white text-[12px] w-[18px] h-[18px]">6</p>
          </div>
          <Image
            src="/images/icons/cart.svg"
            alt="cart"
            width={40}
            height={40}
            className="w-8"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
