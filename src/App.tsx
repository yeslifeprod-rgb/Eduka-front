import { Route, Routes } from "react-router-dom";
import "./App.css";

import { AddEventPage } from "./pages/CreateEvent/AddEventPage";

import { ChatPage } from "./pages/Chat/ChatPage";
import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import HomePageParent from "./pages/Home/HomePageParent";
import { HomePageSchool } from "./pages/Home/HomePageSchool";

import { EditMyProfil } from "./pages/EditProfilBySchool/EditMyProfil";
import EventPublicPage from "./pages/EventPublic/EventPublicPage";
import ChangePasswordPage from "./pages/Login/ChangePasswordPage";
import LoginPage from "./pages/Login/LoginPage";
import SendEmailPage from "./pages/Login/SendEmailPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import EventPrivatePage from "./pages/Profil/EventPrivatePage";
import { ProfilPage } from "./pages/Profil/ProfilPage";
import ProfilModifyPage from "./pages/Profil/ProfileModifyPage";
import ProfilePage from "./pages/Profil/ProfilePage";
import { ParentSignUpPage } from "./pages/Schools/ParentSignUpPage";
import { ParentTeacherSignUp } from "./pages/Schools/ParentTeacherSignUpPage";
import { SchoolCreateUser } from "./pages/Schools/SchoolCreateUserPage";
import { TeacherSignUpPage } from "./pages/Schools/TeacherSignUpPage";
import SearchByParentDetailPage from "./pages/Search/SearchByParentDetailPage";
import SearchByParentPage from "./pages/Search/SearchByParentPage";
import SearchBySchoolPage from "./pages/Search/SearchBySchoolPage";
import { HomePageTeacher } from "./pages/Teacher/HomePageTeacher";
import { ModalProvider } from "./services/Context/ModalContext";
import { UserProvider } from "./services/Context/UserContext";
import { Roles } from "./utils/Enum/Roles";
import NotFoundPage from "./utils/NotFoundPage";
import PrivateRoute, {
  RoleBasedRoute,
} from "./utils/PrivateRoute/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/change_password" element={<ChangePasswordPage />} />
          <Route path="/send_email" element={<SendEmailPage />} />
          <Route element={<PrivateRoute />}>
            {/* Routes for Parent */}
            <Route element={<RoleBasedRoute roles={[Roles.PARENT]} />}>
              <Route path="/home_page_parent" element={<HomePageParent />} />
              <Route path="/edit_my_profil" element={<EditMyProfil />} />
              <Route
                path="/event_public_page/information"
                element={<EventPublicPage />}
              />
              <Route
                path="/event_private_page/information"
                element={<EventPrivatePage />}
              />
              <Route path="/notification" element={<NotificationPage />} />
              <Route
                path="/search_by_parent"
                element={<SearchByParentPage />}
              />
              <Route
                path="/search_by_parent_detail/:id"
                element={<SearchByParentDetailPage />}
              />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/for_you_event" element={<EventsUserPage />} />
              <Route path="/all_events" element={<EventsPage />} />
              <Route path="/participation" element={<ProfilePage />} />
              <Route path="/add_event_page" element={<AddEventPage />} />
              <Route path="/profil" element={<ProfilPage />} />
              <Route path="/profil" element={<ProfilModifyPage />} />
            </Route>
            {/* Routes for School */}
            <Route element={<RoleBasedRoute roles={[Roles.SCHOOL]} />}>
              <Route path="/home_page_school" element={<HomePageSchool />} />
              <Route
                path="/school_create_user"
                element={<SchoolCreateUser />}
              />
              <Route
                path="/parent_sign_up_page"
                element={<ParentSignUpPage />}
              />
              <Route
                path="/teacher_sign_up_page"
                element={<TeacherSignUpPage />}
              />
              <Route
                path="/parent_teacher_sign_up_page"
                element={<ParentTeacherSignUp />}
              />
              <Route
                path="/search_by_school"
                element={<SearchBySchoolPage />}
              />
            </Route>
            {/* Routes for Teacher */}
            <Route element={<RoleBasedRoute roles={["TEACHER"]} />}>
              <Route path="/home_page_teacher" element={<HomePageTeacher />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
