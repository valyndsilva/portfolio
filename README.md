# Valyn's Portfolio:

## Tech Stack Used:

ReactJS
TypeScript
NextJS
SSR
Tailwind CSS
Sanity CMS
Framer Motion
https://www.npmjs.com/package/react-simple-typewriter

## Getting Started:

Create TypeScript Project with create-next-app using the --ts, --typescript flag like so:

```
npx create-next-app@latest --typescript project-name
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

Install Sanity Studio:

In another terminal:

```
sudo npm install -g @sanity/cli next-sanity @sanity/image-url next-sanity-image
cd sanity-studio
sanity init
Create new project: portfolio
Project output path:sanity-studio
cd sanity-studio
sanity start
```

Create deskStructure.js in sanity-studio root folder to customize the desk list items.
Create a .env.local file in the root:
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=project_id
NEXT_PUBLIC_SANITY_TOKEN=sanity_token

Setup Tailwind CSS darkMode:

```
npm install next-themes
```

In index.js:

```
import { useTheme } from "next-themes";
const { theme, setTheme } = useTheme();
```

To fix hydration UI mismatch issues, we need to wait until the component has mounted.

```
const [mounted, setMounted] = useState(false);
useEffect(() => {
setMounted(true);
}, []);
if (!mounted) return null;
```

In tailwind.config.js:
add the line: darkMode: "class",
Then use dark: in classNames as needed.

Setup Custom Fonts:
Download google font in woff2 format.
Save the font file in /public/fonts/

In tailwind.config.js:

```
theme: {
extend: {
fontFamily: {
pacifico: "Pacifico, cursive",
},
},
},
```

To use in files "font-pacifico"

Custom 'Document' file:
create \_document.js in pages folder
https://nextjs.org/docs/advanced-features/custom-document

npm install react-icons react-reveal swiper
npm install @ap.cx/react-fullpage

# Setting up Nextjs with typescript,eslint and prettier:

```
npm install eslint --save-dev
npm install eslint-config-next
npm install --save-dev @next/eslint-plugin-next
npx eslint --init
npm install --save-dev prettier
```

To avoid conflict with eslint and prettier

```
npm install --save-dev eslint-config-prettier
```

The .eslintrc.js file should look like this and we add prettier to extends and add settings:

```
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  settings: {
    react: {
      version: 'latest'
    }
  }
}

```

Create a .prettierrc file with the following:

```

{
  "endOfLine": "lf",
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}

```

Run prettier to reformat the files:

```
prettier --write .
```

Create a .vscode folder in root directory and in it a settings.json file.
In settings.json:

```

{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "esource.fixAll.format": true
  }
}

```

This tells eslint to fix any auto fixable problems when we hit save and the prettier runs after that and format the changes we made.

Next we install husky to setup a pre git commit hooks. It checks 4 things:
No Prettier warnings in the code
No ESLint warnings in the code
No compling errors in the code from typescript
Check if you can run a valid build using Next.js next build

Install Husky and update package.json scripts with "prepare": "husky install":

```
npx husky-init
npm install
```

A .husky folder is created with a sample pre-commmit.json file

In packege.json we create 5 different scripts to test various things:
// Runs tsc command on cli and pretty print any warnings or errors that it produces
"check-types": "tsc --pretty --noEmit",
// asks prettier to check all the files excluding the ones in the prettierignore file for formatting issues.
"check-format": "prettier --check",
// Asks eslint to check for any linting warning or errors in any ts. tsx or js file
"check-lint": "eslint . --ext ts --ext tsx --ext js --ext jsx",
// Tells prettier to automatically re-write all the files with proper formatting
"format": "prettier --write .",
// test-all runs all commands above in sequence
"test-all":"npm run check-format && npm run check-lint && npm run check-types && npm run build"

The package.json scripts will look like this:

```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prepare": "husky install",
    "check-types": "tsc --pretty --noEmit",
    "check-format": "prettier --check",
    "check-lint": "eslint . --ext ts --ext tsx --ext js --ext jsx",
    "format": "prettier --write .",
    "test-all": "npm run check-format && npm run check-lint && npm run check-types && npm run build"
  },
```

We need to check all succeed before a commit is to be made.
Open the .husky/pre-commmit.json file:

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Check tsconfig standards
npm run check-types ||
(
    echo 'Failed Type Check!!! Make the required changes listed above.';
    false;
)

# Check Prettier standards
npm run check-format ||
(
    echo 'Prettier Check Failed!!! Run "npm run format", add changes and try commit again.';
    false;
)

# Check ESLint standards
npm run check-lint ||
(
    echo 'ESLint Check Failed!!! Make the required changes listed above, add changes and try commit again.';
    false;
)

# If everything passes... try to run a build
    echo 'Your code looks good!!! Trying to build now...';

    npm run build ||
(
    echo 'Next build Failed!!! View the errors above to see why.';
    false;
)

# If it builds we can commit
    echo 'Your code passed all checks!!! Code is being commited now...';

```

If you run into an error:
The Next.js plugin was not detected in your ESLint configuration. See https://nextjs.org/docs/basic-features/eslint#migrating-existing-config

In the .eslintrc.js in the root add to extends:

```
"plugin:@next/next/recommended",

```

If you receive an error:
ESLint: Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.

In the .eslintrc.js in the root add to extends:

```
 project: "./tsconfig.json",
```

npm install --save-dev eslint
npm install --save-dev eslint-plugin-react

Type error: Cannot find module 'part:@sanity/base/schema-creator' or its corresponding type declarations.
To remove the error: Type error: Cannot find module 'part:@sanity/base/schema-creator' or its corresponding type declarations.
In schema.ts at the top:

```
/// <reference types="@sanity/types/parts" />
```

Deploy to Vercel
Install and configure Vercel CLI.
$ npm i -g vercel
In terminal, at the root of the project write:
$ vercel

When you run npm run build you might receive an error like:
rror occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
FetchError: invalid json response body at http://localhost:3000/api/getHero reason: Unexpected token < in JSON at position 0
If this happens switvh from ISR to SSR in index.tsx.
