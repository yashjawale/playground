# Interactive Computer Science Playground

Interactive computer science playground built with Astro.js, React, and TypeScript. Contains algorithmic problem solvers like CryptArithmetic and N-Queens that run computations in the browser.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, build, and test the repository:

- **Prerequisites**: Requires Node.js version 18 or higher (tested with v20.19.4)
- `npm ci` -- takes 25 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- `npm run format:check` -- takes 3-5 seconds
- `npm run lint` -- takes 3-5 seconds
- `npm run astro check` -- takes 4-5 seconds. TypeScript and Astro validation.
- `npm run build` -- takes 8-10 seconds. NEVER CANCEL. Set timeout to 60+ seconds.

### Run the application:

- **ALWAYS run the bootstrapping steps first**
- Development server: `npm run dev` -- starts on http://localhost:4321/playground/
- Preview built site: `npm run preview` -- starts on http://localhost:4321/playground/
- The application has a base path of `/playground/` configured in astro.config.mjs

### Validation scenarios:

- **ALWAYS manually validate any new code by testing complete user scenarios**
- Test CryptArithmetic solver: Navigate to `/cryptarithmetic`, enter "SEND" + "MORE" = "MONEY", click Solve. Should find 25 solutions.
- Test N-Queens solver: Navigate to `/nqueens`, use default N=4, click Solve. Should find 2 solutions.
- **CRITICAL**: Always test the algorithms work correctly after making changes to solver components.
- Test theme switching: Click the theme buttons in the header (Auto/Light/Dark themes)
- Test navigation: Verify "Go Back" links work and main page shows both problem cards

### Code quality:

- Always run `npm run format` before committing to apply Prettier formatting
- Always run `npm run lint` before committing or the CI (.github/workflows/lint.yml) will fail
- The ESLint config is strict with TypeScript rules and no-console errors

## Project Structure

### Key directories and files:

```
src/
├── pages/                    # Astro pages (file-based routing)
│   ├── index.astro          # Main landing page with problem cards
│   ├── cryptarithmetic/     # CryptArithmetic solver page and algorithm
│   │   ├── index.astro      # Page component
│   │   └── cryptarithmetic-algorithm.ts
│   └── nqueens/             # N-Queens solver page and algorithm
│       ├── index.astro      # Page component
│       └── nqueens-algorithm.ts
├── components/
│   ├── react/               # React components (client-side interactive)
│   │   ├── common/          # Reusable components like TextInput
│   │   ├── CryptArithmeticSolver.tsx
│   │   └── NQueensSolver.tsx
│   ├── BaseHead.astro       # HTML head with meta tags
│   ├── Navbar.astro         # Navigation with theme selector
│   └── Card.astro           # Problem card component
├── layouts/
│   └── Layout.astro         # Main page layout wrapper
└── styles/
    └── global.css           # Global CSS with utility classes like btn-primary
```

### Repository root:

```
.github/workflows/           # CI/CD pipelines
├── deploy.yaml             # GitHub Pages deployment
└── lint.yml                # Linting, formatting, type checking, build
astro.config.mjs            # Astro configuration with React integration
eslint.config.js            # ESLint configuration (strict TypeScript rules)
package.json                # Dependencies and npm scripts
tsconfig.json               # TypeScript configuration
.prettierrc                 # Prettier formatting rules
```

## Adding New Activities

Follow the established pattern when adding new problem solvers:

1. Create directory: `src/pages/yourproblem/`
2. Add `index.astro` page with algorithm import and React component
3. Implement algorithm in separate `.ts` file (e.g., `yourproblem-algorithm.ts`)
4. Create React component in `src/components/react/YourProblemSolver.tsx`
5. Add entry to main page: Update `src/pages/index.astro` with new `Card` component
6. **Always test the complete user flow** after implementation

## Common Issues and Workarounds

- **Console warnings about Partytown/Google Analytics**: These are expected and don't affect functionality
- **Build warnings about API routes**: Expected for algorithm .ts files that export functions
- **Theme switching**: Uses localStorage and system preferences, implemented in Navbar.astro
- **Performance**: Algorithm computations run in browser, may take time for complex inputs

## Technology Stack

- **Framework**: Astro.js v5 (static site generator with partial hydration)
- **Interactive UI**: React 18 (client-side components for algorithms)
- **Styling**: TailwindCSS v4 with custom global styles
- **Language**: TypeScript with strict configuration
- **Package Manager**: npm (despite package.json mentioning yarn, use npm commands)
- **Deployment**: GitHub Pages via GitHub Actions
- **Development**: Vite (integrated with Astro)

## CI/CD Pipeline

The repository has two GitHub Actions workflows:

- `lint.yml`: Runs on push/PR to main/develop branches. Tests Node 18.x and 20.x.
- `deploy.yaml`: Deploys to GitHub Pages on push to main branch.

Both workflows run: npm ci → format:check → lint → astro check → build

## Performance Notes

- **Build time**: ~8 seconds (very fast)
- **Dev server startup**: ~1 second
- **Dependency installation**: ~25 seconds
- **Algorithm computation**: Variable (runs in browser, can take time for complex inputs)
- All operations are fast except dependency installation
