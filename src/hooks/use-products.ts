import { create } from "zustand"

import { Product } from "@/types"
import { dummyProducts } from "@/lib"

interface StoreState {
  products: Product[]
  selectedProduct: Product
  setSelectedProduct: (product: Product) => void
  relatedProducts: Product[]
  setRelatedProducts: () => void
}

const useProducts = create<StoreState>((set, get) => ({
  products: dummyProducts,
  selectedProduct: dummyProducts[0],
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  relatedProducts: [],
  setRelatedProducts: () => {
    const firstProduct = get().selectedProduct
    const related = get().products.filter(
      (p) =>
        (p.category === firstProduct.category ||
          p.subCategory === firstProduct.subCategory ||
          p.brand === firstProduct.brand) &&
        p.id !== firstProduct.id
    )
    set({ relatedProducts: related })
  },
}))

export default useProducts
