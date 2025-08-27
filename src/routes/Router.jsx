import { createBrowserRouter } from "react-router-dom";
import ForgetPassword from "../auth/ForgetPassword";
import ResetPassword from "../auth/ResetPassword";
import SignIn from "../auth/SignIn";
import VerificationCode from "../auth/VerificationCode";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import CategoryManagement from "../page/CategoryManagement/CategoryManagement";
import Chat from "../page/Chat/Chat";
import Notification from "../page/Notification/Notification";
import SellerManagement from "../page/sellerManagement/SellerManagement";
import Profile from "../page/Settings/Profile";
import Subscription from "../page/subscription/Subscription";
import Users from "../page/UserManagement/Users";
import BlockedUser from "../page/BlockedUser/BlockedUser";

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
        element: <SellerManagement />,
      },

      {
        path: "/dashboard/feedback",
        element: <Subscription />,
      },

      {
        path: "/dashboard/Settings/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/Settings/notification",
        element: <Notification />,
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
    element: <SignIn />,
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
