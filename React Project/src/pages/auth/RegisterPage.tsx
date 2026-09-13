import { NavLink } from "react-router";
import { PageTitle2 } from "../../components/ui/typography/Title";
import RegisterForm from "../../components/Auth/RegistrationForm";

export default function RegisterPage() {
  return (
    <>
      <div className="w-full h-[90vh] flex flex-col gap-3 px-5 top-2 relative ">
        <PageTitle2 title="Sign Up" className="text-teal-950 text-center" />
        <hr className="border-teal-900"/>

        {/* Design try for Register form */}
        <RegisterForm />

        <p className="text-lg font-semibold text-center">Or</p>

        <div className="w-full">
          <NavLink
            to="/"
            className="w-full flex justify-center items-center p-2 rounded-full border border-teal-800 
                          text-teal-700 hover:bg-teal-50 hover:scale-102 transition duration-300"
          >
            Login From Here
          </NavLink>
        </div>
      </div>
    </>
  );
}