import React, { useId } from "react";

function InputBox({
  label, // from/to
  amount, // entered by user
  onAmountChange, // state setter
  onCurrencyChange, // currency change handler
  currencyOptions = [], // available currencies
  selectCurrency = "cad", // default currency
  className = "", // custom tailwind classes
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white shadow-md p-4 rounded-xl text-sm flex items-center gap-4 transition-all duration-300 hover:shadow-lg ${className}`}>
      {/* Left Section - Input */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-500 mb-2 inline-block font-medium">
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent py-2 text-lg text-gray-900 font-semibold outline-none border-b border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>

      {/* Right Section - Currency Selector */}
      <div className="w-1/2 flex flex-col text-right">
        <p className="text-gray-500 mb-1 font-medium">Currency</p>
        <select
          className="w-full rounded-lg px-3 py-2 bg-gray-100 text-gray-900 font-semibold cursor-pointer outline-none border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;