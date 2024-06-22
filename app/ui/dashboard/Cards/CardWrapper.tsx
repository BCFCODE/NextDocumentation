import { fetchCardData } from '@/app/lib/data';
import DashboardCard from './Card';
import YearlyProblemSolvingTarget from './YearlyTarget';
import Grid from '@mui/material/Grid'; // Grid version 1


export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      {/* <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid> */}
      <YearlyProblemSolvingTarget />
      <DashboardCard
        title="Collected"
        value={totalPaidInvoices}
        type="collected"
      />
      <DashboardCard
        title="Pending"
        value={totalPendingInvoices}
        type="pending"
      />
      <DashboardCard
        title="Total Invoices"
        value={numberOfInvoices}
        type="invoices"
      />
      <DashboardCard
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
