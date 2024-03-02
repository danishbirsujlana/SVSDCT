import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <div>
        <div className="fixed w-full top-0 z-10">
          <Navbar />
        </div>
        <Home />
      </div>
    </>
  )
}

export default App;