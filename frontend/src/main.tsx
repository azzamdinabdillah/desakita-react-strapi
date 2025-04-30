import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import VillageProfile from "./pages/head-village/village-profile/VillageProfile.tsx";
import Dashboard from "./pages/head-village/dashboard/Dashboard.tsx";
import DashboardLayout from "./pages/DashboardLayout.tsx";
import CreateVillageProfile from "./pages/head-village/village-profile/resources/CreateVillageProfile.tsx";
import Login from "./pages/head-village/auth/Login.tsx";
import HeadHouse from "./pages/head-village/head-house/HeadHouse.tsx";
import ManageHeadHouse from "./pages/head-village/head-house/resources/ManageHeadHouse.tsx";
import CreateHeadHouse from "./pages/head-village/head-house/resources/CreateHeadHouse.tsx";
import "react-datepicker/dist/react-datepicker.css";
import ListSocialDonate from "./pages/head-village/social-donate/list-social-donate/ListSocialDonate.tsx";
import ListSocialDonateHeadFamily from "./pages/head-family/social-donate/list-social-donate/ListSocialDonate.tsx";
import ManageSocialDonate from "./pages/head-village/social-donate/list-social-donate/resources/ManageSocialDonate.tsx";
import ManageSocialDonateHeadFamily from "./pages/head-family/social-donate/list-social-donate/resources/ManageSocialDonate.tsx";
import CreateSocialDonate from "./pages/head-village/social-donate/list-social-donate/resources/CreateSocialDonate.tsx";
import ApplicantSocialDonate from "./pages/head-village/social-donate/applicant-social-donate/ApplicantSocialDonate.tsx";
import ManageApplicantSocialDonate from "./pages/head-village/social-donate/applicant-social-donate/resources/ManageApplicantSocialDonate.tsx";
import VillageDevelopmentSchedule from "./pages/head-village/village-schedule/development/VillageDevelopmentSchedule.tsx";
import ManageVillageDevelopmentSchedule from "./pages/head-village/village-schedule/development/resources/ManageVillageDevelopmentSchedule.tsx";
import CreateVillageDevelopmentSchedule from "./pages/head-village/village-schedule/development/resources/CreateVillageDevelopmentSchedule.tsx";
import VillageEventSchedule from "./pages/head-village/village-schedule/event/VillageEventSchedule.tsx";
import ManageVillageEventSchedule from "./pages/head-village/village-schedule/event/resources/ManageVillageEventSchedule.tsx";
import CreateVillageEventSchedule from "./pages/head-village/village-schedule/event/resources/CreateVillageEventSchedule.tsx";
import SearchResult from "./pages/head-village/SearchResult.tsx";

import DashboardFamily from "./pages/head-family/dashboard/Dashboard.tsx";
import FamilyMember from "./pages/head-family/family-member/FamilyMember.tsx";
import ManageFamilyMember from "./pages/head-family/family-member/resources/ManageFamilyMember.tsx";
import CreateFamilyMember from "./pages/head-family/family-member/resources/CreateFamilyMember.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/search-result" element={<SearchResult />} />
          <Route index element={<Dashboard />} />

          <Route path="/social-donate">
            <Route path="list-social-donate">
              <Route index element={<ListSocialDonate />} />
              <Route
                path="manage-social-donate"
                element={<ManageSocialDonate />}
              />
              <Route
                path="create-social-donate"
                element={<CreateSocialDonate />}
              />
            </Route>

            <Route path="applicant-social-donate">
              <Route index element={<ApplicantSocialDonate />} />
              <Route
                path="manage-applicant-social-donate"
                element={<ManageApplicantSocialDonate />}
              />
              <Route
                path="create-applicant-social-donate"
                element={<CreateSocialDonate />}
              />
            </Route>
          </Route>

          <Route path="village-schedule">
            <Route path="village-development-schedule">
              <Route index element={<VillageDevelopmentSchedule />} />
              <Route
                path="manage-village-development-schedule"
                element={<ManageVillageDevelopmentSchedule />}
              />
              <Route
                path="create-village-development-schedule"
                element={<CreateVillageDevelopmentSchedule />}
              />
            </Route>

            <Route path="village-event-schedule">
              <Route index element={<VillageEventSchedule />} />
              <Route
                path="manage-village-event-schedule"
                element={<ManageVillageEventSchedule />}
              />
              <Route
                path="create-village-event-schedule"
                element={<CreateVillageEventSchedule />}
              />
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

        <Route
          path="/head-family"
          element={<DashboardLayout role="head-family" />}
        >
          <Route index element={<DashboardFamily />} />

          <Route path="family-member">
            <Route index element={<FamilyMember />} />
            <Route
              path="manage-family-member"
              element={<ManageFamilyMember />}
            />
            <Route
              path="create-family-member"
              element={<CreateFamilyMember />}
            />
          </Route>

          <Route path="social-donate">
            <Route path="list-social-donate">
              <Route index element={<ListSocialDonateHeadFamily />} />
              <Route
                path="manage-social-donate"
                element={<ManageSocialDonateHeadFamily />}
              />
              <Route
                path="create-social-donate"
                element={<CreateSocialDonate />}
              />
            </Route>

            <Route path="applicant-social-donate">
              <Route index element={<ApplicantSocialDonate />} />
              <Route
                path="manage-applicant-social-donate"
                element={<ManageApplicantSocialDonate />}
              />
              <Route
                path="create-applicant-social-donate"
                element={<CreateSocialDonate />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
