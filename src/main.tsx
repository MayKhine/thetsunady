import React from "react"
import ReactDOM from "react-dom/client"
// import { App } from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import { Home } from "./components/pages/Home"

// createRoot(document.getElementById("root")!).render(
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
