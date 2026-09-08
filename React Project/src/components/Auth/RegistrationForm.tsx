
import { InputComponent } from "../ui/form/Input";
import { PageTitle2 } from "../ui/typography/Title";
import { NavLink } from "react-router/internal/react-server-client";

export const RegistrationForm = () => {

  // Data store for submission
  // event manage
  // validate data
  // 


  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-10">

      {/* Main Registration Container */}
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <PageTitle2
            title="Registration Form"
            className="text-center text-teal-950 text-2xl font-bold"
          />

          <p className="mt-3 text-teal-900 font-semibold text-sm sm:text-base">
            Create a new account to get started!
          </p>
        </div>

        {/* Registration Form */}
        <form
          className="w-full space-y-5"
        >

          {/* Full Name */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="fullname"
              className="w-28 shrink-0 text-sm sm:text-base text-teal-950 font-semibold"
            >
              Full Name:
            </label>

            <div className="flex-1">
              <InputComponent
                type="text"
                name="fullname"
                placeholder="Enter Your full name..."
                onChange={() => { }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="email"
              className="w-28 shrink-0 text-sm sm:text-base text-teal-950 font-semibold"
            >
              Email:
            </label>

            <div className="flex-1">
              <InputComponent
                type="email"
                name="email"
                placeholder="Enter Your Email..."
                onChange={() => { }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="password"
              className="w-28 shrink-0 text-sm sm:text-base text-teal-950 font-semibold"
            >
              Password:
            </label>

            <div className="flex-1">
              <InputComponent
                type="password"
                name="password"
                placeholder="Enter Your Password..."
                onChange={() => { }}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="confirmPassword"
              className="w-28 shrink-0 text-sm sm:text-base text-teal-950 font-semibold"
            >
              Confirm Password:
            </label>

            <div className="flex-1">
              <InputComponent
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password..."
                onChange={() => { }}
              />
            </div>
          </div>



          <div className="flex items-center gap-3">
            <label
              htmlFor="usertypes"
              className="w-28 shrink-0 text-sm sm:text-base text-teal-950 font-semibold"
            >
              User Role
            </label>

            <div className="flex-1">
              <select
                id="role"
                name="role"
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-teal-950"
              >
                <option value="" disabled>
                  ~~ Select Role ~~
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="usertypes"
              className="w-28 shrink-0 text-sm sm:text-base text-teal-950 font-semibold"
            >
              Gender
            </label>

            <div className="w-2/3 flex gap-3">
              <label htmlFor="male" className="flex gap-1 items-center">
                <input type="radio" className="size-4" id="male" name="gender" value={"male"} />{" "}Male
              </label>
              <label htmlFor="male" className="flex gap-1 items-center">
                <input type="radio" className="size-4" id="female" name="gender" value={"female"} />{" "}Female
              </label>
              <label htmlFor="male" className="flex gap-1 items-center">
                <input type="radio" className="size-4" id="oters" name="gender" value={"others"} />{" "}Others
              </label>


            </div>
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="usertypes"
              className="w-28 shrink-0 text-sm sm:text-base text-teal-950 font-semibold"
            >
              Address
            </label>

            <div className="w-2/3 ">
            <textarea className="" name="address" id="" placeholder="Enter your address"></textarea>
      


            </div>

          </div>


          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"

              className="bg-teal-950 text-white px-6 py-3 rounded-full
                         font-medium
                         hover:bg-teal-800
                         disabled:bg-gray-400
                         disabled:cursor-not-allowed
                         transition-all duration-300
                         shadow-sm hover:shadow-md"
            >
              Submit

            </button>
          </div>

          {/* Login */}
          <div className="flex justify-center items-center gap-2 pt-3 text-sm sm:text-base">
            <span className="text-gray-800">
              Already have an account?
            </span>

            <NavLink
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </NavLink>
          </div>

        </form>
      </div>
    </div>
  );
};