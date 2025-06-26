import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/main/mainPage";
import CatalogPage from "./components/pages/catalog/catalogPage";
import OptionsPage from "./components/pages/options/optionsPage";
import LoginPage from "./components/pages/login/loginPage";
import RegisterPage from "./components/pages/register/registerPage";
import LogoutPage from "./components/pages/logout/logoutPage";
import AuthProtected from "./components/pages/login/authProtected";
import FormikCreateProduct from "./components/pages/options/formiks/formikCreateProduct";
import FormikChangeProduct from "./components/pages/options/formiks/formikChangeProduct";
import FormikDeleteProduct from "./components/pages/options/formiks/formikDeleteProduct";
import FormikCreateSection from "./components/pages/options/formiks/formikCreateSection";
import FormikChangeSection from "./components/pages/options/formiks/formikChangeSection";
import FormikDeleteSection from "./components/pages/options/formiks/formikDeleteSection";
import FormikChangeUser from "./components/pages/options/formiks/formikChangeUser";
import FormikDeleteUser from "./components/pages/options/formiks/formikDeleteUser";

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/catalog" element={<CatalogPage />} />

            <Route element={<AuthProtected />}>
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/options" element={<OptionsPage />} />
              <Route
                path="/options/product/create"
                element={<FormikCreateProduct />}
              />
              <Route
                path="/options/product/change"
                element={<FormikChangeProduct />}
              />
              <Route
                path="/options/product/delete"
                element={<FormikDeleteProduct />}
              />
              <Route
                path="/options/section/create"
                element={<FormikCreateSection />}
              />
              <Route
                path="/options/section/change"
                element={<FormikChangeSection />}
              />
              <Route
                path="/options/section/delete"
                element={<FormikDeleteSection />}
              />
              <Route
                path="/options/user/change"
                element={<FormikChangeUser />}
              />
              <Route
                path="/options/user/delete"
                element={<FormikDeleteUser />}
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
