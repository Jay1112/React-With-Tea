import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let str = "";

    if (numbersAllowed) {
      alpha += "0123456789";
    }
    if (specialCharsAllowed) {
      alpha += "~!@#$%^&*()_+";
    }

    const totalLength = alpha.length;

    for (let i = 0; i < length; i++) {
      const charInd = Math.floor(Math.random() * totalLength);
      str = str + alpha[charInd];
    }

    setPassword(str);
  }, [length, numbersAllowed, specialCharsAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, specialCharsAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
   if(window){
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
   }
  },[password]);

  return (
    <div className="w-screen h-screen flex items-start justify-center">
      <div className="text-white max-w-[640px] mt-[50px] w-full md:w-1/2 bg-slate-800 px-4 py-2 rounded-md">
        <h1 className="text-center text-2xl tracking-wider my-2">
          Random Password Generator
        </h1>
        <div className="flex items-stretch justify-center text-slate-800 my-2">
          <input
            className="flex-1 rounded-tl-md rounded-bl-md p-2 outline-none border-none"
            type="text"
            defaultValue={password}
            readOnly
            ref={passwordRef}
            placeholder="password..."
          ></input>
          <button
            className="text-white px-4 bg-indigo-600 rounded-tr-md rounded-br-md"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            className="flex-1"
            type="range"
            defaultValue={length}
            onChange={(e) => setLength(e.target.value)}
            min="6"
            max="20"
          />
          <p className="mx-4">Length: {length}</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <input
              name="numbers_allowed"
              type="checkbox"
              value={numbersAllowed}
              onChange={(e) => setNumbersAllowed((prev) => !prev)}
            />
            <label htmlFor="numbers_allowed" className="mx-2">
              Numbers
            </label>
          </div>
          <div className="flex-1">
            <input
              name="special_char_allowed"
              type="checkbox"
              value={specialCharsAllowed}
              onChange={(e) => setSpecialCharsAllowed((prev) => !prev)}
            />
            <label htmlFor="special_char_allowed" className="mx-2">
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
