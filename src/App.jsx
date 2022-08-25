import { BrowserRouter } from "react-router-dom"
import { List } from "./components/List"
import { SideBar } from "./components/Siderbar"
import Router from "./routes"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
