import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#070707", sand: "#f1f1f1", rust: "#c91522", sage: "#859582" }, fontFamily: { sans: ["Manrope", "Arial", "sans-serif"], display: ["Cormorant Garamond", "Georgia", "serif"] } } }, plugins: [] };
export default config;
