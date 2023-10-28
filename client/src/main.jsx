import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { RegisterContextProvider } from "./context/RegisterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RegisterContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </RegisterContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
