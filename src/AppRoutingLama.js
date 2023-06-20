//import logo from './logo.svg';
import './App.css';
//import Komponen from "./Materi/Komponen";
//import Styling from "./Materi/Styling";
//import Reusable from "./Materi/Reusable";
//import Rendering from "./Materi/Rendering";
//import Form from "./Materi/Form";
//import News from "./Materi/News";
//import Routing from "./Materi/Routing";
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <h1>Belajar React Routing</h1>
      <nav>
        <Link to="/home" className="mr">
          Home
        </Link>
        <Link to="/category/kucing" className="mr">
          Kucing
        </Link>
        <Link to="/category/anjing" className="mr">
          Anjing
        </Link>
        <Link to="/category/burung" className="mr">
          Burung
        </Link>
        <Link to="/category/hamster" className="mr">
          Hamster
        </Link>
        <Link to="/about" className="mr">
          About
        </Link>
        <Link to="/contact" className="mr">
          Contact
        </Link> 
      </nav>

      <Outlet />
    </div>

  );
}

export default App;
