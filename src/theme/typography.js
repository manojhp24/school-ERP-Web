// src/theme/typography.js

const typography = {
  fontFamily: "'Lato', sans-serif",

  // ─────────────────────────────────────────────────────────────────────
  // Display Typography
  // Dashboard KPIs / Important Metrics
  // ─────────────────────────────────────────────────────────────────────

  display1: {
    fontSize: "3.5rem",
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  display2: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Headings
  // ─────────────────────────────────────────────────────────────────────

  h1: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },

  h2: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.35,
    letterSpacing: "-0.01em",
  },

  h3: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },

  h4: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  h5: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  h6: {
    fontSize: "0.95rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Subtitles
  // ─────────────────────────────────────────────────────────────────────

  subtitle1: {
    fontSize: "0.95rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },

  subtitle2: {
    fontSize: "0.85rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Body Text
  // ─────────────────────────────────────────────────────────────────────

  body1: {
    fontSize: "0.95rem",
    fontWeight: 400,
    lineHeight: 1.75,
  },

  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.75,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Utility Typography
  // ─────────────────────────────────────────────────────────────────────

  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.4,
  },

  overline: {
    fontSize: "0.7rem",
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "none",
  },

  // ─────────────────────────────────────────────────────────────────────
  // ERP Dashboard Variants
  // ─────────────────────────────────────────────────────────────────────

  statValue: {
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },

  statLabel: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: "0.02em",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Table Typography
  // ─────────────────────────────────────────────────────────────────────

  tableHeader: {
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  tableCell: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Monospace
  // IDs / Invoice Numbers / Codes
  // ─────────────────────────────────────────────────────────────────────

  mono: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.8rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
};

export default typography;
