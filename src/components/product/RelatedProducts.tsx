import { useStore } from "zustand"

import useProducts from "@/hooks/use-products"
import { ProductCard } from "."
import { MaxWidthWrapper } from ".."

type Props = {
  category: string
  subCategory: string
}

const RelatedProducts = ({ category, subCategory }: Props) => {
  const { products, relatedProducts } = useStore(useProducts)
  return (
    <MaxWidthWrapper className="flex flex-col gap-2 py-4">
      <h2 className="text-lg font-medium text-center">Related Products</h2>
      <div className="flex flex-row gap-5 w-full ">
        {relatedProducts.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default RelatedProducts
