<h1 align="center">📱️ Needus. - Product Page 💻️</h1>

<p align="center">
  A product page created for demostrating skills on ecommerce frontend development
</p>

<h3 align="center">
  <a href="https://pf-commerce.vercel.app/">Live Version Here</a>
</h3>

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

### Installation and usage

#### For development:


1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ivandipaolo/pf-commerce.git
   ```
   
2. Install dependencies

   ```bash
   npm install
   ```

3. Run dev server
(Default port 3000)
   ```bash
   npm run dev
   ```

4. Open and start developing

   ```bash
   localhost:3000
   ```

#### For deployment:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ivandipaolo/pf-commerce.git
   ```
   
2. Install dependencies

   ```bash
   npm install
   ```

3. Create build

   ```bash
   npm run build
   ```

4. Run preview server
(Default port 3000)
   ```bash
   npm start
   ```

5. Open preview

   ```bash
   localhost:3000
   ```


## Folders structure:
<details>
  <summary>Complete</summary>
  
```
└── 📁pf-ecommerce
    └── .eslintrc.json
    └── next-env.d.ts
    └── next.config.js
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── 📁images
            └── 📁icons
                └── arrowdown.svg
                └── burgermenu.svg
                └── cart.svg
                └── contact.svg
                └── heart.svg
                └── likes.svg
                └── location.svg
                └── menulist.svg
                └── mobile.svg
                └── search.svg
                └── star.svg
                └── user.svg
            └── newsletter.webp
            └── 📁products
                └── 📁LaptopX
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁LED55A1C
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁LED65B1U
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁OLED42C2PSA
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁OLED55D1TA
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁QLED55A2TA
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁QLED65Q90TA
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁SmartSpeaker
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
                └── 📁UHD50X
                    └── 1.png
                    └── 2.png
                    └── 3.png
                    └── 4.png
    └── README.md
    └── 📁src
        └── 📁app
            └── favicon.ico
            └── globals.css
            └── page.tsx
        └── 📁components
            └── CategoryTitle.tsx
            └── DesktopHeader.tsx
            └── Footer.tsx
            └── Heading.tsx
            └── index.ts
            └── MaxWidthWrapper.tsx
            └── Navbar.tsx
            └── Newsletter.tsx
            └── 📁product
                └── HorizontalImages.tsx
                └── index.ts
                └── PriceCard.tsx
                └── ProductCard.tsx
                └── ProductDescription.tsx
                └── ProductDetails.tsx
                └── ProductImages.tsx
                └── RelatedProducts.tsx
                └── VerticalImages.tsx
            └── ProductPage.tsx
            └── ResponsiveHeader.tsx
            └── 📁ui
                └── Counter.tsx
                └── DropdownMenu.tsx
                └── index.ts
        └── 📁hooks
            └── index.ts
            └── use-products.ts
        └── 📁lib
            └── 📁data
                └── index.ts
                └── products.ts
            └── index.ts
            └── utils.ts
        └── 📁types
            └── index.ts
    └── tailwind.config.ts
    └── tsconfig.json
```

</details>
<details>
  <summary>Abbreviated</summary>

```
└── 📁src
    └── 📁app
        └── favicon.ico
        └── globals.css
        └── page.tsx
    └── 📁components
        └── CategoryTitle.tsx
        └── DesktopHeader.tsx
        └── Footer.tsx
        └── Heading.tsx
        └── index.ts
        └── MaxWidthWrapper.tsx
        └── Navbar.tsx
        └── Newsletter.tsx
        └── 📁product
            └── HorizontalImages.tsx
            └── index.ts
            └── PriceCard.tsx
            └── ProductCard.tsx
            └── ProductDescription.tsx
            └── ProductDetails.tsx
            └── ProductImages.tsx
            └── RelatedProducts.tsx
            └── VerticalImages.tsx
        └── ProductPage.tsx
        └── ResponsiveHeader.tsx
        └── 📁ui
            └── Counter.tsx
            └── DropdownMenu.tsx
            └── index.ts
    └── 📁hooks
        └── index.ts
        └── use-products.ts
    └── 📁lib
        └── 📁data
            └── index.ts
            └── products.ts
        └── index.ts
        └── utils.ts
    └── 📁types
        └── index.ts
```

</details>
