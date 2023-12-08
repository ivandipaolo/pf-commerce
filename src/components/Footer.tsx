import Image from "next/image"

import { MaxWidthWrapper } from "@/components"

export const Footer = () => {
  const footerOptions = [
    "About Us",
    "Information",
    "Account",
    "Store",
    "Contact Us",
  ]

  const desktopFooterOptions = [
    {
      header: "Information",
      options: [
        "About",
        "Delivery information",
        "Privacy Policy",
        "Sales",
        "Terms & Conditions",
        "EMI Payment",
      ],
    },
    {
      header: "Store",
      options: ["Affiliate", "Discounts", "Sale", "Contact", "All Collections"],
    },
    {
      header: "Account",
      options: [
        "My Account",
        "My Orders",
        "Returns",
        "Shipping",
        "Wishlist",
        "Account Details",
      ],
    },
  ]
  return (
    <MaxWidthWrapper className="bg-background-secondary pt-10 pb-5">
      <div className="flex flex-col gap-5 uppercase lg:hidden">
        {footerOptions.map((option) => (
          <p
            className="text-white underline font-light text-[10px]"
            key={option}
          >
            {option}
          </p>
        ))}
      </div>
      <div className=" hidden lg:grid grid-cols-7 text-white">
        <div className="col-span-2 flex flex-col gap-6">
          <p className="font-medium text-2xl">About Us</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            dolores voluptate nemo laborum eaque, dolorum{" "}
          </p>
        </div>
        {desktopFooterOptions.map((option) => (
          <div key={option.header} className="col-span-1 flex flex-col gap-6">
            <p className="font-medium text-2xl">{option.header}</p>
            <div className="flex flex-col gap-2 font-normal text-lg">
              {option.options.map((option) => (
                <p className="text-white font-normal text-lg" key={option}>
                  {option}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className="col-span-2 flex flex-col gap-6">
          <p className="font-medium text-2xl">Contact Us</p>
          <p>
            If you have any query, please contact us
            <span>needus24@gmail.com </span>
          </p>
          <div className="flex flex-row gap-2 text-white">
            <Image
              src="/images/icons/location.svg"
              alt="search"
              width={20}
              height={20}
              className=" text-white w-7"
            />
            <p>California, USA</p>
          </div>
          <div className="flex flex-row gap-2 text-white">
            <Image
              src="/images/icons/mobile.svg"
              alt="search"
              width={20}
              height={20}
              className=" text-white w-7"
            />
            <p>+12012987481</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block border-b w-full mt-32"/>
      <p className="text-white font-normal text-center mt-10 text-xs lg:my-32">
        Copyright 2023 All Rights Reserved
      </p>
    </MaxWidthWrapper>
  )
}
