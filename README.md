# Shop Josh 

## Table of Contents

- [Introduction](#introduction)
- [Frameworks](#frameworks)
- [UI](#ui)
- [Hooks and Utilities](#hooks-and-utilities)
- [Code quality](#code-quality)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [License](#license)
- [Author](#author)

## Introduction

Live like Josh's alter ego, j@28. Inspired by Aubrey Graham. 

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [React Query](https://tanstack.com/query) – Efficient data fetching and state management library for React applications

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Shadcn UI](https://ui.shadcn.com/) – Beautifully designed components that you can copy and paste into your app.
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [geist](https://vercel.com/font) – A typeface specifically designed for developers and designers. 
- [next-themes](https://github.com/pacocoursey/next-themes) – A library for adding dark mode support to Next.js applications

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Zod](https://github.com/colinhacks/zod) – A powerful TypeScript-first validation and parsing library for robust data handling.
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### To do

&#9745; set up repo

&#9745; install dependencies

&#9745; establish general layout

&#9745; design 404 page

&#9745; fix minor api and db bugs

&#9745; add menu feature

&#9745; edit toast

&#9745; build product page with disclaimer and carousel

&#9745; complete grid item functionality 

&#9745; build cart and implement checkout

&#9745; filter and sort first 4 related products in product page

&#9745; switch getAllCategories and getAllProducts to useInfiniteQuery

&#9745; update database

&#9745; fix seo

&#9745; fix product grid item ui & responsiveness

&#9744; test on other devices and browsers

&#9744; build and deploy

&#9744; add links to bedroom bg-image and remove redirect?

&#9744; make cart scrollable with mousewheel?

&#9744; make bedroom bg-image scrollable?

&#9744; design and implement footer image?

&#9744; fix exit animation on some pages?

&#9744; add search feature? (probably in menu)

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js
- npm or Yarn

### Usage

Follow these steps to set up and run shop josh locally.

1. Create a new project:

   ```bash
   npx create-next-app --example https://github.com/joshuaedo/shop 
   ```

 2.  Create a `.env` file in the project root and add the following variables:

   ```env
  NEXT_PUBLIC_SHOP_API_URL=shop_api_url
  SHOP_API_KEY=shop_api_key
  NEXT_PUBLIC_SHOP_ID=shop_id
  DATABASE_URL=your_database_url
   ```

   Replace the placeholders.

 3. Run the development server:

   ```bash
   npm run dev
   ```

   The application should be accessible at `http://localhost:3000`.

## License

This project is licensed under the MIT [License](https://github.com/joshuaedo/shop/blob/main/LICENSE) 

## Author

- Joshua Edo ([joshuaedo.com](https://joshuaedo.com))


