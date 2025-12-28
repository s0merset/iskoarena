/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
        extend: {
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        // Custom Project Colors
                        "cyber-black": "#020617", // Updated to darker slate from new design
                        "cyber-dark": "#0f172a",
                        "cyber-panel": "#1e293b",
                        "cyber-gray": "#1e293b",
                        "neon-blue": "#00f0ff", // Updated to #00f0ff from new design
                        "neon-purple": "#bd00ff",
                        "neon-green": "#00ff9f",
                        "neon-orange": "#ff8800",
                        "neon-yellow": "#fcee0a",
                        "neon-red": "#ff2a6d",
                },
                fontFamily: {
                    "display": ["Lexend", "sans-serif"],
                    "mono": ["JetBrains Mono", "monospace"]
                },
                backgroundImage: {
                    "cyber-grid": "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
                    "glass-gradient": "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.6))",
                },
                boxShadow: {
                    "neon": "0 0 10px theme('colors.neon-blue'), 0 0 20px theme('colors.neon-blue')",
                    "neon-purple": "0 0 5px theme('colors.neon-purple'), 0 0 20px theme('colors.neon-purple')",
                    "neon-glow": "0 0 5px theme('colors.neon-blue'), 0 0 10px rgba(0, 240, 255, 0.5)",
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        scanline: {
                            '0%': { transform: 'translateY(-100%)' },
                            '100%': { transform: 'translateY(100%)' },
                        },
                        shimmer: {
                            '100%': { transform: 'translateX(100%)' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'spin-slow': 'spin 12s linear infinite',
                        'float': 'float 6s ease-in-out infinite',
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
