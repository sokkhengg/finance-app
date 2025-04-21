import Link from "next/link";


export default function PageHeader({className}) {
  return (
    <header className={`flex justify-between items-center ${className}`}>
        <Link href="dashboard" className="text-xl hover:underline underline-offset-8 decoration-2">Finance App </Link>

    </header>
  )
}
