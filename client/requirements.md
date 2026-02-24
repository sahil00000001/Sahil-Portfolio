## Packages
framer-motion | Page transitions, scroll-triggered animations, and complex micro-interactions
react-intersection-observer | Viewport detection for scroll animations
lucide-react | High quality vector icons

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  sans: ["var(--font-sans)"],
}
The application uses a deep dark theme by default to achieve a premium glassmorphic aesthetic.
Forms are wired up to POST /api/contact. Ensure the API supports this.
