import Image from "next/image"
import React from "react"
import { useStore } from "zustand"

import { Product } from "@/types"
import { formatPrice } from "@/lib"
import useProducts from "@/hooks/use-products"

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

  const { setSelectedProduct, setRelatedProducts } = useStore(useProducts)

  const defineTag = () => {
    if (discount) {
      return (
        <div className="w-fit py-[2px] lg:px-6 lg:py-1 px-2 2xl:text-base lg:text-xs text-3xs bg-tags-primary text-center rounded-2xl text-white">
          <p className="">-{discount}%</p>
        </div>
      )
    } else if (warranty > 2) {
      return (
        <div className="w-fit py-[2px] lg:px-6 lg:py-1 px-2 2xl:text-base lg:text-xs text-3xs bg-tags-purple text-center rounded-2xl text-white">
          <p>{warranty} Years Warranty</p>
        </div>
      )
    } else if (createdAt > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)) {
      return (
        <div className="w-fit py-[2px] lg:px-6 lg:py-1 px-2 2xl:text-base lg:text-xs text-3xs bg-tags-green text-center rounded-2xl text-white">
          <p>NEW</p>
        </div>
      )
    } else {
      return (
        <div className="w-fit py-[2px] lg:px-6 lg:py-1 px-2 2xl:text-base lg:text-xs text-3xs bg-tags-orange text-center rounded-2xl text-white">
          <p>HOT</p>
        </div>
      )
    }
  }

  return (
    <div
      className="flex flex-col text-center justify-center items-center h-full lg:w-6/6"
      onClick={() => {
        setSelectedProduct(product)
        setRelatedProducts()
      }}
    >
      {/* <div className="w-full p-2 bg-background-extra grid grid-cols-1 grid-rows-6 h-full min-h-[11rem] max-h-[11rem] md:min-h-[16rem] md:m-h-[16rem] lg:min-h-[24rem] lg:m-h-[24rem]"> */}
      <div className="w-full p-2 bg-background-extra min-h-full h-full flex flex-col">
        <div className="flex flex-row justify-between row-span-1 items-center text-center">
          <div>{defineTag()}</div>
          <div className="">
            <Image
              src="/images/icons/heart.svg"
              width={15}
              height={15}
              alt="heart like"
              className="border border-text-extra w-5 h-5 p-1 rounded-full lg:h-8 lg:w-8 lg:p-1.5 2xl:h-10  2xl:w-10 "
            />
          </div>
        </div>
        <div className="my-4 min-h-[100px] max-h-[100px] lg:min-h-[150px] lg:max-h-[150px] 2xl:min-h-[200px] 2xl:max-h-[200px] flex items-center justify-center">
          <Image
            src={`/images/products/${model}/1.png`}
            alt={model}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="mx-2 lg:mx-6 text-center w-4/4 justify-center items-center mt-3 lg:mt-6 flex flex-row gap-2 bg-white h-4 lg:h-8 mb-2 row-span-1 lg:py-6 lg:px-2">
          <Image
            src="/images/icons/cart.svg"
            width={22}
            height={22}
            className="like h-3 w-3 lg:w-6 lg:h-6"
            alt='cart'
          />
          <p className="text-3xs md:text-xs lg:text-base 2xl:text-lg">Add to cart</p>
        </div>
      </div>
      <div className="flex flex-col text-text-secondary text-center justify-center items-center py-2">
        <h3 className="text-xs font-normal whitespace-nowrap lg:text-xl">
          {abbreviation}
        </h3>
        <div className="font-medium flex flex-row gap-2 text-center items-center">
          <h1 className="text-xs lg:text-xl font-bold">{formatPrice(price)}</h1>
          <h2 className="text-2xs lg:text-xl text-text-extra line-through font-bold">
            {formatPrice(oldPrice)}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
