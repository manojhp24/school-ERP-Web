import { Box, Button, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { logout } from "../../../utils/auth/auth.js";
import PageContainer from "../../../components/PageContainer.jsx";
import PageHeader from "../../../components/PageHeader.jsx";
import StatsCard from "../components/StatsCard.jsx";
import SectionCard from "../components/SectionCard.jsx";
import RecentActivityList from "../components/RecentActivityList.jsx";
import AnnouncementList from "../components/AnnouncementList.jsx";
import WelcomeBanner from "../components/WelcomeBanner.jsx";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back to your school management system."
      />
      <Box>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <WelcomeBanner />

      <Grid container spacing={3}>
        {/* KPI Cards */}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatsCard label="Total Students" value="1,248" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatsCard label="Teachers" value="86" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatsCard label="Attendance" value="92%" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatsCard label="Pending Fees" value="$12,480" />
        </Grid>

        {/* Content Row */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <SectionCard title="Attendance Overview">
            <Typography color="text.secondary">
              Attendance analytics will appear here.
            </Typography>
          </SectionCard>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <SectionCard title="Quick Actions">
            <Stack spacing={1.25} alignItems="flex-start">
              <Button variant="contained" fullWidth>
                Add Student
              </Button>

              <Button variant="outlined" fullWidth>
                Take Attendance
              </Button>

              <Button variant="outlined" fullWidth>
                Create Fee Invoice
              </Button>

              <Button variant="outlined" fullWidth>
                Publish Notice
              </Button>
            </Stack>
          </SectionCard>
        </Grid>

        {/* Bottom Row */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <SectionCard title="Recent Admissions">
            <RecentActivityList />
          </SectionCard>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <SectionCard title="Announcements">
            <AnnouncementList />
          </SectionCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default DashboardPage;
