"use client"

import { useStore } from "zustand"
import { useEffect } from "react"

import {
  PriceCard,
  ProductDescription,
  ProductDetails,
  ProductImages,
  RelatedProducts,
} from "@/components/product"
import { CategoryTitle } from "@/components"
import useProducts from "@/hooks/use-products"

const ProductPage = () => {
  const {
    selectedProduct: product,
    setRelatedProducts,
  } = useStore(useProducts)
  const { category, subCategory } = product

  useEffect(() => {
    setRelatedProducts()
  }, [setRelatedProducts])

  return (
    <div>
      <CategoryTitle category={category} subCategory={subCategory} />
      <ProductImages product={product} />
      <ProductDescription product={product} />
      <div className="border-t border-dividor mx-8" />
      <PriceCard product={product} />
      <ProductDetails product={product} />
      <RelatedProducts category={category} subCategory={subCategory} />
    </div>
  )
}
export default ProductPage
