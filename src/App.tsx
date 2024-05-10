import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddEventPage } from "./pages/CreateEvent/AddEventPage";
import EditProfilBySchoolPage from "./pages/EditProfilBySchool/EditProfilBySchoolPage";
import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import HomePageParent from "./pages/Home/HomePageParent";
import { HomePageSchool } from "./pages/Home/HomePageSchool";
import LoginPage from "./pages/Login/LoginPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import { ParentSignUpPage } from "./pages/ParentSignUpPage";
import { ParentTeacherSignUp } from "./pages/ParentTeacherSignUpPage";
import ProfilPage from "./pages/Profil/ProfilPage";
import { SchoolCreateUser } from "./pages/SchoolCreateUserPage";
import SearchByParentDetailPage from "./pages/Search/SearchByParentDetailPage";
import SearchByParentPage from "./pages/Search/SearchByParentPage";
import SearchBySchoolPage from "./pages/Search/SearchBySchoolPage";
import { TeacherSignUpPage } from "./pages/TeacherSignUpPage";
import { ModalProvider } from "./services/Context/ModalContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home_page_parent" element={<HomePageParent />} />
            <Route path="/home_page_school" element={<HomePageSchool />} />
            <Route
              path="/edit_profil_by_school"
              element={<EditProfilBySchoolPage />}
            />
            <Route path="/school_create_user" element={<SchoolCreateUser />} />
            <Route path="/parent_sign_up_page" element={<ParentSignUpPage />} />
            <Route
              path="/teacher_sign_up_page"
              element={<TeacherSignUpPage />}
            />
            <Route
              path="/parent_teacher_sign_up_page"
              element={<ParentTeacherSignUp />}
            />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/search_by_parent" element={<SearchByParentPage />} />
            <Route path="/search_by_school" element={<SearchBySchoolPage />} />
            <Route path="/for_you_event" element={<EventsUserPage />} />
            <Route path="/all_events" element={<EventsPage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route
              path="/search_by_parent_detail/:id"
              element={<SearchByParentDetailPage />}
            />
            <Route path="/add_event_page" element={<AddEventPage />} />
          </Route>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </ModalProvider>
    </>
  );
}

export default App;
