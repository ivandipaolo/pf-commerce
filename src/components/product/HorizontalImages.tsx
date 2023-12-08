"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Dispatch, SetStateAction } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"

import { cn } from "@/lib"

type Props = {
  srcList: string[]
  setSelectedImage: Dispatch<SetStateAction<string>>
  productModel: string
  selectedImage: string
  className: string
}

const HorizontalImages = ({
  srcList,
  setSelectedImage,
  productModel,
  selectedImage,
  className,
}: Props) => {
  return (
    <div className={cn(className)}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        width={265}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: "hidden",
        }}
        modules={[Pagination, Navigation]}
      >
        {srcList.map((src, index) => (
          <SwiperSlide
            key={index}
            className={cn(
              "py-4 bg-white border  border-gray-200 flex justify-center items-center",
              selectedImage === src && "border-primary"
            )}
          >
            <div
              className="flex relative justify-center items-center w-full h-full"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={`/images/products/${productModel}/${src}`}
                alt="product"
                width={70}
                height={70}
                className="block min-h-[50px] max-h-[50px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next bg-primary text-sm text-white p-2.5"></div>
      <div className="swiper-button-prev bg-primary text-sm text-white p-2.5"></div>
    </div>
  )
}

export default HorizontalImages
