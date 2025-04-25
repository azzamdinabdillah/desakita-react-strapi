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
import Login from "./pages/auth/Login.tsx";
import HeadHouse from "./pages/head-house/HeadHouse.tsx";
import ManageHeadHouse from "./pages/head-house/resources/ManageHeadHouse.tsx";
import CreateHeadHouse from "./pages/head-house/resources/CreateHeadHouse.tsx";
import "react-datepicker/dist/react-datepicker.css";
import ListSocialDonate from "./pages/social-donate/list-social-donate/ListSocialDonate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="/social-donate">
            <Route path="list-social-donate">
              <Route index element={<ListSocialDonate />}></Route>
            </Route>
          </Route>

          <Route path="/head-house">
            <Route index element={<HeadHouse />} />
            <Route path="manage-head-house" element={<ManageHeadHouse />} />
            <Route path="create-head-house" element={<CreateHeadHouse />} />
          </Route>

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
