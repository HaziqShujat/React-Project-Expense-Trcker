import React , {useState}from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

 const [isEditing,setIsEiditing] = useState(false);

const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEiditing(false);
}; 

const startEditingHandeler = () => {
    setIsEiditing(true);
};
const stopEditingHandler = () =>{
    setIsEiditing(false);
}


return <div className="new-expense ">
   {!isEditing && <button onClick={startEditingHandeler}>Add  New Expense</button>}
     {isEditing && <ExpenseForm onsaveexpensedata={saveExpenseDataHandler} oncancel ={stopEditingHandler} />}
</div>
}


export default NewExpense;