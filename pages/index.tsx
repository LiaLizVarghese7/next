import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Expenses from '../components/Expenses/Expenses';
import NewExpense from '../components/NewExpense/NewExpense';
import axios from 'axios';
import React from 'react';
import { builtinModules } from 'module';

const Home: NextPage = () => {
  // const expenses : any= [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  //   {
  //     id: "e5",
  //     title: "Blanket",
  //     amount: 100,
  //     date: new Date(2021, 3, 22),
  //   },
  //   {
  //     id: "e6",
  //     title: "Plastic chair",
  //     amount: 10,
  //     date: new Date(2021, 12, 12),
  //   },
  //   {
  //     id: "e7",
  //     title: "Keyboard",
  //     amount: 380,
  //     date: new Date(2021, 1, 17),
  //   },
  //   {
  //     id: "e8",
  //     title: "Perfume",
  //     amount: 99,
  //     date: new Date(2021, 12, 5),
  //   },
  // ];
  const url ="http://localhost:9000/products";
  const [expenses, setExpenses] = React.useState(null);
  // const [expensesData, setExpensesData] = React.useState(null);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

  const addExpenseHandler = (expense: any) =>{
    console.log("in App.js");
    console.log(expense);
     axios.post(url, {
        title: expense.title,
        price: expense.amount,
        date: expense.date
      },config)
      .then((response) => {
        setExpenses(response.data);
      });
  };
  
  React.useEffect(() => {
    
    axios.get(url,config).then((response) => {
      setExpenses(response.data);
      console.log(expenses);
    });
    
  }, []);

  if (!expenses) return null;
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default Home