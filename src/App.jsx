import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from '../src/pages/HomePage'
import AnimePage from "./pages/AnimePage"

function App() {
  console.log("env : ",process.env.BASE_URL);
  return (
    <>
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/anime/:id' element={<AnimePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
