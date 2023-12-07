import { Product } from "@/types"
import { ProductDescription, ProductImages } from "@/components/product"
import { CategoryTitle } from "@/components"

type Props = {
  product: Product
}

export const ProductPage = ({ product }: Props) => {
  return (
    <div>
      <CategoryTitle />
      <ProductImages />
      <ProductDescription />
    </div>
  )
}
