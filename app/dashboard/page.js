import { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallBack from "@/components/transaction-list-fallback";
import Trend from "./components/trend";
import TrendFallBack from "./components/trend-fallback";


export default function Page() {
  return (
    <>
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
    <Suspense fallback={<TransactionListFallBack/>}>
      <TransactionList/>

    </Suspense>
    </>
  )
}
