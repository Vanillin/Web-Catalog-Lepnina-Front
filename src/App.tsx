import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/main/mainPage";
import CatalogPage from "./components/main/catalogPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
