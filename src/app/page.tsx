import { Footer, Header, Newsletter, ProductPage } from "@/components"
import { Product } from "@/types"

export default function Home() {
  const dummyProducts: Product[] = [
    {
      model: "OLED42C2PSA",
      price: 800.0,
      images: ["1.png", "2.png", "3.png", "4.png"],
      rating: 4,
      brand: "LG",
      stock: 2,
      title: "LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR",
      subtitle: "LG C2 42 (106cm) 4K Smart OLED evo TV",
      category: "TV COLLECTION",
      subCategory: "HOME",
      characteristics: [
        "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
        "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
        "Hands-free Voice Control, Always Ready",
        "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
        "Eye Comfort Display: Low-Blue Light, Flicker-Free",
      ],
      description: `The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.
        *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
        **65C2 Stand model is at a minimum 39% lighter than the C1 series.`,
      specifications:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id consectetur nunc purus in lectus. Donec non velit a odio volutpat volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada.",
      reviews:
        "Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus elementum.",
    },
  ]

  return (
    <main>
      <Header />
      <ProductPage product={dummyProducts[0]} />
      {/* <Newsletter /> */}
      <Footer />
    </main>
  )
}
