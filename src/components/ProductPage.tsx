import { Product } from "@/types"
import { PriceCard, ProductDescription, ProductDetails, ProductImages } from "@/components/product"
import { CategoryTitle } from "@/components"

type Props = {
  product: Product
}

export const ProductPage = ({ product }: Props) => {
  const { category, subCategory } = product

  return (
    <div>
      <CategoryTitle category={category} subCategory={subCategory} />
      <ProductImages product={product} />
      <ProductDescription product={product} />
      <div className="border-t border-dividor my-3 mx-8" />
      <PriceCard product={product} />
      <ProductDetails product={product} />
    </div>
  )
}
