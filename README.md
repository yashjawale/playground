# Playground

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Lint, Format, and Type Check](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/lint.yml/badge.svg)](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/lint.yml)
[![Deploy to GitHub Pages](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/deploy.yml)

A collection of interactive simulators and demos for computer science concepts.

## Add new activity

> Requires NodeJS Version 18 or higher

1. Clone this repository and install dependencies
2. Start development server with `npm run dev`
3. Create a new directory in the format `src/pages/yourproblem`
4. Add `index.astro` with page content, with algorithm written in a separate `.ts` file in the same directory.
5. If required, create React component for widget in `src/components/react` directory & use it in the astro page.
6. Lastly, add your activity entry in `src/pages/index.astro` using the `Card` component.
7. Submit a PR to merge it into the main branch.

## Helper Utilites

- Common React components for Input, etc present in `src/components/react/common` directory.
- CSS Classes for common elements, eg. `btn-primary` present in `src/styles/global.css` file.
- Feel free to add yours & update this accordingly.

## Tech Stack

- Site made using [AstroJS](https://astro.build/)
- Interactive widgets created with [React](https://react.dev/)
- Styling with [TailwindCSS](https://tailwindcss.com/)

<br/>

---

<a href="https://yashjawale.github.io/" target="_blank"><img style="height: 22px;" src="https://raw.githubusercontent.com/yashjawale/.github/main/docs/logo.svg" alt="Yash Jawale"/></a>
