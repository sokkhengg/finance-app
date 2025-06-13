import Link from "next/link";

export default function Footer() {
   return (<footer className="border-t py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} FinanceApp. All rights reserved.
      <div className="mt-2 flex justify-center gap-4">
        <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
      </div>
    </div>
  </footer>)
}
