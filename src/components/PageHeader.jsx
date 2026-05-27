import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Breadcrumbs,
  Link,
  Divider,
  Stack,
} from "@mui/material";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

/**
 * PageHeader provides a premium, enterprise-grade header layout for the School ERP.
 *
 * Satisfies User Version 1 styling:
 * - Left primary accent pill (4px width) scaling from 26px (title only) to 44px (title + subtitle).
 * - High-fidelity bold static title typography.
 * - Branded uppercase category segment directly above the header.
 * - Elegant bottom divider topped with a 56px primary colored visual anchor tab.
 * - Purely static UI with zero transitions or animations.
 */
const PageHeader = ({
  title,
  subtitle,
  actions,
  breadcrumbs = [],
  backPath = "",
  onBackClick = null,
  showDivider = false,
  category = "School ERP System Console",
  sx = {},
}) => {
  const navigate = useNavigate();
  const hasBackAction = Boolean(backPath || onBackClick);

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else if (backPath) {
      navigate(backPath);
    }
  };

  return (
    <Stack spacing={1.5} sx={{ width: "100%", ...sx }}>
      {/* Top Section: Category and Breadcrumbs */}
      <Stack spacing={0.5}>
        {category && (
          <Typography
            variant="overline"
            color="primary.main"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.08em",
              lineHeight: 1.2,
              fontSize: "0.6875rem",
              textTransform: "uppercase",
            }}
          >
            {category}
          </Typography>
        )}

        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                sx={{ fontSize: "0.85rem", color: "text.disabled" }}
              />
            }
            aria-label="breadcrumb"
          >
            <Link
              component={RouterLink}
              to="/dashboard"
              underline="hover"
              color="text.secondary"
              variant="caption"
              sx={{
                fontWeight: 500,
                fontSize: "0.75rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              Dashboard
            </Link>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return isLast ? (
                <Typography
                  key={crumb.label}
                  variant="caption"
                  color="text.primary"
                  sx={{ fontWeight: 600, fontSize: "0.75rem" }}
                >
                  {crumb.label}
                </Typography>
              ) : (
                <Link
                  key={crumb.label}
                  component={RouterLink}
                  to={crumb.path}
                  underline="hover"
                  color="text.secondary"
                  variant="caption"
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {crumb.label}
                </Link>
              );
            })}
          </Breadcrumbs>
        )}
      </Stack>

      {/* Main Header Block: Title, Subtitle, Pill and Actions */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          {/* Flat Back Button */}
          {hasBackAction && (
            <IconButton
              onClick={handleBack}
              size="small"
              sx={{
                color: "text.secondary",
                bgcolor: "background.neutral",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1.5,
                p: 0.75,
                mr: 2,
                mt: 0.25,
                "&:hover": {
                  bgcolor: "action.hover",
                  color: "text.primary",
                },
              }}
            >
              <ArrowBackOutlinedIcon sx={{ fontSize: "1.15rem" }} />
            </IconButton>
          )}

          {/* Left Vertical Accent Pill (4px width) */}
          <Box
            sx={{
              width: "4px",
              height: subtitle ? "44px" : "26px",
              bgcolor: "primary.main",
              borderRadius: "2px",
              mr: 2,
              mt: subtitle ? 0.75 : 0.5,
              flexShrink: 0,
            }}
          />

          {/* Title & Subtitle */}
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "1.375rem", sm: "1.625rem", md: "1.875rem" },
                fontWeight: 750,
                letterSpacing: "-0.015em",
                color: "text.primary",
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5, lineHeight: 1.4 }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Action Widgets */}
        {actions && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {actions}
          </Box>
        )}
      </Box>

      {/* Elegant Divider with Visual Anchor Tab */}
      {showDivider && (
        <Box sx={{ width: "100%", position: "relative", mt: 1 }}>
          <Divider />
          <Box
            sx={{
              width: "56px",
              height: "3px",
              bgcolor: "primary.main",
              position: "absolute",
              top: 0,
              left: 0,
              mt: "-2px",
              borderRadius: "1.5px",
            }}
          />
        </Box>
      )}
    </Stack>
  );
};

export default PageHeader;
