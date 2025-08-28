import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../shared/PageHeading";



function VerifyOtp() {
  const [code, setCode] = useState(new Array(5).fill(""));
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!isNaN(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyCode = async () => {
    navigate("/reset-password");
  };

  return (
    <div>
      <div className="rounded-t-lg mt-5 rounded-b-none bg-[#013666] text-white py-3  flex flex-row justify-between items-center mx-5 px-5">
        <PageHeading title="Forgot Password" />
      </div>

      <div className=" flex justify-center items-center min-h-screen bg-white mx-5  ">
        <div className="bg-white relative  rounded-2xl px-10 py-20 w-full max-w-2xl  text-center">
          <form className="space-y-5">
            <div className="text-start">
              <p className="text-gray-600 mt-2 text-2xl">
                Please check your email. We have sent a code to contact
                @gmail.com{" "}
              </p>
            </div>
            <div className="flex justify-center gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="shadow-xs w-12 h-12 text-2xl text-center border border-[#001C54] text-[#001C54] rounded-lg focus:outline-none"
                />
              ))}
            </div>

            <div className="flex flex-col gap-5 justify-center items-center text-white">
              <button
                onClick={handleVerifyCode}
                type="button"
                className="whitespace-nowrap w-full bg-[#001C54] text-white font-semibold py-3 rounded-lg shadow-lg cursor-pointer my-5"
              >
                Continue
              </button>
              <div className="flex w-full justify-between items-center ">
                <p className="text-gray-600 text-center mt-2">
                  You have not received the email?{" "}
                </p>
                <span className="text-[#001C54] text-end underline">
                  Resend..
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
