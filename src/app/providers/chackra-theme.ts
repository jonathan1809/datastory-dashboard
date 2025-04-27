// Define your color palette
export const colors = {
  background: "#f1f5f9", // Tailwind's slate-100
  foreground: "#0f172a", // Tailwind's slate-900
  card: "#ffffff", // Tailwind's white
  primary: {
    50: "#e0f2fe",
    100: "#bae6fd",
    200: "#7dd3fc",
    300: "#38bdf8",
    400: "#0ea5e9", // Tailwind's sky-500
    500: "#0284c7",
    600: "#0369a1",
    700: "#075985",
    800: "#0c4a6e",
    900: "#0a3b5c",
  },
  secondary: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a", // Tailwind's slate-900
  },
  accent: {
    50: "#e0f2fe",
    100: "#bae6fd",
    200: "#7dd3fc",
    300: "#38bdf8",
    400: "#0ea5e9", // Tailwind's sky-500
    500: "#0284c7",
    600: "#0369a1",
    700: "#075985",
    800: "#0c4a6e",
    900: "#0a3b5c",
  },
  destructive: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  muted: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  border: "#e2e8f0", // Tailwind's gray-200
  input: "#e2e8f0", // Tailwind's gray-200
  ring: "#0ea5e9", // Tailwind's sky-500
};

// Define semantic tokens for light and dark modes
const semanticTokens = {
  colors: {
    background: {
      default: colors.background,
      _dark: colors.secondary[900],
    },
    foreground: {
      default: colors.foreground,
      _dark: colors.secondary[100],
    },
    card: {
      default: colors.card,
      _dark: colors.secondary[800],
    },
    primary: {
      default: colors.primary[400],
      _dark: colors.primary[200],
    },
    secondary: {
      default: colors.secondary[500],
      _dark: colors.secondary[300],
    },
    accent: {
      default: colors.accent[400],
      _dark: colors.accent[200],
    },
    destructive: {
      default: colors.destructive[500],
      _dark: colors.destructive[300],
    },
    muted: {
      default: colors.muted[500],
      _dark: colors.muted[300],
    },
    border: {
      default: colors.border,
      _dark: colors.secondary[700],
    },
    input: {
      default: colors.input,
      _dark: colors.secondary[700],
    },
    ring: {
      default: colors.ring,
      _dark: colors.accent[300],
    },
  },
};
