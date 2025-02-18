import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import './App.css'

function App() {
  const [amount, setAmount] = useState("0");
  const [from, setFrom] = useState("cad");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("0");

  const currencyInfo = useCurrencyInfo(from);
//   console.log(currencyInfo);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600590711251-c439ffcc61bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1cnJlbmN5JTIwZXhjaGFuZ2V8ZW58MHx8MHx8fDA%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-200 rounded-xl p-5 shadow-xl backdrop-blur-lg bg-white/30 transition-all duration-300">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* FROM InputBox */}
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full flex justify-center my-4">
              <button
                type="button"
                className="p-3 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700"
                onClick={swap}
              >
                Swap
              </button>
            </div>


            {/* TO InputBox */}
            <div className="w-full mt-4 mb-5">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:shadow-lg hover:from-blue-700 hover:to-blue-600"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
