import { Routes, Route } from "react-router-dom"
import Users from "./components/Users"
import CreateUsers from "./components/CreateUsers"
import UpdateUsers from "./components/UpdateUsers"

const App = () => {

  

  return (
   <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/create" element={<CreateUsers/>}/>
      <Route path="/update/:id" element={<UpdateUsers/>}/>
   </Routes>
  )
}

export default App