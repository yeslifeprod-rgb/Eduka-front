import React from "react";
import { useState } from "react";

interface CounterInputProps {
  value: number;
  onCounterChange: (value: number) => void;
}

function CounterInput({ value, onCounterChange }: CounterInputProps) {
  const [counter, setCounter] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 20) {
      setCounter(newValue);
      onCounterChange(newValue);
    }
  };

  return (
    <div className="relative w-32">
      <button
        type="button"
        onClick={() => {
          setCounter(counter - 1 >= 0 ? counter - 1 : 0);
          onCounterChange(counter - 1 >= 0 ? counter - 1 : 0);
        }}
        className="absolute left-0 bg-custom-blue dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:opacity-90 border border-custom-blue rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
      <input
        type="text"
        value={counter}
        onChange={handleInputChange}
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border  border-custom-blue rounded-lg h-11 text-center text-gray-900 text-sm pl-8 pr-8 focus:ring-blue-500 focus:opacity-90 block w-full py-2.5"
        placeholder=""
        required
      />
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1 <= 20 ? counter + 1 : 20);
          onCounterChange(counter + 1 <= 20 ? counter + 1 : 20);
        }}
        className="absolute right-0 bottom-0 bg-custom-blue dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:opacity-90 border border-custom-blue rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}

export default CounterInput;
