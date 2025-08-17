// import { useForm } from "react-hook-form";
// import { MdKeyboardBackspace } from "react-icons/md";
// import { useNavigate } from "react-router";
// import { toast, Toaster } from "sonner";

// export default function ResetPassowrd() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const newPassword = watch("newPassword");

//   const onSubmit = (data) => {
//     console.log("Password reset:", data);
//     toast.success("Password reset successfully!");
//     setTimeout(() => {
//       navigate("/sign_in");
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
//       <Toaster position="top-right" />
//       <div className="hidden lg:flex items-center justify-center w-full basis-8/12">
//         <img
//           src="https://i.ibb.co.com/HLmGB8Fx/64e78d2cd51524aaf4f8ce12-64e78d0d294a3db1449d0c31-Do-I-need-identity-theft-protection-lead-image.webp"
//           alt="illustration"
//           className="w-full h-screen object-cover"
//         />
//       </div>

//       {/* Right side */}
//       <div className="flex items-center justify-center w-full basis-6/12">
//         <div className="w-full max-w-lg p-10 shadow-gray-300 shadow-md">
//           <div className="mb-8">
//             <button
//               onClick={() => navigate(-1)}
//               type="button"
//               className="relative overflow-hidden w-[80px] mb-10 flex gap-2 items-center justify-center border border-tagline text-tagline font-medium py-1 px-3 rounded-full transition-colors duration-200 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-700/10 hover:cursor-pointer before:transition-all before:duration-500 hover:before:w-full"
//             >
//               <span className="relative z-10 flex gap-1 items-center">
//                 <MdKeyboardBackspace size={18} />
//                 Back
//               </span>
//             </button>

//             <div>
//               <h1 className="text-3xl font-semibold text-title mb-2 capitalize">
//                 Reset Password
//               </h1>
//               <p className="text-tagline text-sm">
//                 Enter your a new password containing minimum of 6 characters to
//                 continue.
//               </p>
//             </div>
//           </div>

//           {/* Reset Password Form */}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* New Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 {...register("newPassword", {
//                   required: "New password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters",
//                   },
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-title"
//                 placeholder="Enter new password"
//               />
//               {errors.newPassword && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.newPassword.message}
//                 </p>
//               )}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 {...register("confirmPassword", {
//                   required: "Please confirm your password",
//                   validate: (value) =>
//                     value === newPassword || "Passwords do not match",
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-title"
//                 placeholder="Confirm new password"
//               />
//               {errors.confirmPassword && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.confirmPassword.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="relative overflow-hidden w-full bg-title text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200
//               before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-200/10 hover:cursor-pointer before:transition-all before:duration-500 hover:before:w-full"
//             >
//               <span className="relative z-10">Reset Password</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useForm } from "react-hook-form";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FiEyeOff } from "react-icons/fi";
import { IoIosEye } from "react-icons/io";

export default function ResetPassowrd() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const newPassword = watch("newPassword");

  // state for show/hide passwords
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data) => {
    console.log("Password reset:", data);
    toast.success("Password reset successfully!");
    setTimeout(() => {
      navigate("/sign_in");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <Toaster position="top-right" />
      <div className="hidden lg:flex items-center justify-center w-full basis-8/12">
        <img
          src="https://i.ibb.co.com/HLmGB8Fx/64e78d2cd51524aaf4f8ce12-64e78d0d294a3db1449d0c31-Do-I-need-identity-theft-protection-lead-image.webp"
          alt="illustration"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center w-full basis-6/12">
        <div className="w-full max-w-lg p-10 shadow-gray-300 shadow-md">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="relative overflow-hidden w-[80px] mb-10 flex gap-2 items-center justify-center border border-tagline text-tagline font-medium py-1 px-3 rounded-full transition-colors duration-200 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-700/10 hover:cursor-pointer before:transition-all before:duration-500 hover:before:w-full"
            >
              <span className="relative z-10 flex gap-1 items-center">
                <MdKeyboardBackspace size={18} />
                Back
              </span>
            </button>

            <div>
              <h1 className="text-3xl font-semibold text-title mb-2 capitalize">
                Reset Password
              </h1>
              <p className="text-tagline text-sm">
                Enter your a new password containing minimum of 6 characters to
                continue.
              </p>
            </div>
          </div>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* New Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type={showNew ? "text" : "password"}
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-title"
                placeholder="Enter new password"
              />
              <span
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              >
                {showNew ? <FiEyeOff size={16} /> : <FaRegEye size={16} />}
              </span>
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-title"
                placeholder="Confirm new password"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              >
                {showConfirm ? <FiEyeOff size={16} /> : <FaRegEye size={16} />}
              </span>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="relative overflow-hidden w-full bg-title text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gray-200/10 hover:cursor-pointer before:transition-all before:duration-500 hover:before:w-full"
            >
              <span className="relative z-10">Reset Password</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
