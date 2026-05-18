import { Card, CardContent, Stack, Typography } from "@mui/material";

const StatsCard = ({ label, value }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: 1,
        borderColor: "divider",
      }}
    >
      <CardContent
        sx={{
          p: 3,

          "&:last-child": {
            pb: 3,
          },
        }}
      >
        <Stack spacing={1}>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>

          <Typography variant="statValue">{value}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
