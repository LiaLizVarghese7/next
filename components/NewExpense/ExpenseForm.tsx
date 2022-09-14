// import "./ExpenseForm.css";
import { useState } from "react";
// import React from "react";
//import axios from "axios";

const ExpenseForm = ( props: any ) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
 // const [expenseData, setExpenseData] = React.useState(null);
 // const baseURL = "https://localhost:9000/products";
  //Using a single state instead of multiple

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //for updating state that depends on previous state better to use
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event: any) =>{
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    // axios.post(baseURL, {
    //     title: enteredTitle,
    //     price: enteredAmount,
    //     date: new Date(enteredDate)
    //   })
    //   .then((response) => {
    //     setExpenseData(response.data);
    //   });
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit = { submitHandler }>
      <div className="flex flex-wrap gap-4 mb-2 text-center">
        <div className="w-full sm:w-1/3 md:w-1/5" >
          <label className="font-bold mb-2 block">Title</label>
          <input className="p-2 rounded-md border border-solid border-gray-200 w-full max-w-full" type="text"  placeholder="Enter title" value= { enteredTitle } required onChange={titleChangeHandler} />
        </div>
        <div className="w-full sm:w-1/3 md:w-1/5">
          <label className="font-bold mb-2 block" >Amount</label>
          <input className="p-2 rounded-md border border-solid border-gray-200 w-full max-w-full"
            type="number"
            placeholder="eg: 123 (Please enter amount in numbers)"
            required
            min="0.01"
            step="0.01"
            value= { enteredAmount }
            onChange={amountChangeHandler}
          />
        </div>
        <div className="w-full sm:w-1/3 md:w-1/5">
          <label className="font-bold mb-2 block">Date</label>
          <input className="p-2 rounded-md border border-solid border-gray-200 w-full max-w-full"
            type="date"
            required
            min="2015-04-1"
            max="2022-03-31"
            value= { enteredDate }
            onChange={dateChangeHandler}
          />
        </div>
        <div className="w-full sm:w-1/3 md:w-1/5">
        <button className="border-solid rounded-xl border-violet-800 border mr-4 mt-4 py-4 px-8 bg-violet-800 text-white cursor-pointer w-full max-w-full" type="submit">Add Expense</button>
      </div>
      </div>
      
    </form>
  );
};

export default ExpenseForm;
