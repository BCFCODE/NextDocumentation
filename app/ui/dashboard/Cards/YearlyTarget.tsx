'use client';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';
// import { Gauge, gaugeClasses } from '@mui/x-charts';
import DashboardCard from './Card';

const YearlyProblemSolvingTarget = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryLight = '#ecf2ff';
  const successLight = theme.palette.success.light;

  return (
    <DashboardCard title="Yearly Problem-Solving Target">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={6} sm={6}>
          <Typography variant="h3" fontWeight="700">
            $36,358
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successLight, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              +9%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              last year
            </Typography>
          </Stack>
          {/* <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: primary,
                  svg: { display: "none" },
                }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2022
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: primaryLight,
                  svg: { display: "none" },
                }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2023
              </Typography>
            </Stack>
          </Stack> */}
        </Grid>
        {/* column */}
        {/* <Gauge
            valueMax={365}
            value={30}
            startAngle={-110}
            endAngle={110}
            innerRadius="80%"
            outerRadius="100%"
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 15,
                transform: "translate(0px, 0px)",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: theme.palette.warning.main,
              },
            }}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
            // ...
          /> */}
      </Grid>
    </DashboardCard>
  );
};

export default YearlyProblemSolvingTarget;
