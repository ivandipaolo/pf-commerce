"use client"

import Image from "next/image"
import { useState } from "react"

import { MaxWidthWrapper } from "@/components"
import { ImageRow } from "@/components/product"
import { Product } from "@/types"

type Props = {
  product: Product
}

const ProductImages = ({ product: { model, images, subtitle } }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0])

  return (
    <MaxWidthWrapper>
      <div className="w-full h-fit">
        <Image
          src={`/images/products/${model}/${selectedImage}`}
          alt={model}
          width={1920}
          height={1080}
        />
        <p className="text-center text-text-tertiary text-2xs text-opacity-90 py-3">*{subtitle}</p>
        <div className="px-10 relative">
          <ImageRow
            setSelectedImage={setSelectedImage}
            srcList={images}
            productModel={model}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
export default ProductImages
