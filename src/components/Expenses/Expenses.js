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
            <Card className='expenses'>
                <ExpenseItem title={props.items[0].title} date={props.items[0].date} price={props.items[0].price}/>
            </Card>
        </div>

    );
}

export default Expenses
