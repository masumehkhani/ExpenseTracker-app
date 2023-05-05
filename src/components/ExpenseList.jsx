import React from "react";
import { useState } from "react";
const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-3 lg:-mx-4">
          <div class="inline-block w-2/5 py-2 sm:px-3 min-w-min lg:px-4">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th
                      scope="col"
                      class="p-3
                    "
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="p-3
                    "
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="p-3
                    "
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="p-3
                    "
                    ></th>
                  </tr>
                </thead>

                <tbody className="m-2">
                  {expenses.map((item) => {
                    return (
                      <>
                        <tr
                          key={item.id}
                          className="border-b dark:border-neutral-500"
                        >
                          <td class="whitespace-nowrap px-6 py-4">
                            {item.name}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {item.price}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {item.category}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button
                              onClick={() => onDelete(item.id)}
                              class="text-x bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-3 text-white  rounded"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td class="whitespace-nowrap px-6 py-4">Total</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      $
                      {expenses.reduce(
                        (acc, expense) => acc + expense.price,
                        0
                      )}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4"></td>
                    <td class="whitespace-nowrap px-6 py-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
