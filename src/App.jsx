import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Starred from "./pages/Starred";
import AddNoteModal from "./components/AddNoteModal";
import SearchModal from "./components/SearchModal";
import Overlay from "./components/Overlay";
import { ModalState } from "./context/context";

function App() {
  const { modalShow, searchModalShow } = ModalState();

  return (
    <div className='App relative'>
      <AddNoteModal show={modalShow} />
      <SearchModal show={searchModalShow} />
      <Overlay show={modalShow || searchModalShow} />
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/starred' element={<Starred />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
