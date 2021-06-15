import  './ExpenseItem.css'

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    const updateText = () =>{
        setTitle('newVal')
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>
            <button onClick={updateText}>Update</button>
        </Card>
    )
}

export default ExpenseItem
