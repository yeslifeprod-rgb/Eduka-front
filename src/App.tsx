import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePageSchool } from "./pages/HomePageSchool";
import { SchoolCreateUser } from "./pages/SchoolCreateUserPage";
import { ParentSignUpPage } from "./pages/ParentSignUpPage";
import { TeacherSignUpPage } from "./pages/TeacherSignUpPage";
import { ParentTeacherSignUp } from "./pages/ParentTeacherSignUpPage";


import NavTopLarge from "./components/NavBar/NavTopLarge";
import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import HomePageParent from "./pages/Home/HomePageParent";
import NotificationPage from "./pages/Notification/NotificationPage";

import SearchDetailPage from "./pages/Search/SearchDetailPage";
import SearchPage from "./pages/Search/SearchPage";

import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./pages/Login/LoginPage";
import HideNavbar from "./components/HideNavbar/HideNavbar";
import { ModalProvider } from "./services/Context/ModalContext";
import NavTop from "./components/NavBar/NavTop";


import EditProfilBySchoolPage from "./pages/EditProfilBySchool/EditProfilBySchoolPage";


import NavBottom from "./components/NavBar/NavBottom";

function App() {
  return (
    <>


      <HideNavbar>
        <NavTop />
        <NavTopLarge />
      </HideNavbar>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePageParent />} />
            <Route path="/" element={<HomePageSchool />} />
            <Route path="/editprofilbyschool" element={<EditProfilBySchoolPage />} />
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="/school_create_user" element={<SchoolCreateUser />} />
            <Route path="/parent_signUpPage" element={<ParentSignUpPage />} />
            <Route path="/teacherSignUpPage" element={<TeacherSignUpPage />} />
            <Route path="/parentTeacherSignUpPage" element={<ParentTeacherSignUp />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/for_you_event" element={<EventsUserPage />} />
            <Route path="/all_events" element={<EventsPage />} />
            <Route path="/search_detail/:id" element={<SearchDetailPage />} />
          </Route>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </ModalProvider>
      <HideNavbar>
        <NavBottom />
      </HideNavbar>
    </>
  );
}

export default App;
