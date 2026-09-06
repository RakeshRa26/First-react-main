
import { PageTitle2 } from "../ui/typography/Title"



const ForgotPassword = () => {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Header */}
        <div className="mb-8 text-center">
           <PageTitle2 title="Forget Password" />

          <p className="mt-2 text-sm text-gray-500">
            Enter your email address and we'll send you a link to reset
            your password.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                         outline-none transition
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

    

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3
                       font-semibold text-white transition
                       hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Login
          </a>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;