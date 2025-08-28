import { createBrowserRouter } from "react-router-dom";
import AdminSignIn from "../auth/AdminSignIn";
import ForgetPassword from "../auth/ForgetPassword";
import Login from "../auth/Login";
import ResetPassword from "../auth/ResetPassword";
import VerificationCode from "../auth/VerificationCode";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import CategoryManagement from "../page/CategoryManagement/CategoryManagement";
import Chat from "../page/Chat/Chat";
import Subscription from "../page/subscription/Subscription";
import Users from "../page/UserManagement/Users";
import BlockedUser from "../page/BlockedUser/BlockedUser";
import Setting from "../page/Settings/Setting";
import ChangePass from "../page/Settings/ChangePass";
import PrivacyPolicy from "./../page/Settings/PrivacyPolicy";
import TermsAndCondition from "./../page/Settings/TermsCondition";
import AboutUs from "../page/Settings/AboutUs";
import ForgotPassword from "./../page/Settings/ForgotPassword";
import VerifyOtp from "./../page/Settings/VerifyOtp";

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
        element: <Subscription />,
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
    ],
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
