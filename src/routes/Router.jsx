import { createBrowserRouter } from "react-router-dom";
import AdminSignIn from "../auth/AdminSignIn";
import ChangePass from "../auth/ChangePass";
import ForgetPassword from "../auth/ForgetPassword";
import Login from "../auth/Login";
import ResetPassword from "../auth/ResetPassword";
import VerificationCode from "../auth/VerificationCode";
import DashboardPage from "../components/Dashboard/Dashboard";
import Feedback from "../components/Dashboard/Feedback";
import DashboardLayout from "../layout/DashboardLayout";
import BlockedUser from "../page/BlockedUser/BlockedUser";
import Chat from "../page/Chat/Chat";
import Notification from "../page/Notification/Notification";
import AboutUs from "../page/Settings/AboutUs";
import ProfilePage from "../page/Settings/Profile";
import Setting from "../page/Settings/Setting";
import Users from "../page/UserManagement/Users";
import PrivacyPolicy from "./../page/Settings/PrivacyPolicy";
import TermsAndCondition from "./../page/Settings/TermsCondition";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/blocked-users",
        element: <BlockedUser />,
      },
      {
        path: "/dashboard/createAdmin",
        element: <AdminSignIn />,
      },

      {
        path: "/dashboard/feedback",
        element: <Feedback />,
      },

      {
        path: "/dashboard/Setting",
        element: <Setting />,
      },
      {
        path: "/dashboard/Setting/changePassword",
        element: <ChangePass />,
      },
      {
        path: "/dashboard/Setting/privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/dashboard/Setting/tramsAndCondition",
        element: <TermsAndCondition />,
      },
      {
        path: "/dashboard/Setting/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/dashboard/Settings/chat",
        element: <Chat />,
      },
      {
        path: "/dashboard/profile/edit-profile",
        element: <ProfilePage />,
      },
      {
        path: "/dashboard/notification/all-notifications",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify-mail",
    element: <VerificationCode />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/verification-code",
    element: <VerificationCode />,
  },

]);
