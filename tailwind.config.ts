import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#171914', paper: '#f4f2eb', lime: '#d7ff64', muted: '#74776e' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } },
  plugins: [],
};
export default config;
