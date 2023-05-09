import logo from './logo.svg';
import Settings from './pages/settings';
import Progress from './pages/progress';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Settings/>} />
      <Route path="/progress" element={<Progress/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
