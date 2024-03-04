import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoutes from './pages/PrivateRoutes';
import Signup from './pages/Signup';
import { Toaster } from "react-hot-toast";
import Contact from './pages/Contact';

function Main({ children }) {
  return (
    <div>
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main><Home /></Main>} />
          <Route path="/connect" element={<Main><Contact /></Main>} />
          <Route element={<PrivateRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Route>
        </Routes>
        <Toaster position='top-right' />
      </Router>
    </>
  )
}

export default App;