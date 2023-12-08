import Image from "next/image"
import React from "react"

import { Product } from "@/types"
import { formatPrice } from "@/lib"

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const {
    discount,
    images,
    model,
    price,
    oldPrice,
    abbreviation,
    createdAt,
    warranty,
  } = product

  const defineTag = () => {
    if (discount) {
      return (
        <div className="w-fit py-[2px] px-2 text-4xs bg-tags-primary text-center rounded-2xl text-white">
          <p className="">-{discount}%</p>
        </div>
      )
    } else if (warranty > 2) {
      return (
        <div className="w-fit py-[2px] px-2 text-4xs bg-tags-purple text-center rounded-2xl text-white">
          <p>{warranty} Years Warranty</p>
        </div>
      )
    } else if (createdAt > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)) {
      return (
        <div className="w-fit py-[2px] px-2 text-4xs bg-tags-green text-center rounded-2xl text-white">
          <p>NEW</p>
        </div>
      )
    } else {
      return (
        <div className="w-fit py-[2px] px-2 text-4xs bg-tags-orange text-center rounded-2xl text-white">
          <p>HOT</p>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col text-center justify-center items-center  min-w-[35%]">
      <div className="w-full p-2 bg-background-extra grid grid-rows-3 h-full">
        <div className="flex flex-row justify-between row-span-full">
          <div>{defineTag()}</div>
          <div className="">
            <Image
              src="/images/icons/heart.svg"
              width={10}
              height={10}
              alt="heart like"
              className="rounded-full border-text-extra border p-1.5 "
            />
          </div>
        </div>
        <div className="my-4">
          <Image
            src={`/images/products/${model}/1.png`}
            alt={model}
            width={1920}
            height={1080}
          />
        </div>
        <div className="mx-2 text-center w-4/4 justify-center items-center flex flex-row gap-2 bg-white h-4 mb-2">
          <Image
            src="/images/icons/cart.svg"
            width={10}
            height={10}
            alt="heart like"
          />
          <p className="text-4xs">Add to cart</p>
        </div>
      </div>
      <div>
        <h3>{abbreviation}</h3>
        <div>
          <h2>{formatPrice(price)}</h2>
          <h2>{formatPrice(oldPrice)}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
