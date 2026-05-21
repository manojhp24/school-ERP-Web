import { Box, List, Typography, Divider } from "@mui/material";

import SidebarItem from "./SidebarItems";

const SidebarSection = ({ section, isMobile, collapsed, onClose }) => {
  const isCollapsed = collapsed && !isMobile;

  return (
    <Box sx={{ mb: isCollapsed ? 1.5 : 2.5 }}>
      {isCollapsed ? (
        <Divider sx={{ my: 1, mx: 0.5 }} />
      ) : (
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{
            px: 1.5,
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontSize: "0.68rem",
            opacity: 0.85,
          }}
        >
          {section.section}
        </Typography>
      )}

      <List disablePadding sx={{ mt: isCollapsed ? 0.5 : 1 }}>
        {section.items.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            isMobile={isMobile}
            collapsed={collapsed}
            onClose={onClose}
          />
        ))}
      </List>
    </Box>
  );
};

export default SidebarSection;
