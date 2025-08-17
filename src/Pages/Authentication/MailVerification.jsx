import { useForm } from "react-hook-form";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast, Toaster } from "sonner";

export default function MailVerification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    localStorage.setItem("email", data.email);

    toast.success("Email verification successfully.");

    setTimeout(() => {
      navigate("/otp_verification");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <Toaster position="top-right" />
      <div className="hidden lg:flex  items-center justify-center w-full basis-8/12">
        <div className="hidden lg:block w-full h-screen">
          <img
            src="https://i.ibb.co.com/HLmGB8Fx/64e78d2cd51524aaf4f8ce12-64e78d0d294a3db1449d0c31-Do-I-need-identity-theft-protection-lead-image.webp"
            alt="3D isometric illustration with computer and UNIONBIGDATA branding"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="  flex items-center justify-center w-full basis-6/12 ">
        <div className="w-full max-w-lg p-10  shadow-gray-300 shadow-md">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="relative overflow-hidden w-[80px] mb-10 flex gap-2 items-center justify-center border border-tagline  text-tagline font-medium py-1 px-3 rounded-full transition-colors duration-200 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-700/10 hover:cursor-pointer before:transition-all before:duration-500 hover:before:w-full"
            >
              <span className="relative z-10 flex gap-1 items-center">
                <MdKeyboardBackspace size={18} />
                Back
              </span>
            </button>

            <div>
              <h1 className="text-3xl font-semibold text-title mb-2 capitalize">
                forgot password
              </h1>
              <p className="text-tagline text-sm">
                No worries! Enter your email address below, and we'll send you a
                verificaton code to reset your password.
                {/* <br />
              Streamline your logistics — sign in to continue. */}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-label mb-2"
              >
                E-mail
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="yatingzang0215@gmail.com"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg shadow-sm  transition-all duration-200 text-title placeholder-gray-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit button */}

            <button
              type="submit"
              className="relative overflow-hidden w-full bg-title text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 
             before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-200/10 hover:cursor-pointer before:transition-all before:duration-500 hover:before:w-full"
            >
              <span className="relative z-10 ">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
