npx create-next-app --example with-tailwindcss portfolio
sudo npm install -g @sanity/cli
sanity init
Create new project: portfolio
Project output path:sanity-studio
cd sanity-studio
sanity start

In another terminal:
npm run dev

Setup darkMode:
npm install next-themes

In index.js:
import { useTheme } from "next-themes";
const { theme, setTheme } = useTheme();

// To fix hydration UI mismatch issues, we need to wait until the component has mounted.
const [mounted, setMounted] = useState(false);
useEffect(() => {
setMounted(true);
}, []);
if (!mounted) return null;

In tailwind.config.js:
add the line: darkMode: "class",
Then use dark: in classNames as needed.

Setup Custom Fonts:
Download google font in woff2 format.
Save the font file in /public/fonts/

In tailwind.config.js:
theme: {
extend: {
fontFamily: {
pacifico: "Pacifico, cursive",
},
},
},

To use in files "font-pacifico"

Custom 'Document' file:
create \_document.js in pages folder
https://nextjs.org/docs/advanced-features/custom-document

npm install react-icons
npm install react-reveal
npm install swiper