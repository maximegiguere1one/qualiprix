import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'Montserrat', 'sans-serif'],
        display: ['Clash Display', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.6' }],
        'sm': ['clamp(0.875rem, 0.85rem + 0.125vw, 1rem)', { lineHeight: '1.6' }],
        'base': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.7' }],
        'lg': ['clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)', { lineHeight: '1.65' }],
        'xl': ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.6' }],
        '2xl': ['clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)', { lineHeight: '1.5' }],
        '3xl': ['clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)', { lineHeight: '1.4' }],
        '4xl': ['clamp(2.25rem, 1.95rem + 1.5vw, 3rem)', { lineHeight: '1.3' }],
        '5xl': ['clamp(2.5rem, 2rem + 2.5vw, 3.75rem)', { lineHeight: '1.25' }],
        '6xl': ['clamp(3rem, 2.25rem + 3.75vw, 4.5rem)', { lineHeight: '1.2' }],
        '7xl': ['clamp(3.5rem, 2.5rem + 5vw, 5.5rem)', { lineHeight: '1.15' }],
        '8xl': ['clamp(4rem, 2.75rem + 6.25vw, 6.5rem)', { lineHeight: '1.1' }],
      },
      maxWidth: {
        'readable': '65ch',
        'readable-wide': '75ch',
        'readable-narrow': '50ch',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
            opacity: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: {
            height: "0",
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-subtle": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-6px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.98)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "menu-stagger": {
          "0%": {
            opacity: "0",
            transform: "translateY(-4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "blob-float": {
          "0%, 100%": {
            transform: "scale(1) translateY(0)",
            opacity: "0.1",
          },
          "50%": {
            transform: "scale(1.05) translateY(-10px)",
            opacity: "0.15",
          },
        },
        "mesh-move": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "33%": {
            transform: "translate(10px, -10px)",
          },
          "66%": {
            transform: "translate(-10px, 10px)",
          },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-scale": {
          from: {
            opacity: "0",
            transform: "translateY(30px) scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "magnetic-pull": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(var(--tx), var(--ty))" },
        },
        "particle-float": {
          "0%": { transform: "translate(-50%, -50%) scale(0)", opacity: "0" },
          "50%": { transform: "translate(-50%, -150%) scale(1)", opacity: "1" },
          "100%": { transform: "translate(-50%, -200%) scale(0)", opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.1)" },
        },
        "fade-up-scale": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.92)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "fade-in-smooth": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.96)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "slide-fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "badge-pop": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.8) rotate(-3deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1) rotate(-2deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "accordion-up": "accordion-up 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "fade-in": "fade-in 320ms ease-out",
        "fade-in-subtle": "fade-in-subtle 280ms ease-out",
        "fade-in-up": "fade-in-up 500ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "fade-in-scale": "fade-in-scale 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "slide-up": "slide-up 280ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "slide-down": "slide-down 240ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "scale-in": "scale-in 200ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "menu-stagger": "menu-stagger 160ms ease-out",
        "gradient-shift": "gradient-shift 20s ease-in-out infinite",
        "blob-float": "blob-float 8s ease-in-out infinite",
        "mesh-move": "mesh-move 15s ease-in-out infinite",
        "particle-float": "particle-float 1s ease-out",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-up-scale": "fade-up-scale 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-smooth": "fade-in-smooth 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-fade-up": "slide-fade-up 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
        "badge-pop": "badge-pop 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
