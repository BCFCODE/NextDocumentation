import { fetchCardData } from '@/app/lib/data';
import BasicCard from './Card';

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

      <BasicCard title="Collected" value={totalPaidInvoices} type="collected" />
      <BasicCard title="Pending" value={totalPendingInvoices} type="pending" />
      <BasicCard
        title="Total Invoices"
        value={numberOfInvoices}
        type="invoices"
      />
      <BasicCard
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
