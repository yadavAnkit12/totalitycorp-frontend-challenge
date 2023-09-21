import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
const App = () => {

  return <div>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/showCart" element={<Cart />}></Route>
      </Routes>


    </Router>
  </div>
}

export default App