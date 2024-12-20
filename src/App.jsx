import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import "./App.css";

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className="main">
      {pathname !== "/" && (
        <Link className="home-link" to="/">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );

}



export default App;



