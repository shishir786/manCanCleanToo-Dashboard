import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginLogo from "../assets/header/menfile1.svg";

function VerificationCode() {
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
    <div className="flex justify-center items-center min-h-screen bg-white p-5">
      <div className="bg-white relative  rounded-2xl px-10 py-20 w-full max-w-2xl text-center">
        <div className="flex justify-center ">
          <img className="w-[208px] h-[120px]" src={LoginLogo} alt="LOgo" />
        </div>
        <h2 className="text-[48px] font-semibold  text-[#001C54]">
          Men Can Distribute Too
        </h2>

        <div className="max-w-xl items-center mx-auto mt-5">
          <form className="space-y-5">
            <div className="text-start">
              <h2 className="font-bold text-2xl text-[#001C54]">Verify OTP</h2>
              <p className="text-gray-600 mt-2 text-sm">
                Please check your email. We have sent a code to contact
                @gmail.com
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

export default VerificationCode;
