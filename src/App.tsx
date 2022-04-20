import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { InitialState } from "./types";
import HomePage from './components/home/HomePage';
import Favorites from './components/Favorites/Favorites';
import Details from './components/Details/Details';


function App() {
  const colors = useSelector((state: InitialState) => state.color);
  return (
    <div className={colors}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
