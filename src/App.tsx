import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import ProfilPage from "./pages/Profil/ProfilPage";
import SearchPage from "./pages/Search/SearchPage";
import NotFoundPage from "./utils/NotFoundPage";
import PrivateRoute from "./utils/PrivateRoute";

import EditProfilBySchoolPage from "./pages/EditProfilBySchool/EditProfilBySchoolPage";
import { HomePageSchool } from "./pages/Home/HomePageSchool";

function App() {
  return (
    <>

      <div>
        <Routes>
          <Route path="/" element={<HomePageSchool />} />
          <Route element={<PrivateRoute />}>
            <Route path="/editprofilbyschool" element={<EditProfilBySchoolPage />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/for_you_event" element={<EventsUserPage />} />
            <Route path="/all_events" element={<EventsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
