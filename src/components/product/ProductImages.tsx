"use client"

import Image from "next/image"
import { useState } from "react"

import { MaxWidthWrapper } from "@/components"
import { HorizontalImages, VerticalImages } from "@/components/product"
import { Product } from "@/types"
import { cn } from "@/lib"

type Props = {
  product: Product
  className?: string
}

const ProductImages = ({
  product: { model, images, subtitle },
  className,
}: Props) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0])

  return (
    <MaxWidthWrapper className={cn(className)}>
      <div className="w-full">
        <div className="block lg:flex flex-row  lg:items-center">
          <VerticalImages
            className="lg:block hidden px-10 relative basis-1/3"
            setSelectedImage={setSelectedImage}
            srcList={images}
            productModel={model}
            selectedImage={selectedImage}
          />
          <div className="block lg:flex flex-col lg:basis-4/5">
            <Image
              src={`/images/products/${model}/${selectedImage}`}
              alt={model}
              width={1920}
              height={1080}
              className="max-h-[250px] min-h-[250px] object-contain w-full h-full lg:max-h-[550px] lg:min-h-[550px]"
            />
            <p className="text-center text-text-tertiary text-2xs lg:text-base text-opacity-90 py-3 lg:text-start">
              *{subtitle}
            </p>
          </div>
        </div>
        <HorizontalImages
          className="block lg:hidden px-10 relative"
          setSelectedImage={setSelectedImage}
          srcList={images}
          productModel={model}
          selectedImage={selectedImage}
        />
      </div>
    </MaxWidthWrapper>
  )
}
export default ProductImages
