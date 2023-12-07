import { MaxWidthWrapper } from "@/components"

export const Footer = () => {
  const footerOptions = [
    "About Us",
    "Information",
    "Account",
    "Store",
    "Contact Us",
  ]

  return (
    <MaxWidthWrapper className="bg-background pt-10 pb-5">
      <div className="flex flex-col gap-5 uppercase">
        {footerOptions.map((option) => (
          <p className="text-white underline font-light text-[10px]" key={option}>
            {option}
          </p>
        ))}
      </div>
      <p className="text-white font-normal text-center mt-10 text-xs">Copyright 2023 All Rights Reserved</p>
    </MaxWidthWrapper>
  )
}
