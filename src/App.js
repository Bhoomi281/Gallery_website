import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mountains from "./Componnets/Mountains";
import Birds from "./Componnets/Birds";
import Food from "./Componnets/Food";
import Beaches from "./Componnets/Beaches";
import Header from "./Componnets/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Header />}> 
        <Route path="mountains" element={<Mountains />}>
          <Route path="beaches" element={<Beaches />} />
          <Route path="birds" element={<Birds />} />
          <Route path="food" element={<Food />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
