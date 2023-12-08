import {
  Footer,
  ResponsiveHeader,
  Newsletter,
  Heading,
  DesktopHeader,
} from "@/components"
import ProductPage from "@/components/ProductPage"

export default function Home() {
  return (
    <main>
      <Heading />
      <ResponsiveHeader />
      <DesktopHeader />
      <ProductPage />
      <Newsletter />
      <Footer />
    </main>
  )
}
