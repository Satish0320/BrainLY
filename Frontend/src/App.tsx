import { Home } from "./pages/home"
import { SignIn } from "./pages/Signin"
import { SignUp } from "./pages/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Signin" element={<SignIn />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
