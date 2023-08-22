import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">Catálogo</Link>
        </li>
        <li className="nav-item">
          <Link to="/dados" className="nav-link">Novo</Link>
        </li>
      </ul>
    </nav>
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </div>
  </Router>
);

export default App;


