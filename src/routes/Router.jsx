import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../page/Settings/Profile";
import TermsCondition from "../page/Settings/TermsCondition";
import PrivacyPolicy from "../page/Settings/PrivacyPolicy";
import Notification from "../page/Notification/Notification";
import VerificationCode from "../auth/VerificationCode";
import DashboardLayout from "../layout/DashboardLayout";
import SellerManagement from "../page/sellerManagement/SellerManagement";
import Subscription from "../page/subscription/Subscription";
import UpdateSubscription from "../page/subscription/UpdateSubscription";
import PremiumSubscribers from "../page/PremiumSubscribers/PremiumSubscribers";
import AdPromotion from "../page/AdPromotion/AdPromotion";
import Faq from "../page/Settings/Faq";
import Support from "../page/Support/Support";
import CategoryManagement from "../page/CategoryManagement/CategoryManagement";
import Chat from "../page/Chat/Chat";
import ResetPassword from "../auth/ResetPassword";
import ForgetPassword from "../auth/ForgetPassword";
import Users from "../page/UserManagement/Users";
import SignIn from "../auth/SignIn";

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
  }
]);
