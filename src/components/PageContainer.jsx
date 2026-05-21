import { Box } from "@mui/material";

/**
 * PageContainer provides unified, responsive padding, layout constraints,
 * and vertical spacing rhythm for all modules inside the School ERP console.
 * 
 * Supports three layout variants:
 * - "standard": (Default) Max-width of 1400px. Perfect for tables, grids, and listings.
 * - "compact": Max-width of 960px. Ideal for input forms, profiles, or detail cards.
 * - "fluid": 100% width. Used for large scale reports or data grids.
 */
const PageContainer = ({
  children,
  variant = "standard",
  gap = { xs: 2.5, sm: 3.5 },
  maxWidth,
  sx = {},
  ...props
}) => {
  // Determine maximum layout width based on the selected variant
  let resolveMaxWidth = "1400px";
  if (variant === "compact") {
    resolveMaxWidth = "960px";
  } else if (variant === "fluid") {
    resolveMaxWidth = "100%";
  }

  // Allow manual overrides via maxWidth prop
  if (maxWidth !== undefined) {
    resolveMaxWidth = maxWidth;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: gap,
        width: "100%",
        px: {
          xs: 2,    // Compact spacing on mobile
          sm: 3,    // Medium spacing on tablets
          md: 4,    // Generous breathing room on desktop
        },
        py: {
          xs: 2.5,
          sm: 3.5,
          md: 4,
        },
        maxWidth: resolveMaxWidth,
        mx: "auto",
        boxSizing: "border-box",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
