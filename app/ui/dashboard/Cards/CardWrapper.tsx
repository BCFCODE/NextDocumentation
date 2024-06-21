import { fetchCardData } from '@/app/lib/data';
import DashboardCard from './Card';

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
