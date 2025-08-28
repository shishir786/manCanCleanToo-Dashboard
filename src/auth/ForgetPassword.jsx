import { useNavigate } from "react-router-dom";
import BrandLogo from "../shared/BrandLogo";
import LoginLogo from "../assets/header/menfile1.svg";

function ForgetPassword() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-5">
      <div className="bg-white relative  rounded-2xl px-5 py-20 w-full max-w-2xl text-center">
        <div className="flex justify-center ">
          <img className="w-[208px] h-[120px]" src={LoginLogo} alt="LOgo" />
        </div>
        <h2 className="text-[48px] font-semibold  text-[#001C54]">
          Men Can Distribute Too
        </h2>
        <div className="max-w-xl items-center mx-auto mt-5">


        <form className="space-y-5">
          <h1 className="text-sm font-normal text-gray-600 text-start">
            Enter your email address to ger a verification code for resetting
            your password.
          </h1>
          <div>
            <h2 className="text-3xl font-bold  text-[#001C54] text-start">
              Forgot Password
            </h2>
            <input
              type="email"
              name="email"
              placeholder="admin@gmail.com"
              className="w-full px-5 py-3 bg-white text-gray-600 border-2  rounded-md outline-none mt-3 placeholder:text-gray-600"
              required
            />
            <p className="text-sm text-start text-red-300 font-medium">
              Email is Required..?
            </p>
          </div>

          <div className="flex justify-center items-center text-white">
            <button
              onClick={() => navigate("/verify-mail")}
              type="button"
              className="whitespace-nowrap w-full bg-[#001C54] text-white font-semibold py-3 rounded-lg shadow-lg cursor-pointer mt-5"
            >
              Continue
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
