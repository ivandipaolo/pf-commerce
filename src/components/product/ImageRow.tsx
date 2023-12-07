"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

import { cn } from "@/lib"

const ImageRow = ({
  srcList = [
    "/images/products/OLED42C2PSA/1.png",
    "/images/products/OLED42C2PSA/2.png",
    "/images/products/OLED42C2PSA/3.png",
    "/images/products/OLED42C2PSA/4.png",
  ],
  setSelectedImage,
  productModel,
  selectedImage,
}: {
  srcList: string[]
  setSelectedImage: Dispatch<SetStateAction<string>>
  productModel: string
  selectedImage: string
}) => {
  return (
    <>
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
                className="block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next bg-primary text-sm text-white p-3.5"></div>
      <div className="swiper-button-prev bg-primary text-sm text-white p-3.5"></div>
    </>
  )
}

export default ImageRow
