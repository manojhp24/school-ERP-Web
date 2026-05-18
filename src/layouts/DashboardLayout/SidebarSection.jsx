import { Box, List, Typography } from "@mui/material";

import SidebarItem from "./SidebarItems";

const SidebarSection = ({ section, isMobile, onClose }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="overline" color="text.secondary" sx={{ px: 1 }}>
        {section.section}
      </Typography>

      <List disablePadding sx={{ mt: 1 }}>
        {section.items.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            isMobile={isMobile}
            onClose={onClose}
          />
        ))}
      </List>
    </Box>
  );
};

export default SidebarSection;
