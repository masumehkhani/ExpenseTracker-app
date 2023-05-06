
import { useState } from "react";
import Expensefilter from "./components/Expensefilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
function App() {
  const [expenses, setExpenses] = useState([
    { description: "milk", id: 1, amount: 10, category: "Groceries" },
    { description: "sugur", id: 2, amount: 20, category: "Utilities" },
    { description: "car", id: 3, amount: 1000, category: "Entertainment" },
    { description: "Painting", id: 4, amount: 10, category: "Groceries" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category == selectedCategory)
    : expenses;
  return (
    <div className="py-10 flex flex-col lg:max-w-screen-lg mx-auto ">
      <ExpenseForm
        onSubmit={(expense) => {
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
          console.log(expenses);
        }}
      />
      <Expensefilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
