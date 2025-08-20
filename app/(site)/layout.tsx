// app/(site)/layout.tsx
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  // No Navbar/Footer here – root layout renders those once for the whole app
  return <>{children}</>;
}
