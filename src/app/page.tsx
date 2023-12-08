import {
  Footer,
  ResponsiveHeader,
  Newsletter,
  Heading,
  DesktopHeader,
  Navbar,
} from "@/components"
import ProductPage from "@/components/ProductPage"

export default function Home() {
  return (
    <main>
      <Heading />
      <ResponsiveHeader />
      <DesktopHeader />
      <Navbar />
      <ProductPage />
      <Newsletter />
      <Footer />
    </main>
  )
}
