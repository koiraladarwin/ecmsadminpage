import { Route, Routes } from "react-router-dom";
import Loginpage from "./features/auth/pages/Loginpage";
import ImportExportPage from "./features/importexport/Importexport";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Home from "./features/dashboard/pages/Home";
import EventsPage from "./features/event/EventsPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />

      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/import-export" element={<ImportExportPage />} />
        <Route path="/events" element={<EventsPage/>} />
      </Route>
    </Routes>
  );
}

export default App;

