import React from 'react';
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
      <header>
        <h1>Welcome to Petshop</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/home" className="mr">
              Home
            </Link>
          </li>
          <li>
            <Link to="/category/kucing" className="mr">
              Kucing
            </Link>
          </li>
          <li>
            <Link to="/category/anjing" className="mr">
              Anjing
            </Link>
          </li>
          <li>
            <Link to="/category/burung" className="mr">
              Burung
            </Link>
          </li>
          <li>
            <Link to="/category/hamster" className="mr">
              Hamster
            </Link>
          </li>
          <li>
            <a href="/about" className="mr">About</a>
          </li>
          <li>
            <Link to="/contact" className="mr">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Petshop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
