import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-items";

const groupAndSumTransactionsByDate = (transactions) => {
    const grouped = {}
    for (const transaction of transactions) {
        const date = transaction.created_at.split('T')[0]
        if(!grouped[date]) {
            grouped[date] = {transaction: [], amount: 0}
        }
        grouped[date].transaction.push(transaction)
        const amount = transaction.type === 'Expense' ? -transaction.amount : transaction.amount
        grouped[date].amount += amount
    }
    return grouped
}

export default async function TransactionList() {
    const response = await fetch('http://localhost:3100/transactions')
    const transactions = await response.json()
    const grouped = groupAndSumTransactionsByDate(transactions)
    
  return (
    Object.entries(grouped)
        .map(([date, {transactions, amount}]) => 
         <div key={date}>
            <TransactionSummaryItem date={date} amount={amount}/>
            <hr className="my-4 bg-gray-200 dark:bg-gray-800"/>
            <section className="space-y-4">
                {transactions.map(transaction => 
                <div key={transaction.id}>
                    <TransactionItem {...transaction}/>
                </div>)}
            </section>
        </div>
        )
    )
}
