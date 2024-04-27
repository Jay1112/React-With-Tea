import { useEffect, useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [ currentAmount, setCurrentAmount ] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from,setFrom] = useState("USD");
  const [to,setTo] = useState("INR");

  const {responseData, convertCurrencyAPIcallback} = useCurrencyInfo();

  const currencyList = [
    { id : "inr", title : "INR" },
    { id : "usd", title : "USD" },
    { id : "eur", title : "EUR" }
  ];

  useEffect(()=>{
    convertAmount();
  },[responseData]);

  function convertAmount(){
    if(responseData && responseData.success){
      setConvertedAmount(responseData?.result?.convertedAmount);
    }
  }

  function swapCurrency(){
    let storage = currentAmount;
    setFrom(to);
    setTo(from);
    setCurrentAmount(convertedAmount);
    setConvertedAmount(storage);
  }

  function onConvertButtoClicked(){
    convertCurrencyAPIcallback(from,to,currentAmount);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className='w-[500px] bg-slate-800 text-white rounded-md p-2'>
        <h1 className='p-2 text-center tracking-wide font-semibold text-2xl font-sans'>Currency Convertor</h1>
        <div className='px-4 relative'>
          <InputBox
            amount={currentAmount}
            onAmountChange={(value)=>{ setCurrentAmount(value) }} 
            currencyType={from}
            onCurrencyTypeChange={ (value) => { setFrom(value) } }
            currencyList={currencyList} 
          />
          <InputBox
            currencyLabel='To'
            amount={convertedAmount}
            onAmountChange={(value)=>{ setConvertedAmount(value) }} 
            currencyType={to}
            isAmountFieldDisabled={true}
            onCurrencyTypeChange={ (value) => { setTo(value) } }
            currencyList={currencyList} 
          />
          <button onClick={swapCurrency} className='p-4 bg-indigo-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <svg fill="#fff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.003 512.003" xml:space="preserve" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M440.448,87.831H114.629l52.495-52.495c8.084-8.084,8.084-21.19,0-29.274c-8.083-8.084-21.19-8.084-29.274,0 L20.126,123.788c-8.084,8.084-8.084,21.19,0,29.274L137.85,270.786c4.041,4.042,9.338,6.062,14.636,6.062 c5.298,0,10.596-2.02,14.636-6.064c8.084-8.084,8.084-21.19,0-29.274l-52.495-52.495h325.82c27.896,0,50.592-22.695,50.592-50.592 C491.04,110.528,468.345,87.831,440.448,87.831z"></path> </g> </g> <g> <g> <path d="M491.877,358.942L374.154,241.218c-8.083-8.084-21.19-8.084-29.274,0c-8.084,8.084-8.084,21.19,0,29.274l52.495,52.495 H71.556c-27.896,0-50.592,22.695-50.592,50.592s22.695,50.593,50.592,50.593h325.819l-52.495,52.495 c-8.084,8.084-8.084,21.19,0,29.274c4.042,4.042,9.34,6.064,14.636,6.064c5.296,0,10.596-2.02,14.636-6.064l117.724-117.724 C499.961,380.132,499.961,367.026,491.877,358.942z"></path> </g> </g> </g></svg>
          </button>
        </div>
        <div className='px-4 flex items-center justify-center my-2'>
          <button onClick={onConvertButtoClicked} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded">
            Convert {from} to {to}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
