import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props) {

    return (
        <Card className='expenses'>
            <ExpenseItem title={props.items[0].title} date={props.items[0].date} price={props.items[0].price}></ExpenseItem>
        </Card>
    );
}

export default Expenses