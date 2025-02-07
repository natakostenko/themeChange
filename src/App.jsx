import { useSelector } from "react-redux"
import Counter from "./components/Counter";
import Users from "./components/Users";


const App = () => {
  const { data } = useSelector(state => state.users);

  return (
    <div className="container">
      <h1>REDUX TOOLKIT</h1>

      <p>users count: {data.length}</p>
      
        <Counter />

        <Users />

    </div>
  )
}

export default App

