import React ,{useState} from "react";
import './ExpenseForm.css';


const ExpenseForm =(props) => {


     const [enteredtitle, setEnteredTitle] = useState('');
     const [enteredamount , setEnteredAmount] = useState ('');
     const [entereddate, setEnteredDate] = useState('');

//   const [userinput, setUserInput] = useState({
//      enteredTitle : '',
//      enteredAmount : '',
//      enteredDate : ''
//  });

    const titlechangehandler = (event) =>{
         setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userinput,
        //     enteredTitle :event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return{ ...prevState,enteredTitle:event.target.value};
        // });
    };
    const amountchangehandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userinput,
        //     enteredAmount :event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return{ ...prevState,enteredAmount:event.target.value};
        // });
    };
    const datechangehandler = (event) =>{
         setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userinput,
        //     enteredDate :event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return{ ...prevState, enteredDate:event.target.value};
        // });
    };

    const SubmitHandler = (event) => {
        event.preventDefault();
        
const expenseData = {
   title:enteredtitle,
    amount:enteredamount,
    date: new Date(entereddate)
};

props.onsaveexpensedata(expenseData);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');

    };

    return <form  onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" 
                 value={enteredtitle} 
                 onChange={titlechangehandler }
                  />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"
                 value={enteredamount} 
                 min ="0.01" step ="0.01"
                   onChange={ amountchangehandler}
                    />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" 
                 value={entereddate} 
                min ="2019-01-01" max ="2022-12-31"  
                 onChange={datechangehandler}  />
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="button" onClick={props.oncancel}>cancled</button>
            <button type="submit">Add Expense</button>

        </div>
    </form>

}



export  default ExpenseForm;