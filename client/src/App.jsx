import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (
    <>
      <div>
        <div className="fixed w-full top-0 z-10">
          <Navbar />
        </div>
        <Home />

        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </>
  )
}

export default App;