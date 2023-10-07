import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import MainScreen from "../Screens/mainScreen";





export default function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="Signup" element={<Signup/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/" element={<MainScreen/>} />
            
          
        </Routes>
    </Router>

    </>
  

  )
}

