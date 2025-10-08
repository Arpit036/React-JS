import React, {useState} from 'react'

function Counter (){
    const [Like, setCount] = useState(0);
    
    
    
    const increament = () => setCount(Like+1)
    const decrement =  () =>{if(Like > 0){ setCount(Like - 1)
    }}


return (         
<div>
<h2>Like: {Like}</h2>
<button onClick={increament}>Increment</button>
<br /> <br />
<button onClick={decrement}>Decrement</button>
</div>

     )
}

export default Counter