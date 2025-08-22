import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Vendor Dashboard',
};

export default function VendorDashboardRedirect() {
  // If your real dashboard lives at /vendor/dashboard, redirect there:
  redirect('/vendor/dashboard');
}
