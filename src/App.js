import ExpenceSS from './components/Expenses/expSS.js';
import './App.css';
import React , {useState}  from 'react';
import NewExpense from './components/NewExpense/NewExpense.js';


const Dummyexpenses =[
  {
    id :'e1',
    title:'Tolitpaper',
    amount :232,
    date :new Date(2022,2, 24)
  },
  {
    id :'e2',
    title:'New TV',
     amount :283,
      date :new Date(2021,2, 24)
    },
  {
    id :'e3',
    title:'Car',
  amount :500,
  date :new Date(2021,2, 24)
},

]


function App() {



  const[expenses, setExpenses] =  useState(Dummyexpenses);


const addExpenseHndler = expense =>{
  setExpenses(prevExpenses => {
    return[expense,...prevExpenses];
  } );

};

// const [btn, setBtn] = useState(0);
// const [btn, setBtn] = useState(0)

// return  React.createElement (
//  'div',{},
//  React.createElement('h2',{} ,"lets get statted"),
//  React.createElement(ExpenceSS,{items: expenses})
// );
  return (
    <div>
       <NewExpense  onAddExpense = {addExpenseHndler} /> 
    <ExpenceSS items = {expenses}  />
    {/* <button onClick={()=> setBtn(btn+1)}>PLUS</button>
    <p>{btn}</p> */}
{/*     
<button onClick={ () => {setBtn(btn +1)}} > plus </button>
<p> {btn} </p> */}
    



      
    </div>
  );

}

export default App;
