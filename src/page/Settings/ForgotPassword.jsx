import { Link, useNavigate } from "react-router-dom";
import PageHeading from "../../shared/PageHeading";


function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="rounded-t-lg mt-5 rounded-b-none bg-[#013666] text-white py-3  flex flex-row justify-between items-center mx-5 px-5">
        <PageHeading title="Forgot Password" />
      </div>

      <div className="mx-5  flex justify-center items-center min-h-screen bg-white ">
        <div className="bg-white relative  rounded-2xl px-5 py-20 w-full max-w-2xl text-center">
          <form className="space-y-5">
            <h1 className="text-2xl font-medium text-[#013666] text-start">
              Enter your email address to ger a verification code for resetting
              your password.
            </h1>
            <div>
              <h2 className="text-xl font-bold  text-[#001C54] text-start">
                Email
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
              <Link
                className="whitespace-nowrap w-full bg-[#001C54] text-white font-semibold py-3 rounded-lg shadow-lg cursor-pointer mt-5"
                to="/dashboard/Setting/verifyOtp"
              >
                Get Otp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
