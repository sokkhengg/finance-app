'use client'
import Button from "@/components/button"
import Seperator from "@/components/seperator"
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from "@/components/transaction-summary-item"
import { fetchTransactions } from "@/lib/actions"
import { groupAndSumTransactionsByDate } from "@/lib/utils"
import { Loader } from "lucide-react"
import { useState } from "react"

export default function TransactionList({range, initialTransactions}) {
  const [loading, setLoading] = useState(false)
  const [buttonHidden, setButtonHidden] = useState(initialTransactions.length === 0)
  const [transactions, setTransactions] = useState(initialTransactions)
  const grouped = groupAndSumTransactionsByDate(transactions)
  const handleRemoved = (id) => () => {
    setTransactions(prev => [...prev].filter(t => t.id !== id))
  }

  const handleClick = async () => {
    setLoading(true)
    try {
      const nextTransactions = await fetchTransactions(range, transactions.length, 10)
      setButtonHidden(nextTransactions.length === 0)
      setTransactions(prevTransactions => [
      ...prevTransactions,
      ...nextTransactions
    ])
    } finally {
      setLoading(false)
    }
    
  }
  
  return (
    <div className="space-y-8">
      {Object.entries(grouped)
        .map(([date, { transactions, amount }]) =>
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Seperator/>
            <section className="space-y-4">
              {transactions.map(transaction => <div key={transaction.id}>
                <TransactionItem {...transaction} onRemoved={handleRemoved(transaction.id)} />
              </div>)}
            </section>
          </div>
        )}
        {transactions.length === 0 && <div>No transaction found</div>}
        {!buttonHidden && 
          <div className="flex justify-center">
            <Button variant="ghost" onClick={handleClick} disabled={loading}>
              <div className="flex items-center space-x-1">
                {loading && <Loader className="animate-spin"/>}
              <div>
              Load More
              </div>
            </div>
            
          </Button>
        </div>
        }
        
    </div>
  )
}