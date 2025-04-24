import { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallBack from "@/components/transaction-list-fallback";
import Trend from "./components/trend";
import TrendFallBack from "./components/trend-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import {sizes, variants} from "@/lib/variants"


export default function Page() {
  return (
    <>
    <section className="mb-8">
      <h1 className="text-4xl font-semibold">Summary</h1>
    </section>
    <section className="mb-8 gird grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<TrendFallBack/>}>
        <Trend type="Income"/>
      </Suspense>
      <Suspense fallback={<TrendFallBack/>}>
        <Trend type="Expense"/>
      </Suspense>
      <Suspense fallback={<TrendFallBack/>}>
        <Trend type='Saving'/>
      </Suspense>
      <Suspense fallback={<TrendFallBack/>}>
        <Trend type="Investment"/>
      </Suspense>
    </section>
    <section className="flex justify-between items-center mb-8">
      <h2 className="text-2xl">Trasactions</h2>
      <Link href="dashboard/transaction/add" className={`flex items-center space-x-1 ${variants["outline"]}`}>
      <PlusCircle/>
      <div>Add</div>
      </Link>
    </section>
    <Suspense fallback={<TransactionListFallBack/>}>
      <TransactionList/>

    </Suspense>
    </>
  )
}
