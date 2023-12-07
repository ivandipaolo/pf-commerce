import { Product } from "@/types"
import { Counter, MaxWidthWrapper } from "@/components"
import { formatPrice } from "@/lib"

type Props = {
  product: Product
}

export const PriceCard = ({ product }: Props) => {
  return (
    <div className="shadow-md">
      {/* Todo: Add shadow to the top too */}
      <MaxWidthWrapper className="py-2 flex flex-col gap-1">
        <p className="font-light text-2xs">USD(incl. of all taxes):</p>
        <div className="font-medium flex flex-row gap-2 text-center items-center">
          <h1 className="text-lg">{formatPrice(product.price)}</h1>
          <h2 className="text-base text-text-extra line-through	">
            {formatPrice(product.price)}
          </h2>
        </div>
        <div className="flex flex-row items-start justify-start h-8">
          <Counter />
          <div className="flex flex-row items-center text-center justify-center gap-3 w-full h-full">
            <button className="bg-primary text-white border border-primary  font-medium text-sm px-6 py-1 h-full">
              Buy Now
            </button>
            <button className="bg-white text-primary border border-primary font-medium text-sm px-6 py-1 h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
