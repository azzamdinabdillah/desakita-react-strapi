import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import VillageProfile from "./pages/village-profile/village-profile.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/village-profile">
          <Route index element={<VillageProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
