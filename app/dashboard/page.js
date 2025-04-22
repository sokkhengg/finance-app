import { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import TransactionListFallBack from "@/components/transaction-list-fallback";


export default function Page() {
  return (
    <>
    <Suspense fallback={<TransactionListFallBack/>}>
      <TransactionList/>

    </Suspense>
    </>
  )
}
