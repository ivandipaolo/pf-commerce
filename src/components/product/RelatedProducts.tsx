import { useStore } from "zustand"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import useProducts from "@/hooks/use-products"
import { ProductCard } from "."
import { MaxWidthWrapper } from ".."
type Props = {
  category: string
  subCategory: string
}

import "swiper/css"
import "swiper/css/pagination"

const RelatedProducts = ({ category, subCategory }: Props) => {
  const { relatedProducts } = useStore(useProducts)
  return (
    <MaxWidthWrapper className="flex flex-col gap-2 py-4">
      <h2 className="text-lg font-medium text-center lg:text-4xl lg:py-5">
        Related Products
      </h2>
      <div className="flex flex-row gap-5 w-full ">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Pagination]}
          className="h-fit min-h-fit lg:min-h-[30rem] lg:w-3/4"
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {relatedProducts.map((product) => (
            <SwiperSlide key={product.model} className="mb-5">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MaxWidthWrapper>
  )
}

export default RelatedProducts
