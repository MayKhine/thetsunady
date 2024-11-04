import React from "react"
import ReactDOM from "react-dom/client"
// import { App } from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"
import { Paintings } from "./components/pages/Paintings"
import { Experiences } from "./components/pages/Experiences"

// createRoot(document.getElementById("root")!).render(
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Experiences />} path="/experiences"></Route>
        <Route element={<Paintings />} path="/paintings"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
