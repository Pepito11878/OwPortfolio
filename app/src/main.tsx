import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contact" element={<App />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
