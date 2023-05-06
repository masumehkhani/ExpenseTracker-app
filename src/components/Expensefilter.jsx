import React from "react";
const Expensefilter = ({ onSelectCategory }) => {
  return (
    <div className="m-3 lg:w-2/5">
      <label
        htmlFor="categories"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white sm:inline-block sm:w-1/5 md:w-1/6 lg:w-1/8"
      >
        All categories
      </label>
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        id="categories"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-3/4 md:w-4/5 lg:w-5/6 sm:text-xs"
      >
        <option></option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Expensefilter;
