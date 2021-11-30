import React from "react";
import logo from "./logo.svg";
import pinapple from "./pinapple.jpg";
import blanket from "./blanket.jpg";
import "./App.css";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";

const Photo = () => {
  const { name } = useParams();
  if (name === undefined) return <> </>;

  const image = { pinapple, blanket }[name];
  const url = {
    pinapple:
      "https://i5.walmartimages.ca/images/Enlarge/198/506/6000200198506.jpg",
    blanket: "https://m.media-amazon.com/images/I/71THWcYwDML._AC_SX466_.jpg",
  }[name];

  return (
    <>
      <img src={image} className="App-logo" alt="logo" />{" "}
      <Helmet>
        <title>{name}</title>
        <meta property="og:title" content={name} />
        <meta property="og:image" content={url} />
        <meta property="og:url" content={url + name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={`./${name}.jpg`} />
      </Helmet>
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
