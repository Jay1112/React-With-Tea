import { useEffect } from "react";

function InputBox({
  currencyLabel = "From",
  amount,
  onAmountChange,
  currencyList = [],
  currencyType = "",
  onCurrencyTypeChange,
  isAmountFieldDisabled = false,
}) {

  return (
    <div className="bg-white text-slate-800 rounded-sm p-4 my-4">
      <div className="flex items-center justify-center">
        <p className="flex-1 text-sm text-gray-500">{currencyLabel}</p>
        <p className="text-sm text-gray-500">{"Currency Type"}</p>
      </div>
      <div className="flex items-stretch justify-center my-2">
        <input
          onChange={(e) => {
            if (onAmountChange) {
              onAmountChange(Number(e.target.value));
            }
          }}
          value={amount}
          disabled={isAmountFieldDisabled}
          type="number"
          placeholder="Enter Amount..."
          className="flex-1 p-2 outline-none border-b-2"
        />
        {currencyList && currencyList?.length > 0 && (
          <select
            onChange={(e)=>{
                if(onCurrencyTypeChange){
                    onCurrencyTypeChange(e.target.value);
                }
            }}
            className="p-2 px-4 ml-2 text-gray-900 text-sm rounded-sm outline-none bg-gray-200"
            value={currencyType}
          >
            {currencyList.map((item) => {
              return (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </div>
  );
}

export default InputBox;
