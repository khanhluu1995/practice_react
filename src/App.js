import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const App = () => {
    const expenses = [
        {
            title: 'Car Insurance',
            date: new Date(2020, 7,22),
            price: 99
        },
        {
            title: 'Game Card',
            date: new Date(2021, 1,11),
            price: 23
        },{
            title: 'Foody',
            date: new Date(2021, 2,23),
            price: 14
        }
    ]

    const [newExpenses, setNewExpenses] = useState(expenses)


    const onNewExpenseData = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData
        }

        expenses.push(expenseData)
        setNewExpenses(expenses)

        console.log('current array', expenses)
    }
    return(
        <div className="App">
            <NewExpense onNewExpenseData={onNewExpenseData}/>
            <Expenses  items={newExpenses}/>
        </div>
    )

}

export default App;
