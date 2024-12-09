import {Routes,Route} from 'react-router-dom'
import Refex from "./Refex.jsx"
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<HOME/>}></Route>
        <Route path="/Refex" element={<Refex/>}></Route>
      </Routes>
    </div>
  )
}
export default App;