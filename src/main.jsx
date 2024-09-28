import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { HomePage, TodoListPage, CurrencyConverterPage } from "./pages";
import { NavBar } from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoListPage />} />
        <Route path="/converter" element={<CurrencyConverterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
