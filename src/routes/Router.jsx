import { createBrowserRouter } from "react-router-dom";
import AdminSignIn from "../auth/AdminSignIn";
import ForgetPassword from "../auth/ForgetPassword";
import Login from "../auth/Login";
import ResetPassword from "../auth/ResetPassword";
import VerificationCode from "../auth/VerificationCode";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import BlockedUser from "../page/BlockedUser/BlockedUser";
import CategoryManagement from "../page/CategoryManagement/CategoryManagement";
import Chat from "../page/Chat/Chat";
import AboutUs from "../page/Settings/AboutUs";
import ChangePass from "../page/Settings/ChangePass";
import ProfilePage from "../page/Settings/Profile";
import Setting from "../page/Settings/Setting";
import Users from "../page/UserManagement/Users";
import ForgotPassword from "./../page/Settings/ForgotPassword";
import PrivacyPolicy from "./../page/Settings/PrivacyPolicy";
import TermsAndCondition from "./../page/Settings/TermsCondition";
import VerifyOtp from "./../page/Settings/VerifyOtp";
import Notification from "../page/Notification/Notification";
import Feedback from "../components/Dashboard/Feedback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
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
        path: "/dashboard/Setting/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/dashboard/Setting/verifyOtp",
        element: <VerifyOtp />,
      },
      {
        path: "/dashboard/Setting/aboutUs",
        element: <AboutUs />,
      },

      {
        path: "/category-management",
        element: <CategoryManagement />,
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
        element: <Notification/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verify-mail",
    element: <VerificationCode />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
