import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
