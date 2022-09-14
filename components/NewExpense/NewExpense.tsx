// import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ( props: any ) => {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="bg-violet-400 p-4 rounded-xl my-8 mx-auto text-center shadow-sm">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
