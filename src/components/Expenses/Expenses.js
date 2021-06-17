import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2021')

    const updateYear = (newYearData) =>{
        setYearFilter(newYearData)
    }
    return (
        <div>
            <ExpensesFilter currentYear={yearFilter} onYearFilter={updateYear}/>
            {props.items.map(expense =>
                <ExpenseItem title={expense.title}
                             price={expense.price}
                             date={expense.date}/>
            )}
        </div>

    );
}

export default Expenses
