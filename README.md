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

npm i --save-dev eslint-config-next