## Automatic installation

### Command

To create our application, we will run:

```sh
npx create-next-app@latest
```

### Installation options (yes / no)

#### Typescript (yes)

In this project, we will using Typescript as far as it is strong and statically typed. That is because:

- Early error detection. The compiler catches errors before running the code.

- Very good IDE support. Specially in our case, with VS Code.

- Easier Code Maintenance. Large refactors become safer and it is easy to realize if something is breaking after changing.

- Includes modern JavaScript Features.

- Implicit Documentation. Types serve as living documentation.

#### Eslint (yes)

ESLint is a code analysis tool (linter) for JavaScript and TypeScript.

- Formatting & consistency (quotes, semi-colons, spacing, etc.)

- Bad patterns (e.g. unused variables, unreachable code)

- Potential bugs (no-extra-boolean-cast, no-unsafe-finally, etc.)

- Complexity (max-lines, max-depth)

- Code smells (dangerous or risky code)

#### Tailwind CSS (yes)

Tailwind CSS is a CSS framework.

- You write CSS directly in your HTML/JSX using utility classes which are small, single-purpose CSS classes that do exactly one thing.

- Reduce the need of using external CSS files. That makes the project easy to mantain.

#### The code inside a src/ directory (yes)

This is more convenient in this case.

- Clear separation between "source code" and "other stuff" like configs, CI/CD files, Docker, etc.

- Tools use to be easy to configure.

#### Using App Router (yes)

We chose the routing system.

- Pages Router was used in Next.js 12 and earlier. It is considered legacy.

- In the Pages Router, One file equals one route. Meanwhile, in the App Router layouts must be repeated or wrapped manually.

- Loading and error handling is automatic in App Router.

- Pages router is full client side, while App Router supports server components.

#### Turbopack (yes)

Turbopack is a bundler. In this case, looks better option than Webpack or others for the following reasons:

- It is d"devDependencies": {
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4",
  "eslint": "^9",
  "eslint-config-next": "15.3.3",
  "@eslint/eslintrc": "^3"
  }eveloped adn mantained by next Next.js.

- It is much faster because it is developed in Rust while Webpack was developed in Javascript.

#### Customize the import alias (yes)

Important in professional codebases.

- No more ../../../../../../utils/helpers.

- Much easier to mantain.
