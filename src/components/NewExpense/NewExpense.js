import './NewExpense.css'
import './ExpenseForm.css'
import {useState} from "react";
const NewExpense = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')
    // const [enteredPrice, setEnteredPrice] = useState('')

    const [userInputs, setUserInputs] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredPrice:''
    })

    const [showNewExpense, setShowNewExpense] = useState(false)



    const titleChangeHandler = (event) => {
        setUserInputs((prevState)=>{
            return{
                ...prevState,
                enteredTitle: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInputs((prevState) => {
            return{
                ...prevState,
                enteredDate: event.target.value
            }
        })
    }

    const priceChangeHandler = (event) => {
        setUserInputs((prevState)=>{
            return{
                ...prevState,
                enteredPrice: event.target.value
            }
        })
    }

    const toggleNewExpense = (event) => {
        event.preventDefault()
        setShowNewExpense(!showNewExpense)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInputs.enteredTitle,
            price: +userInputs.enteredPrice,
            date: new Date(userInputs.enteredDate)
        }

        setUserInputs(()=>{
            return{
                enteredTitle: '',
                enteredDate: '',
                enteredPrice:''
            }
        })
        props.onNewExpenseData(expenseData)
        setShowNewExpense(false)
    }

    if (showNewExpense === false) {
        return (
            <div className='new-expense'>
                <button onClick={toggleNewExpense}>Add New Expense</button>
            </div>
        )
    }
    return(
        <div className='new-expense'>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor="">Title</label>
                        <input type="text"
                               onChange={titleChangeHandler}
                               value={userInputs.enteredTitle}/>
                    </div>

                    <div className='new-expense__control'>
                        <label htmlFor="">Amount</label>
                        <input type='number' min="0.01" step='0.01' value={userInputs.enteredPrice} onChange={priceChangeHandler}/>
                    </div>

                    <div className='new-expense__control'>
                        <label htmlFor="">Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={userInputs.enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button onClick={toggleNewExpense}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense
