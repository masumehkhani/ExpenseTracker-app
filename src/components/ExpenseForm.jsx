import { useForm } from "react-hook-form";
const ExpenseForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-6 ">
          <label
            for="itemName"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            id="itemName"
            class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-3/4 md:w-4/5 lg:w-2/6 "
            placeholder="name@flowbite.com"
            required
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div class="mb-6 ">
          <label
            for="amount"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            {...register("amount")}
            type="number"
            id="amount"
            class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-3/4 md:w-4/5 lg:w-2/6 "
            required
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <label
          for="countries"
          class="block mb-2   text-sm font-medium text-gray-900 dark:text-white"
        >
          categories
        </label>
        <select
          {...register("category")}
          id="countries"
          class="bg-gray-50 border mb-6  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none sm:w-3/4 md:w-4/5 lg:w-2/6 "
        >
          <option></option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        {errors.category && <p>{errors.category.message}</p>}

        <button class="text-x m-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-3 text-white  rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
