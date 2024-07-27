// Importing the Config type from Tailwind CSS to help TypeScript understand the structure
import type { Config } from "tailwindcss";

// Starting the configuration object for Tailwind CSS
const config = {
  // Enabling dark mode which can be toggled by adding a specific class
  darkMode: ["class"],

  // Specifying the paths to the files where Tailwind should look for class names
  content: [
    "./pages/**/*.{ts,tsx}", // Look for Tailwind classes in TypeScript files in the pages directory
    "./components/**/*.{ts,tsx}", // Look in the components directory
    "./app/**/*.{ts,tsx}", // Look in the app directory
    "./src/**/*.{ts,tsx}", // Look in the src directory
    "./constants/**/*.{ts,tsx}", // Look in the constants directory
  ],

  // No prefix is added to the class names
  prefix: "",

  // Customizing the default styles
  theme: {
    // Setting default styles for containers
    container: {
      center: true, // Centering the containers
      padding: "2rem", // Adding padding to containers
      screens: {
        "2xl": "1400px", // Setting the container width for extra-large screens
      },
    },

    // `extend` is specific to Tailwind CSS. It allows you to add to or override the default theme settings.
    extend: {
      // Defining custom colors
      colors: {
        fill: {
          1: "rgba(255, 255, 255, 0.10)", // Custom fill color
        },
        bankGradient: "#0179FE", // Custom gradient color
        indigo: {
          500: "#6172F3",
          700: "#3538CD",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          600: "#039855",
          700: "#027A48",
          900: "#054F31",
        },
        pink: {
          25: "#FEF6FB",
          100: "#FCE7F6",
          500: "#EE46BC",
          600: "#DD2590",
          700: "#C11574",
          900: "#851651",
        },
        blue: {
          25: "#F5FAFF",
          100: "#D1E9FF",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          900: "#194185",
        },
        sky: {
          1: "#F3F9FF",
        },
        black: {
          1: "#00214F",
          2: "#344054",
        },
        gray: {
          25: "#FCFCFD",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
      },

      // Defining custom background images
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)", // Custom gradient background
        "gradient-mesh": "url('/icons/gradient-mesh.svg')", // Custom mesh background
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)", // Another custom gradient
      },

      // Adding custom shadows for elements
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)", // Light shadow for forms
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)", // Medium shadow for charts
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)", // Shadow for profile cards
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)", // Shadow for credit cards
      },

      // Defining custom fonts
      fontFamily: {
        inter: "var(--font-inter)", // Using a custom variable for the Inter font
        "ibm-plex-serif": "var(--font-ibm-plex-serif)", // Using a custom variable for IBM Plex Serif font
      },

      // Custom animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" }, // Starting state of the animation
          to: { height: "var(--radix-accordion-content-height)" }, // Ending state of the animation
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // Starting state
          to: { height: "0" }, // Ending state
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Custom animation for expanding accordion
        "accordion-up": "accordion-up 0.2s ease-out", // Custom animation for collapsing accordion
      },
    },
  },

  // Adding plugins to extend Tailwind's functionality
  plugins: [require("tailwindcss-animate")], // Adding an animation plugin
} satisfies Config; // Ensuring the configuration matches the expected type

// Exporting the configuration to be used by Tailwind CSS
export default config;
