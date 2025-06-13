# Frontendiya Test Project

## Description

This project is a small **GitHub mirror-like application**. It allows users to search for a GitHub profile by username and view a list of public repositories for that user. The application is built using **React**, **TypeScript**, and **Vite**, with state management handled via **Zustand**.


## Key Technologies and Tools

- **React 19.1.0** - A library for building user interfaces.
- **TypeScript 5.8.3** - Static typing for improved development.
- **Vite 6.3.5** - High-performance build tool and dev server.
- **Zustand 5.0.5** - State management library.
- **Cypress 14.4.1** - End-to-End (E2E) testing.
- **Vitest 3.2.3** - Unit testing framework.
- **ESLint** - Code quality and linting for JavaScript/TypeScript.
- **Prettier** - Code formatting.
- **Stylelint** - Linting for CSS and SCSS.

## Requirements

Make sure you have the following tools installed:

- **Node.js** version 16 or higher
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-URL>
   cd frontendiya-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## npm Scripts

Below are the main commands available for development and testing:

| Command                   | Description                                      |
|---------------------------|--------------------------------------------------|
| `npm run dev`             | Starts the development server with hot reload.   |
| `npm run build`           | Builds the project for production.               |
| `npm run preview`         | Previews the production-ready build.             |
| `npm run lint`            | Checks code against ESLint rules.                |
| `npm run lint:styles`     | Checks SCSS and CSS files with Stylelint.        |
| `npm run lint:styles:fix` | Fixes style issues using Stylelint.              |
| `npm run format`          | Formats codebase using Prettier.                 |
| `npm run test`            | Runs unit tests with Vitest.                     |
| `npm run test:watch`      | Runs tests in watch mode.                        |
| `npm run test:coverage`   | Runs tests and generates a code coverage report. |

## Pre-commit Hooks

This project uses **Husky** to enforce code quality checks before commits. The following checks are performed:

- Linting of JavaScript/TypeScript files (**ESLint**, Prettier).
- Linting of styles (**Stylelint**, Prettier).
- Auto-formatting of staged files.

## Testing

### Unit Tests

**Vitest** is used for writing and running unit tests. Run the tests with:

   ```bash
   npm run test
   ```

### End-to-End (E2E) Tests
**Cypress** is used for E2E testing. To run E2E tests:

1. Open the Cypress GUI:
   ```bash
   npx cypress open
   ```

2. Or run all tests in the terminal:
   ```bash
   npx cypress run
   ```

## Linting Setup

Configured linting tools:

- **ESLint** for JavaScript/TypeScript
- **Stylelint** for SCSS and CSS

