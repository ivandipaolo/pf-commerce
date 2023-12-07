"use client"

import Image from "next/image"
import { useState } from "react"

import { MaxWidthWrapper } from "@/components"
import { ImageRow } from "@/components/product"

type Props = {
  productImages: string[]
  productModel: string
}

const ProductImages = ({
  productImages = ["1.png", "2.png", "3.png", "4.png"],
  productModel = "OLED42C2PSA",
}: Props) => {
  const [selectedImage, setSelectedImage] = useState<string>(productImages[0])

  console.log(`/images/products/${productModel}/${productImages[0]}`)
  return (
    <MaxWidthWrapper>
      <div className="w-full h-fit">
        <Image
          src={`/images/products/${productModel}/${selectedImage}`}
          alt={productModel}
          width={1920}
          height={1080}
        />
        <div className="px-10">
          <ImageRow
            setSelectedImage={setSelectedImage}
            srcList={productImages}
            productModel={productModel}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
export default ProductImages
