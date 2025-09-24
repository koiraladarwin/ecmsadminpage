import { Route, Routes } from "react-router-dom";

import Loginpage from "./features/auth/pages/Loginpage";
import Dashboard from "./features/dashboard/Dashboard";

import PeoplePage from "./features/dashboard/people/pages/PeoplePage";
import SupportPage from "./features/dashboard/support/SupportPage";
import ReportPage from "./features/dashboard/report/pages/InvitationReportPage.jsx";
import SettingsPage from "./features/dashboard/settings/pages/SettingsPage";
import HireTeamPage from "./features/dashboard/hireteam/HireTeamPage";

import EventsPage from "./features/dashboard/event/pages/EventsPage.jsx";
import FinancePage from "./features/dashboard/finance/pages/FinancePage";
import ImportExportPage from "./features/dashboard/importexport/Importexport";
import CategoryPage from "./features/dashboard/category/page/Category";
import CreateEventPage from "./features/dashboard/event/pages/NewEventPage.jsx";
import StaffAttendeePage from "./features/dashboard/people/pages/StaffAttendeePage";
import Home from "./features/dashboard/home/pages/Home";
import AddAttendeeForm from "./features/dashboard/people/components/form/AddAttendeeForm.jsx";
import AddStaffForm from "./features/dashboard/people/components/form/AddStaffForm.jsx";
import EnrollPage from "./features/dashboard/people/pages/EnrollPage.jsx";
import CreateCategoryPage from "./features/dashboard/category/page/CreateCategoryPage.jsx";
import AllCategoriesPage from "./features/dashboard/category/page/AllCategoriesPage.jsx";
import SalesReportPage from "./features/dashboard/report/pages/SalesReportPage.jsx";
import InvitationReportPage from "./features/dashboard/report/pages/InvitationReportPage.jsx";
import CheckinReportPage from "./features/dashboard/report/pages/CheckInReportPage.jsx";


import SessionPage from "./features/dashboard/event/pages/SessionPage.jsx"
import CreateSessionPage from "./features/dashboard/event/pages/CreateSessionPage.jsx"
import SessionsAll from "./features/dashboard/event/pages/SessionsAll.jsx"

import Invitations from "./features/dashboard/event/invitations/pages/Invitations.jsx";
import CreateInvitations from "./features/dashboard/event/invitations/pages/Createinvitations.jsx";
import ShowAllInvitations from "./features/dashboard/event/invitations/pages/ShowAllInvitations.jsx";
import ViewGeneralInvitations from "./features/dashboard/event/invitations/pages/ViewGeneralInvitations.jsx";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />

      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="import-export" element={<ImportExportPage />} />
        <Route path='people' element={<PeoplePage />} />
        <Route path="people/staff" element={<StaffAttendeePage />} />
        <Route path="people/enroll" element={<EnrollPage />} />
        <Route path='/people/staff/addattendee' element={<AddAttendeeForm />} />
        <Route path='/people/staff/addstaff' element={<AddStaffForm />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="report/checkinreport" element={<CheckinReportPage />} />
        <Route path="report/salesreport" element={<SalesReportPage />} />
        <Route path="report/invitationreport" element={<InvitationReportPage />} />
        <Route path="settings/:settingId" element={<SettingsPage />} />
        <Route path="finance/:financeId" element={<FinancePage />} />
        <Route path="hireteam" element={<HireTeamPage />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/event/createvent" element={<CreateEventPage />} />
        <Route path="/event/category" element={<CategoryPage />} />
        <Route path="/event/category/createcategory" element={<CreateCategoryPage />} />
        <Route path="/event/category/allcategories" element={<AllCategoriesPage />} />

        <Route path="/event/session" element={<SessionPage/>} />
        <Route path="/event/createsession" element={<CreateSessionPage/>} />
        <Route path="/event/allsession" element={<SessionsAll/>} />

        <Route path="event/invitation" element={<Invitations />} />
        <Route path="event/createinvitation" element={<CreateInvitations/>} />
        <Route path="event/allinvitations" element={<ShowAllInvitations/>} />
        <Route path="event/generalinvitation" element={<ViewGeneralInvitations/>} />

      </Route>
    </Routes>
  );
}

export default App;

