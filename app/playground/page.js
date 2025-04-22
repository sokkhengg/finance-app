
import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import PageHeader from "@/components/page-header";
import Select from "@/components/select";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Trend from "@/components/trend";

export default function Page() {
  return (
    <main className="space-y-8 mb-44">
        <h1 className="text-4xl mt-8 font-mono">playground
        </h1>
        <div>
            <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div><PageHeader/></div>
        </div>
        <div>
            <h2 className="mb-4 text-lg font-mono">Trend</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="flex space-x-8">
              <Trend type="Income" amount={1000} prevAmount={900}/>
              <Trend type="Expense" amount={12000} prevAmount={900}/>
              <Trend type="Investment" amount={7000} prevAmount={900}/>
              <Trend type="Saving" amount={500} prevAmount={900}/>
            </div>
        </div>
        <div>
            <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="space-y-4">
             <TransactionItem type="Income" description="Salary" amount={2000}/>
             <TransactionItem type="Expense"  category = "Food" description="going out" amount={2000}/>
             <TransactionItem type="Saving" description=" For car payment" amount={2000}/>
             <TransactionItem type="Investment" description="In Microsoft" amount={2000}/>
            </div>
        </div>
        <div>
            <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem + TransactionItem</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="space-y-4">
             <TransactionSummaryItem date="2024-05-01" amount={3500}/>
              <hr className="mb-4 border-gray-200 dark:border-gray-800" />
             <TransactionItem type="Income" description="Salary" amount={2000}/>
             <TransactionItem type="Expense"  category = "Food" description="going out" amount={2000}/>
             <TransactionItem type="Saving" description=" For car payment" amount={2000}/>
             <TransactionItem type="Investment" description="In Microsoft" amount={2000}/>
            </div>
        </div>
        <div>
            <h2 className="mb-4 text-lg font-mono">Form</h2>
            <hr className="mb-4 border-gray-200 dark:border-gray-800" />
            <div className="grid grid-cols-2 gap-4">
              <div>
              <Label className="mb-1">Your name</Label>
              <Input type="text" placeholder="Type something in here..."/>
              </div>
            <div>
            <Label>City</Label>
          <Select>
              <option>Warsaw</option>
              <option>Berlin</option>
              <option>London</option>
              </Select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm"/>
              <Label className="ml-2" htmlFor="terms">Accept terms</Label>
              </div>
            </div>
        </div>
    </main>
  )
}
