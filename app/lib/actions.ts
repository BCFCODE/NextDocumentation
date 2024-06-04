'use server';

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customersId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log(rawFormData);
}
