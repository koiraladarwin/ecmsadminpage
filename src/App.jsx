import { Route, Routes } from "react-router-dom";
import Loginpage from "./features/auth/pages/Loginpage";
import Home from "./features/dashboard/pages/DashboardHome";
import ImportExportPage from "./features/importexport/Importexport";
import EventPage from "./features/event/EventPage";
import Dashboard from "./features/dashboard/pages/Dashboard";
import PeoplePage from "./features/dashboard/people/pages/PeoplePage";
import SupportPage from "./features/dashboard/support/SupportPage";
import ReportPage from "./features/dashboard/report/pages/ReportPage";
import SettingsPage from "./features/dashboard/settings/pages/SettingsPage";
import FinancePage from "./features/finance/pages/FinancePage";
import HireTeamPage from "./features/dashboard/hireteam/HireTeamPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />

      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="import-export" element={<ImportExportPage />} />
        <Route path="events/:eventId" element={<EventPage />} />
        <Route path="people/:peopleId" element={<PeoplePage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="report/:reportId" element={<ReportPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="finance" element={<FinancePage />} />
        <Route path="hireteam" element={<HireTeamPage />} />
      </Route>
    </Routes>
  );
}

export default App;

