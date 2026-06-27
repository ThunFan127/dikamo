/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F97C9",
        teal: "#35A7A1",
        leaf: "#5AB36A",
        accent: "#F0B73A",
        ink: "#1E3A4A",
        muted: "#64748B",
        soft: "#F7FAFC",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 55px rgba(30, 58, 74, 0.10)",
        card: "0 16px 40px rgba(30, 58, 74, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "mesh-soft":
          "radial-gradient(circle at 18% 20%, rgba(47,151,201,.16), transparent 28%), radial-gradient(circle at 84% 12%, rgba(53,167,161,.16), transparent 26%), radial-gradient(circle at 50% 90%, rgba(90,179,106,.13), transparent 28%)",
      },
    },
  },
  plugins: [],
};
