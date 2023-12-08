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
  const { products, relatedProducts } = useStore(useProducts)
  return (
    <MaxWidthWrapper className="flex flex-col gap-2 py-4">
      <h2 className="text-lg font-medium text-center">Related Products</h2>
      <div className="flex flex-row gap-5 w-full ">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Pagination]}
          className="h-fit min-h-fit"
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
