import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/main/mainPage";
import CatalogPage from "./components/pages/catalog/catalogPage";
import OptionsPage from "./components/pages/options/optionsPage";
import LoginPage from "./components/pages/login/loginPage";
import RegisterPage from "./components/pages/register/registerPage";
import LogoutPage from "./components/pages/logout/logoutPage";
import AuthProtected from "./components/pages/login/authProtected";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import { Provider } from "react-redux";
import store from "./api/store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/options" element={<OptionsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/logout" element={<LogoutPage />} />

            <Route element={<AuthProtected />}>
              <Route path="/catalog" element={<CatalogPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
