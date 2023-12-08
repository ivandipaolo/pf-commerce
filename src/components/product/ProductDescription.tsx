import { Product } from "@/types"
import { MaxWidthWrapper } from "@/components"
import { cn } from "@/lib"

type Props = {
  product: Product
  className?: string
}
const Star = (
  <path d="M100,10L40 198 190 78 10 78 160 198z" className="text-primary" />
)

const ProductDescription = ({ product, className }: Props) => {
  const { brand, model, characteristics, description, rating, stock, title } =
    product

  const stockMessage = () => {
    if (stock > 0) {
      if (stock < 5) {
        return `Only ${stock} in stock`
      } else {
        return `In stock (${stock})`
      }
    } else {
      return "Out of stock"
    }
  }
  return (
    <MaxWidthWrapper className={cn("flex flex-col gap-1 py-5 lg:gap-8 ", className)}>
      <div className="text-text-secondary font-normal text-2xs lg:text-lg">
        <p>
          Brand: <span className="font-light">{brand}</span>
        </p>
        <p>
          Model: <span className="font-light">{model}</span>
        </p>
        <p>
          Availability: <span className="font-light">{stockMessage()}</span>
        </p>
      </div>
      <h1 className="text-text-secondary font-medium text-sm lg:text-3xl">{title}</h1>
      <div className="flex flex-row gap-1">
        {[...Array(Math.round(rating))].map((_, index) => {
          return (
            <svg
              key={index}
              className="inline-block h-2 lg:h-5 w-2 lg:w-5"
              viewBox="0 0 200 200"
              fill={"currentColor"}
              xmlns="http://www.w3.org/2000/svg"
            >
              {Star}
            </svg>
          )
        })}
      </div>
      <ul className="flex flex-col">
        {characteristics.map((characteristic, index) => {
          return (
            <li key={index}>
              <p className="font-light text-2xs lg:text-base leading-none">
                <span className="font-extrabold text-2xl mr-1 leading-none">
                  ·
                </span>
                {characteristic}
              </p>
            </li>
          )
        })}
      </ul>
    </MaxWidthWrapper>
  )
}
export default ProductDescription
