import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
//import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props: any) => {
  
  // const [filteredYear, setFilteredYear] = useState("2020");

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  //   console.log(selectedYear);
  // };
  const myItems=props.items;
  
  return (
    <div>
      <Card className="exp-4 bg-gray-800 my-8 mx-auto rounded-xl shadow-smpenses">

       
      {
        myItems.map((product: any) =>  {
          return(
            <ExpenseItem 
            key={product.id}
            id={product.id}
            title={product.title}
            amount={product.price}
            date={product.date}
            />
          )
        })
      }
       
      
      </Card>
    </div>
  );
};

export default Expenses;
