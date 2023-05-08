
import Card from '../UI/Card.js';
import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';
function ExpenceSS (props) {
// console.log(props)

const [FilteredYear, setFilteredYear] = useState('2020');

const filterchangehandler = selectedyear =>{
    setFilteredYear(selectedyear);

};


const filteredExpenses = props.items.filter( expense =>{
    return expense.date.getFullYear().toString() === FilteredYear;
});


    return (
        <div> 
           
        <Card className='expenses'>
        <ExpensesFilter   selected ={FilteredYear}  onChangeFilter ={filterchangehandler} />
        <ExpensesChart  expenses ={filteredExpenses}  />


        <ExpensesList items ={filteredExpenses} />
       

{/* 
           <ExpenseItems 
      title ={props.items[0].title}
      amount = {props.items[0].amount}
      date = {props.items[0].date}

      />
       <ExpenseItems
        title ={props.items[1].title}
        amount = {props.items[1].amount}
        date = {props.items[1].date}
       />
       <ExpenseItems
        title ={props.items[2].title}
        amount = {props.items[2].amount}
        date = {props.items[2].date}
       /> */}
      
        </Card>
        </div>
    );
};


export default ExpenceSS;