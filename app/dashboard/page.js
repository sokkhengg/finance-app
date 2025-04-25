import { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallBack from "@/components/transaction-list-fallback";
import Trend from "./components/trend";
import TrendFallBack from "./components/trend-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import {sizes, variants} from "@/lib/variants"
import { types } from "@/lib/consts";
import { ErrorBoundary } from "react-error-boundary";
import Range from "./components/range";


export default async function Page() {
  
  return (
    <>
    <section className="mb-8 flex justify-between items-center">
      <h1 className="text-4xl font-semibold">Summary</h1>
      <aside>
        <Range/>
      </aside>
    </section>
    <section className="mb-8 gird grid-cols-2 lg:grid-cols-4">
      {types.map(type => <ErrorBoundary key={type} fallback={<div className="text-red-500">Cannot fetch {type} trend data</div>}>
        <Suspense fallback={<TrendFallBack/>}>
          <Trend type={type}/>
        </Suspense>
      </ErrorBoundary>)}
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
