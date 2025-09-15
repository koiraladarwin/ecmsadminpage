import { Route, Routes } from "react-router-dom";
import Loginpage from "./features/auth/pages/Loginpage";
import Dashboard from "./features/dashboard/pages/Dashboard";

import PeoplePage from "./features/dashboard/people/pages/PeoplePage";
import SupportPage from "./features/dashboard/support/SupportPage";
import ReportPage from "./features/dashboard/report/pages/ReportPage";
import SettingsPage from "./features/dashboard/settings/pages/SettingsPage";
import HireTeamPage from "./features/dashboard/hireteam/HireTeamPage";

import Home from "./features/dashboard/pages/Home";
import EventsPage from "./features/dashboard/event/EventsPage";
import FinancePage from "./features/dashboard/finance/pages/FinancePage";
import ImportExportPage from "./features/dashboard/importexport/Importexport";
import CategoryPage from "./features/dashboard/category/page/Category";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />

      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />

        <Route path="import-export" element={<ImportExportPage />} />
        <Route path="people/:peopleId" element={<PeoplePage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="report/:reportId" element={<ReportPage />} />
        <Route path="settings/:settingId" element={<SettingsPage />} />
        <Route path="finance/:financeId" element={<FinancePage />} />
        <Route path="hireteam" element={<HireTeamPage />} />
        <Route path="/events/event" element={<EventsPage/>} />
        <Route path="/events/category" element={<CategoryPage/>} />
          
      </Route>
    </Routes>
  );
}

export default App;

