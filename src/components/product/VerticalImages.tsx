"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Dispatch, SetStateAction } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import Image from "next/image"

import { cn } from "@/lib"

type Props = {
  srcList: string[]
  setSelectedImage: Dispatch<SetStateAction<string>>
  productModel: string
  selectedImage: string
  className: string
}

const VerticalImages = ({
  srcList,
  setSelectedImage,
  productModel,
  selectedImage,
  className,
}: Props) => {
  return (
    <div className={cn(className)}>
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={10}
        width={265}
        pagination={{
          clickable: true,
          bulletClass: "hidden",
        }}
        modules={[Pagination]}
      >
        {srcList.map((src, index) => (
          <SwiperSlide
            key={index}
            className={cn(
              "py-4 bg-white border  border-gray-200 flex justify-center items-center max-h-[120px]",
              selectedImage === src && "border-primary"
            )}
          >
            <div
              className="flex relative justify-center items-center  h-full"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={`/images/products/${productModel}/${src}`}
                alt="product"
                width={120}
                height={120}
                className="block min-h-[80px] max-h-[80px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default VerticalImages
