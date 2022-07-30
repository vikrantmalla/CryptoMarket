import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import CoinDetails from "./pages/CoinDetails";
import CoinWatchList from "./pages/CoinWatchList";
import HomePage from './pages/HomePage'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<CoinWatchList />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <ToastContainer position="bottom-center" autoClose={1000} icon={false} />
    </div>
  )
}

export default App
