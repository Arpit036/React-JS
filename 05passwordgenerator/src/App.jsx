 import { useState, useCallback, useEffect, useRef } from 'react'

//  Ye React ke built-in hooks import ho rahe hain:

// useState: state manage karne ke liye

// useCallback: function ko memoize karne ke liye (performance ke liye)

// useEffect: side effects ke liye (yahan pe password auto-generate hoga)

// useRef: kisi DOM element ka reference leke usse control karne ke liye



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  // Isse hum password <input> ka reference le rahe hain — taaki
  //  copy button click pe input ko select karke clipboard me copy kiya
  //  ja sake.
  const passwordRef = useRef(null)

  // Password Generator Function

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
//       🔸 Kaise kaam karta hai?

// str me initially uppercase + lowercase letters hote hain.

// Agar numberAllowed ya charAllowed true hai, to unko bhi str me add kar dete hain.

// for loop se ek ek random character pick karke pass me jodte jaate hain.

// Finally, setPassword(pass) se password update kar dete hain.
      
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  // 📋 ##Copy to Clipboard

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

//   🖱️ Jab user “Copy” button dabata hai:

// passwordRef.current se input field ko select karte hain.

// writeText(password) se clipboard me copy ho jata hai.



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
//     Ye tab chalta hai jab length, numberAllowed, ya charAllowed change ho.
// Matlab: jaise hi slider ya checkbox change karega, password auto-generate ho jayega. 🔄


// 🧱 JSX UI 

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App


/* NOTE : 
COMPLETE EXPLAIN FROM AI : https://chatgpt.com/s/t_68537c55dc5481918f9f6ef8c5cc08e9
*/