export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>&copy; {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
