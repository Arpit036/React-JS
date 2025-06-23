
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React With Chai</h1>
      <Login /> 
      <Profile /> 
    </UserContextProvider>
  )
}

export default App
