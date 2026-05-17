// ─────────────────────────────────────────────────────────────────────────────
// School ERP — MUI Palette
// Structure : 60% neutral · 30% slate · 10% navy blue
// ─────────────────────────────────────────────────────────────────────────────

// ── Raw Design Tokens ───────────────────────────────────────────────────────

export const colorTokens = {
  navy: {
    50: "#EBF3FF",
    100: "#BFDBFE",
    200: "#93C5FD",
    300: "#60A5FA",
    400: "#3B82F6",
    500: "#2563EB",
    600: "#1746A2",
    700: "#0C3566",
    800: "#071D3B",
    900: "#030D1F",
  },

  slate: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },

  green: {
    50: "#DCFCE7",
    100: "#BBF7D0",
    500: "#16A34A",
    600: "#15803D",
    900: "#14532D",
  },

  red: {
    50: "#FEE2E2",
    100: "#FECACA",
    500: "#DC2626",
    900: "#7F1D1D",
  },

  amber: {
    50: "#FEF9C3",
    100: "#FEF08A",
    500: "#D97706",
    900: "#713F12",
  },

  blue: {
    50: "#E0F2FE",
    100: "#BAE6FD",
    500: "#0369A1",
    900: "#0C4A6E",
  },

  purple: {
    50: "#F3E8FF",
    100: "#EDE9FE",
    500: "#7C3AED",
    900: "#4C1D95",
  },

  orange: {
    50: "#FFF7ED",
    100: "#FED7AA",
    500: "#EA580C",
    900: "#7C2D12",
  },
};

// ── Semantic Tokens ─────────────────────────────────────────────────────────

export const semanticTokens = {
  attendance: {
    present: {
      main: colorTokens.green[500],
      bg: colorTokens.green[50],
      text: colorTokens.green[900],
    },

    absent: {
      main: colorTokens.red[500],
      bg: colorTokens.red[50],
      text: colorTokens.red[900],
    },

    late: {
      main: colorTokens.amber[500],
      bg: colorTokens.amber[50],
      text: colorTokens.amber[900],
    },
  },

  fee: {
    paid: {
      main: colorTokens.green[500],
      bg: colorTokens.green[50],
      text: colorTokens.green[900],
    },

    pending: {
      main: colorTokens.amber[500],
      bg: colorTokens.amber[50],
      text: colorTokens.amber[900],
    },

    overdue: {
      main: colorTokens.red[500],
      bg: colorTokens.red[50],
      text: colorTokens.red[900],
    },
  },

  role: {
    admin: {
      bg: colorTokens.navy[50],
      text: colorTokens.navy[700],
    },

    teacher: {
      bg: colorTokens.purple[50],
      text: colorTokens.purple[900],
    },

    student: {
      bg: colorTokens.green[50],
      text: colorTokens.green[900],
    },
  },
};

// ── Light Palette ───────────────────────────────────────────────────────────

export const lightPalette = {
  mode: "light",

  // 10% Accent
  primary: {
    lighter: colorTokens.navy[50],
    light: colorTokens.navy[400],
    main: colorTokens.navy[600],
    dark: colorTokens.navy[700],
    darker: colorTokens.navy[800],
    contrastText: "#FFFFFF",
  },

  // 30% Supporting
  secondary: {
    lighter: colorTokens.slate[100],
    light: colorTokens.slate[500],
    main: colorTokens.slate[700],
    dark: colorTokens.slate[800],
    darker: colorTokens.slate[900],
    contrastText: "#FFFFFF",
  },

  // 60% Neutral
  background: {
    default: colorTokens.slate[100],
    paper: "#FFFFFF",
    neutral: colorTokens.slate[50],
  },

  text: {
    primary: colorTokens.slate[800],
    secondary: colorTokens.slate[500],
    disabled: colorTokens.slate[400],
  },

  divider: colorTokens.slate[200],

  success: {
    lighter: colorTokens.green[50],
    light: colorTokens.green[100],
    main: colorTokens.green[500],
    dark: colorTokens.green[600],
    contrastText: "#FFFFFF",
  },

  warning: {
    lighter: colorTokens.amber[50],
    light: colorTokens.amber[100],
    main: colorTokens.amber[500],
    dark: "#B45309",
    contrastText: "#FFFFFF",
  },

  error: {
    lighter: colorTokens.red[50],
    light: colorTokens.red[100],
    main: colorTokens.red[500],
    dark: "#B91C1C",
    contrastText: "#FFFFFF",
  },

  info: {
    lighter: colorTokens.blue[50],
    light: colorTokens.blue[100],
    main: colorTokens.blue[500],
    dark: "#075985",
    contrastText: "#FFFFFF",
  },

  action: {
    active: colorTokens.navy[600],

    hover: "rgba(23, 70, 162, 0.06)",

    selected: "rgba(23, 70, 162, 0.12)",

    disabled: colorTokens.slate[400],

    disabledBackground: colorTokens.slate[200],

    focus: "rgba(23, 70, 162, 0.12)",
  },
};

export default {
  light: lightPalette,
  tokens: colorTokens,
  semantic: semanticTokens,
};
