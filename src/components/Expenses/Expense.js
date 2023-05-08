
import './Expense.css';
import ExpenseDate from './Expensedate';
import React  from 'react';
import Card from '../UI/Card';
function ExpenseItems(props){
    
  // const [title,setTitle] =  useState(props.title);

// const expenseDate = new Date(2021,2, 24);
// const expenseTitle = 'CarInsurance';
// const expenseAmount = 283;
//const month = props.date.tolocaleString('en-pk',{month:'long'});
//const day = props.day.toLocaleString('en-US', { day: '2-digit' });
 //const year = props.year.getFullYear();

//  let title = props.title;

//  const clickhandler = ()=>{
// setTitle('updated');
// console.log(title);
//  }


    return(
      <li>
        <Card className='expense-item '>
          <ExpenseDate date = {props.date}/>
            <div className='expense-item__description '>
                <h2> {props.title}</h2>
                <p className='expense-item__price'>{props.amount}</p>
            </div>
           
        </Card></li>
    );
}



export default ExpenseItems;