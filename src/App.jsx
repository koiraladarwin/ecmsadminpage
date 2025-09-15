import { Route, Routes } from "react-router-dom";

import Loginpage from "./features/auth/pages/Loginpage";
import Dashboard from "./features/dashboard/Dashboard";

import PeoplePage from "./features/dashboard/people/pages/PeoplePage";
import SupportPage from "./features/dashboard/support/SupportPage";
import ReportPage from "./features/dashboard/report/pages/ReportPage";
import SettingsPage from "./features/dashboard/settings/pages/SettingsPage";
import HireTeamPage from "./features/dashboard/hireteam/HireTeamPage";

import EventsPage from "./features/dashboard/event/pages/EventsPage.jsx";
import FinancePage from "./features/dashboard/finance/pages/FinancePage";
import ImportExportPage from "./features/dashboard/importexport/Importexport";
import CategoryPage from "./features/dashboard/category/page/Category";
import CreateEventPage from "./features/dashboard/event/pages/NewEventPage.jsx";
import StaffAttendeePage from "./features/dashboard/people/pages/StaffAttendeePage";
import Home from "./features/dashboard/home/pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />

      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />

        <Route path="import-export" element={<ImportExportPage />} />
        <Route path='people' element={<PeoplePage />} />
        <Route path="people/:peopleId" element={<StaffAttendeePage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="report/:reportId" element={<ReportPage />} />
        <Route path="settings/:settingId" element={<SettingsPage />} />
        <Route path="finance/:financeId" element={<FinancePage />} />
        <Route path="hireteam" element={<HireTeamPage />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/event/createvent" element={<CreateEventPage />} />
        <Route path="/event/category" element={<CategoryPage />} />

      </Route>
    </Routes>
  );
}

export default App;

