import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2021')

    const updateYear = (newYearData) =>{
        setYearFilter(newYearData)
    }

    const filterItems = props.items.filter(element => {
        return element.date.getFullYear().toString() === yearFilter
    })

    let expenseItemContent = <p style={{color: 'white'}}>No item found</p>

    if (filterItems.length > 0) {
        expenseItemContent  = filterItems.map((expense, key) => <ExpenseItem key={key}
                                                                             title={expense.title}
                                                                             price={expense.price}
                                                                             date={expense.date}/>)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter currentYear={yearFilter} onYearFilter={updateYear}/>
            <ExpensesChart expenses={filterItems}/>
            {expenseItemContent}
        </Card>

    );
}

export default Expenses
