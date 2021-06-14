import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from "./components/Expenses/Expenses";

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
    return(
        <div className="App">
            <Expenses  items={expenses}></Expenses>
        </div>
    )

}

export default App;
