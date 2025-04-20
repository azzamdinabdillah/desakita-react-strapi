import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import VillageProfile, {
  VillageProfileEmpty,
} from "./pages/village-profile/VillageProfile.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import DashboardLayout from "./pages/DashboardLayout.tsx";
import CreateVillageProfile from "./pages/village-profile/resources/CreateVillageProfile.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="/village-profile">
            <Route index element={<VillageProfile />} />
            <Route
              path="create-village-profile"
              element={<CreateVillageProfile />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
