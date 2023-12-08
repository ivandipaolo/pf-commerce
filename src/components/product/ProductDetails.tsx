import React, { useState } from "react"

import { MaxWidthWrapper } from ".."
import { Product } from "@/types"
import { cn } from "@/lib"

type Props = {
  product: Product
}

const ProductDetails = ({ product }: Props) => {
  const [selectedView, setSelectedView] = useState<string>("description")
  const getUnderlineClass = (viewName: string) => {
    return selectedView === viewName
      ? "underline-expand underline-on"
      : "underline-expand underline-off"
  }

  return (
    <div className="py-3">
      <MaxWidthWrapper className="">
        <div className="flex flex-row font-medium text-xs justify-evenly">
          <button
            className={cn(getUnderlineClass("description"), "relative")}
            onClick={() => setSelectedView("description")}
          >
            Description
          </button>
          <button
            className={cn(getUnderlineClass("specifications"), "relative")}
            onClick={() => setSelectedView("specifications")}
          >
            Specification
          </button>
          <button
            className={cn(getUnderlineClass("reviews"), "relative")}
            onClick={() => setSelectedView("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className="font-light text-2xs min-h-[7rem] max-h-[7rem]">
          {selectedView === "description" && (
            <div className="py-3">
              <div className="text-2xs">
                {product.description.length > 500 ? (
                  <>
                    {product.description.substring(0, 500)}
                    <span className="text-primary">{" "}More...</span>
                  </>
                ) : (
                  product.description
                )}
              </div>
            </div>
          )}
          {selectedView === "specifications" && (
            <div className="py-3">
              <div className="text-2xs">
                {product.specifications.length > 500 ? (
                  <>
                    {product.specifications.substring(0, 500)}
                    <span className="text-primary">{" "}More...</span>
                  </>
                ) : (
                  product.specifications
                )}
              </div>
            </div>
          )}
          {selectedView === "reviews" && (
            <div className="py-3">
              <div className="text-2xs">
                {product.reviews.length > 500 ? (
                  <>
                    {product.reviews.substring(0, 500)}
                    <span className="text-primary">{" "}More...</span>
                  </>
                ) : (
                  product.reviews
                )}
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ProductDetails
