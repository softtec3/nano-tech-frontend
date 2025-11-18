(# Nano Tech (frontend)

A React + Vite frontend for an e-commerce application named "Nano Tech". This repository contains the client-side application built with React 19, Vite, React Router, MUI and styled-components. The app includes authentication contexts, cart/checkout flows, an admin/sales area, product pages with image zoom, and multiple UI components.

**Status:** Development

---

**Table of Contents**

- **Overview**: Short project description
- **Features**: Key features and pages
- **Tech Stack**: Libraries and frameworks used
- **Getting Started**: Prerequisites and install
- **Available Scripts**: `npm` scripts and usage
- **Folder Structure**: High-level layout of the `src/` folder
- **Contexts & Hooks**: Key contexts and custom hooks
- **Configuration**: Notes on Vite and engines
- **Contributing**: How to contribute
- **License & Contact**

---

**Overview**:

- **Project name**: Nano Tech (frontend)
- **Purpose**: E-commerce storefront with user accounts, cart/checkout, sales point features, and product browsing.

**Features**:

- **Home & Shop**: Product listing, categories, and banners.
- **Product Details**: Product page with image zoom/magnifier.
- **Cart & Checkout**: Cart page and checkout flow (sales-point protected for some routes).
- **Authentication**: Login, Sign Up, Forget Password, and account management.
- **Account Area**: User orders, profile management, sales orders, and product management for sellers.
- **Routing**: Client-side routing using React Router.
- **Reusable UI**: Component library in `src/components/` including navigation, product cards, loaders, and modals.

**Tech Stack**:

- **Framework**: React 19
- **Bundler/Dev server**: Vite
- **Styling**: `styled-components` and MUI (`@mui/material`) for some components
- **Routing**: `react-router` (RouterProvider + createBrowserRouter)
- **Utilities / UI**: `react-hot-toast`, `react-icons`, `swiper`, and image magnifier/zoom libraries

**Getting Started**

Prerequisites:

- Node.js 18.x (per `package.json` engines)
- npm 9.x (or a compatible package manager)

Install dependencies:

```powershell
cd "nanotech-new"
npm install
```

Run development server:

```powershell
npm run dev
```

Preview production build locally:

```powershell
npm run build
npm run preview
```

Linting:

```powershell
npm run lint
```

**Available Scripts** (from `package.json`):

- **`npm run dev`**: Start Vite dev server
- **`npm run build`**: Create a production build
- **`npm run preview`**: Preview the built app locally
- **`npm run lint`**: Run ESLint over the codebase

**Folder Structure (high-level)**

The app follows a reasonably organized layout. Key folders:

- `src/` - Application source code
  - `components/` - Reusable UI components (Navbar, Footer, ProductCard, Loader, Modal, etc.)
  - `contexts/` - React Context providers (AuthContext, CartContext, LangContext, LoaderContext)
  - `hooks/` - Custom hooks (`useCart`, `useLang`, `useLoader`, `useUser`)
  - `layouts/` - Layout components (e.g., `RootLayout`)
  - `pages/` - Page components (Home, Shop, ProductDetails, Cart, AccountInfo, Checkout, Login, SignUp, etc.)
  - `router/` - Routing setup (`router.jsx` sets `RouterProvider` routes)
  - `utils/` - Utilities (e.g., `getFormData.jsx`, `handleBkashPayment.jsx`)

└── src
├── components
│ ├── AccordionMui
│ │ ├── AccordionMui.css
│ │ └── AccordionMui.jsx
│ ├── AccountInfoNavigation
│ │ └── AccountInfoNavigation.jsx
│ ├── Categories
│ │ ├── Categories.css
│ │ └── Categories.jsx
│ ├── Container
│ │ ├── Container.css
│ │ └── Container.jsx
│ ├── Footer
│ │ ├── Footer.css
│ │ └── Footer.jsx
│ ├── Loader
│ │ ├── loader.css
│ │ └── Loader.jsx
│ ├── LoadingSpinner
│ │ ├── loadingSpinner.css
│ │ └── LoadingSpinner.jsx
│ ├── Logo
│ │ ├── Logo.css
│ │ └── Logo.jsx
│ ├── MainNavbar
│ │ ├── MainNavbar.css
│ │ └── MainNavbar.jsx
│ ├── MobileCategories
│ │ ├── MobileCategories.css
│ │ └── MobileCategories.jsx
│ ├── MobileNavbar
│ │ ├── MobileNavbar.css
│ │ └── MobileNavbar.jsx
│ ├── Modal
│ │ ├── Modal.css
│ │ └── Modal.jsx
│ ├── Navigation
│ │ ├── Navigation.css
│ │ └── Navigation.jsx
│ ├── ProductCard
│ │ ├── ProductCard.css
│ │ └── ProductCard.jsx
│ ├── ProductImageZoom
│ │ └── ProductImageZoom.jsx
│ ├── ScrollToTop
│ │ └── ScrollToTop.jsx
│ ├── SectionTitle
│ │ └── SectionTitle.jsx
│ ├── SmallProductCard
│ │ ├── SmallProductCard.css
│ │ └── SmallProductCard.jsx
│ └── TopNavbar
│ ├── TopNavbar.css
│ └── TopNavbar.jsx
├── contexts
│ ├── AuthContext
│ │ ├── AuthContext.jsx
│ │ └── AuthContextProvider.jsx
│ ├── CartContext
│ │ ├── CartContext.jsx
│ │ └── CartContextProvider.jsx
│ ├── LangContext
│ │ ├── LangContext.jsx
│ │ └── LangContextProvider.jsx
│ └── LoaderContext
│ ├── LoaderContext.jsx
│ └── LoaderContextProvider.jsx
├── hooks
│ ├── useCart.jsx
│ ├── useLang.jsx
│ ├── useLoader.jsx
│ └── useUser.jsx
├── index.css
├── layouts
│ └── RootLayout
│ ├── RootLayout.css
│ └── RootLayout.jsx
├── main.jsx
├── pages
│ ├── AccountInfo
│ │ ├── AccountInfo.css
│ │ ├── AccountInfo.jsx
│ │ ├── ManageProfile
│ │ │ ├── manageProfile.css
│ │ │ └── ManageProfile.jsx
│ │ ├── MyOrders
│ │ │ ├── MyOrderRow.jsx
│ │ │ ├── myOrders.css
│ │ │ ├── MyOrders.jsx
│ │ │ └── OrderSingleView
│ │ │ └── OrderSingleView.jsx
│ │ ├── MyProducts
│ │ │ ├── MyProductRow.jsx
│ │ │ ├── myProducts.css
│ │ │ └── MyProducts.jsx
│ │ ├── MyProfile
│ │ │ ├── myProfile.css
│ │ │ └── MyProfile.jsx
│ │ └── SalesOrder
│ │ ├── myOrders.css
│ │ ├── SalesOrderRow.jsx
│ │ ├── SalesOrders.jsx
│ │ └── SalesOrderSingleView
│ │ └── SalesOrderSingleView.jsx
│ ├── Cart
│ │ ├── Cart.css
│ │ ├── Cart.jsx
│ │ ├── SalesPointCart
│ │ │ ├── SalesPointCart.css
│ │ │ ├── SalesPointCart.jsx
│ │ │ └── SingleCartItem.jsx
│ │ └── UserCart
│ │ ├── CartItem.jsx
│ │ ├── UserCart.css
│ │ └── UserCart.jsx
│ ├── Checkout
│ │ ├── checkout.css
│ │ └── Checkout.jsx
│ ├── ForgetPassword
│ │ ├── ForgetPassword.css
│ │ └── ForgetPassword.jsx
│ ├── Home
│ │ ├── Banner
│ │ │ ├── Banner.css
│ │ │ └── Banner.jsx
│ │ ├── Home.css
│ │ ├── Home.jsx
│ │ ├── HomeCategory
│ │ │ ├── HomeCategory.css
│ │ │ └── HomeCategory.jsx
│ │ ├── MiniBlog
│ │ │ ├── MiniBlog.css
│ │ │ └── MiniBlog.jsx
│ │ ├── ProductSectionThree
│ │ │ └── ProductSectionThree.jsx
│ │ ├── ProductSectionTwo
│ │ │ └── ProductSectionTwo.jsx
│ │ ├── ProductsSectionOne
│ │ │ ├── ProductsSectionOne.css
│ │ │ └── ProductsSectionOne.jsx
│ │ ├── PromotionBanner
│ │ │ ├── PromotionBanner.css
│ │ │ └── PromotionBanner.jsx
│ │ ├── PromotionBannerThree
│ │ │ ├── PromotionBannerThree.css
│ │ │ └── PromotionBannerThree.jsx
│ │ ├── PromotionBannerTwo
│ │ │ ├── PromotionBannerTwo.css
│ │ │ └── PromotionBannerTwo.jsx
│ │ ├── Trending
│ │ │ ├── Trending.css
│ │ │ └── Trending.jsx
│ │ └── WhyChooseUs
│ │ ├── WhyChooseUs.css
│ │ └── WhyChooseUs.jsx
│ ├── Login
│ │ ├── Login.css
│ │ └── Login.jsx
│ ├── ProductDetails
│ │ ├── ProductDetails.css
│ │ ├── ProductDetails.jsx
│ │ ├── ProductDetailsMain
│ │ │ ├── ProductDetailsMain.css
│ │ │ ├── ProductDetailsMain.jsx
│ │ │ └── ProductImagesSlider
│ │ │ └── ProductImagesSlider.jsx
│ │ ├── ProductInDetail
│ │ │ ├── ProductInDetail.css
│ │ │ └── ProductInDetail.jsx
│ │ └── ProductQuestion
│ │ ├── ProductQuestion.css
│ │ └── ProductQuestion.jsx
│ ├── SalesShop
│ │ ├── salesShop.css
│ │ └── SalesShop.jsx
│ ├── Shop
│ │ ├── FilterCheckbox
│ │ │ ├── FilterCheckbox.css
│ │ │ └── FilterCheckbox.jsx
│ │ ├── PriceRange
│ │ │ ├── PriceRange.css
│ │ │ └── PriceRange.jsx
│ │ ├── Shop.css
│ │ └── Shop.jsx
│ └── SignUp
│ ├── SignUp.css
│ └── SignUp.jsx
├── router
│ └── router.jsx
├── routes
│ ├── PrivateRoute.jsx
│ └── PrivateSalesPointRoute.jsx
└── utils
├── getFormData.jsx
└── handleBkashPayment.jsx

**Contexts & Hooks**

- `AuthContext` - Authentication state, provider located at `src/contexts/AuthContext/`
- `CartContext` - Cart management and persistence
- `LangContext` - Language selection context
- `LoaderContext` - Global loading state
- Hooks: `useCart`, `useLang`, `useLoader`, `useUser` for convenient access

**Routing Notes**

- The app uses a central router defined in `src/router/router.jsx`. Some routes are protected using `PrivateRoute` and `PrivateSalesPointRoute` wrappers (for authenticated users and sales-point users respectively).
- Entry point mounts `RouterProvider` inside context providers in `src/main.jsx`.

**Configuration**

- Vite config is minimal (`vite.config.js`) and uses the React plugin.
- Engines recommended: Node 18.x and npm 9.x (check `package.json`)

**Environment & Secrets**

- This README does not include environment variables — if your app requires API keys or environment configuration, add a `.env` file and document variables here (API base URL, auth settings, payment keys).

**Contributing**

- Fork the repository and create feature branches.
- Open a pull request with a clear description and testing instructions.
- Follow the existing code style and ESLint rules. Run `npm run lint` before PR.

**License**

- No license specified in this repository. Add a `LICENSE` file and update this section if you want to open-source the code (e.g., MIT, Apache-2.0).

**Contact / Support**

- For questions about the project, internal details, or deployment steps, contact the project owner or the original team that created this repo.

---

If you want, I can:

- Add a short `DEVELOPMENT.md` with common debugging tips and env variables.
- Add example `.env.example` listing expected environment variables.
- Run the dev server and confirm it starts on your machine (I can provide the terminal commands to run locally).

Happy to expand any section with more specifics (API endpoints, deployment steps, CI/CD instructions).
