// src/app/App.jsx

import { Box, Button, Card, CardContent, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Card sx={{ width: 420 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            School ERP
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Enterprise School Management System
          </Typography>

          <Button variant="contained" fullWidth size="large">
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
