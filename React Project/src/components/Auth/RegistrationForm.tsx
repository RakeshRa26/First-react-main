import { useState, type BaseSyntheticEvent } from "react";
import { InputComponent } from "../ui/form/Input";
import { PageTitle2 } from "../ui/typography/Title";

export const RegistrationForm = () => {
  const [credentials, setCredentials] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    // Password validation
    if (credentials.password !== credentials.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    setIsSubmitting(true);

    console.log("Registration Data:", credentials);

    // API call can be added here
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Account created successfully!");

      setCredentials({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1000);
  };

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
          onSubmit={handleSubmit}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-950 text-white px-6 py-3 rounded-lg
                         font-medium
                         hover:bg-teal-800
                         disabled:bg-gray-400
                         disabled:cursor-not-allowed
                         transition-all duration-300
                         shadow-sm hover:shadow-md"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </div>

          {/* Login */}
          <div className="flex justify-center items-center gap-2 pt-3 text-sm sm:text-base">
            <span className="text-gray-800">
              Already have an account?
            </span>

            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-gray-200" />

            <span className="text-sm text-gray-500">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full bg-white
                       border border-gray-200
                       text-gray-700
                       font-medium
                       py-3
                       rounded-xl
                       shadow-sm
                       hover:bg-gray-50
                       hover:shadow
                       transition-all duration-300
                       flex items-center justify-center gap-2"
          >
            {/* Google Icon */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />

              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />

              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />

              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            Sign up with Google
          </button>

        </form>
      </div>
    </div>
  );
};