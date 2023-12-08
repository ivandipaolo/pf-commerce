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
      <MaxWidthWrapper className="py-3 flex flex-col gap-1 ">
        <p className="font-light text-2xs lg:text-base lg:font-normal">
          USD(incl. of all taxes):
        </p>
        <div className="font-medium flex flex-row gap-2 lg:justify-between">
          <div className="flex flex-row text-center items-center gap-2">
            <h1 className="text-lg lg:text-4xl">
              {formatPrice(product.price)}
            </h1>
            <h2 className="text-base lg:text-2xl text-text-extra line-through	">
              {formatPrice(product.price)}
            </h2>
          </div>
          <Counter
            className="hidden lg:flex h-[4rem] items-center px-2 border-border-secondary "
            iconsClassName="text-6xl px-2 flex items-center justify-center w-full h-full"
            numberClassName="text-3xl px-5 flex items-center justify-center w-full h-full"
          />
        </div>
        <div className="grid grid-cols-4 items-start justify-start h-fit">
          <Counter className="flex lg:hidden col-span-1" />
          <div className="flex flex-row lg:w-full items-center text-center justify-center gap-3 w-full h-full col-span-3 lg:justify-between lg:">
            <button className="bg-primary text-white border border-primary  font-medium text-sm px-6 py-1 h-full lg:text-lg lg:px-14 lg:py-4">
              Buy Now
            </button>
            <button className="bg-white text-primary border border-primary font-medium text-sm px-6 py-1 h-full lg:text-lg lg:px-14 lg:py-4">
              Add to Cart
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
