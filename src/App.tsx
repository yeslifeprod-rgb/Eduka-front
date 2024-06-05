import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePageSchool } from "./pages/HomePageSchool";
import { SchoolCreateUser } from "./pages/SchoolCreateUserPage";
import { ParentSignUpPage } from "./pages/ParentSignUpPage";
import { TeacherSignUpPage } from "./pages/TeacherSignUpPage";
import { ParentTeacherSignUp } from "./pages/ParentTeacherSignUpPage";



import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import HomePageParent from "./pages/Home/HomePageParent";
import NotificationPage from "./pages/Notification/NotificationPage";



import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./pages/Login/LoginPage";

import { ModalProvider } from "./services/Context/ModalContext";


import NotFoundPage from "./utils/NotFoundPage";
import { EditProfilBySchoolPage } from "./pages/EditProfilBySchool/EditProfilBySchoolPage";




















function App() {
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home_page_parent" element={<HomePageParent />} />
            <Route path="/home_page_school" element={<HomePageSchool />} />
            <Route path="/edit_profil_by_school" element={<EditProfilBySchoolPage />} />
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

            <Route path="/for_you_event" element={<EventsUserPage />} />
            <Route path="/all_events" element={<EventsPage />} />

          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ModalProvider>
    </>
  );

}

export default App;
