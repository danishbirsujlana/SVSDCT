import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from './pages/PrivateRoute';
import Signup from './pages/Signup';
import { Toaster } from "react-hot-toast";

function Main() {
  return (
    <div>
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>
      <Home />
    </div>
  )
}

function App() {
  const isAuthenticated = true;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          {/* <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          /> */}
        </Routes>
        <Toaster position='top-right' />
      </Router>
    </>
  )
}

export default App;