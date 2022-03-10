import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import KpiVsTime from './graphs/kpi/KpiVsTime';
import { ReadData } from '../util/ReadData';
import { Copyright } from './Copyright';
import { AppBar } from './AppBar';
import SideBar from './Sidebar';

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [kpis,setKpis] = React.useState([[]]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getKpiData = (kpis:any[]) => {
    setKpis(kpis);
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {AppBar(open, toggleDrawer)}
        {SideBar(open, toggleDrawer)}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />

          <Grid item xs={6} md={4} lg={9}>
            <ReadData getKpiData={getKpiData}/>
          </Grid>

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={6} md={4} lg={9}>
               <KpiVsTime yData={kpis[0]} title = {"On time delivery rate"} />
              </Grid>
              <Grid item xs={6} md={4} lg={9}>
               <KpiVsTime yData={kpis[1]} title = {"Cut-Ship Ratio"} />
              </Grid>
              <Grid item xs={6} md={4} lg={9}>
               <KpiVsTime yData={kpis[2]} title = {"Order-Ship Ratio"} />
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}