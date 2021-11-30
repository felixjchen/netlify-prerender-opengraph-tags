import React from "react";
import logo from "./logo.svg";
import pinapple from "./pinapple.jpg";
import blanket from "./blanket.jpg";
import "./App.css";
import { useParams } from "react-router";

import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";

const Photo = () => {
  const { name } = useParams();
  if (name === undefined) return <> </>;

  const image = { pinapple, blanket }[name];

  return (
    <>
      <img src={image} className="App-logo" alt="logo" />{" "}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/photo/pinapple">PINAPPLE</Link>
            <Link to="/photo/blanket">BLANKET</Link>
          </nav>
          <Outlet />
          <Routes>
            <Route
              path="/"
              element={<img src={logo} className="App-logo" alt="logo" />}
            />
            <Route path="/photo/:name" element={<Photo />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
