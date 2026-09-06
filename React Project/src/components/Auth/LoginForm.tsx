import { useState, type BaseSyntheticEvent } from "react";
import {InputComponent} from "../ui/form/Input"
import { PageTitle2 } from "../ui/typography/Title";
import { Icon } from "@iconify/react";

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(credentials)


  const handleUsernameChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  return (

     <section className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-5 border border-gray-200 rounded-lg w-7xl flex">
        <div className="w-full h-[80vh] relative overflow-hidden bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1773332585771-5c9c5fa642d1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
          <div className="absolute inset-0  bg-teal-950/40"></div>

          <div className="absolute inset-0 flex flex-col justify-center p-10 z-10 ">
            <div className="bg-white/60 backdrop-blur-sm p-10 rounded-lg text-center justify-center items-center flex flex-col gap-5">
              <div className="size-25">
                <img
                  src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="logo"
                  className="size-20 rounded-full"
                />
              </div>

              <PageTitle2 title="Welcome to CMS" />

              <div>
                <p>Welcome! Please log in to access your dashboard.</p>
                <p>Manage your content quickly and securely with our CMS.</p>
              </div>
            </div>
          </div >
        </div >
        {/* Login Form */}

        <div className="w-full h-[80vh] flex flex-col gap-5 px-5 top-10 relative">
    <PageTitle2 title="Sign In" className="text-center text-teal-900" />
    <form action="" className="flex flex-col w-full gap-5">
      <div className="w-full flex items-center">
        <label htmlFor="username" className="w-1/3 text-lg font-semibold">
          Username:
        </label>
        <div className="w-2/3">
          <input 
            type='text'
            onChange={handleUsernameChange}
            name='username'
            className="border border-gray-300 bg-gray-50 w-full p-2 rounded-lg shadow-lg"
            placeholder='Enter your username...'
          />

          {/* <InputComponent
            type="text"
            name="username"
            placeholder="Enter Your username..."
          /> */}
        </div>
      </div>

      <div className="w-full flex items-center">
        <label htmlFor="password" className="w-1/3 text-lg font-semibold">
          Password:
        </label>
        <div className="w-2/3">
          <InputComponent
            type="password"
            name="password"
            placeholder="Enter Your Passwrod..."
            onChange={handleUsernameChange}
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-end">
        <a
          className="text-sm text-teal-800 italic underline hover:scale-102 transition duration-300"
          href="/forget-password"
        >
          Forget Password?
        </a>
      </div>

      <div className="w-full flex gap-3 items-center">
        <button
          disabled={isSubmitting}
          className="w-full p-2 rounded-lg text-white font-semibold bg-red-800 hover:bg-red-900 
                            hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center"
          type="reset"
        >
          <Icon icon="ci:undo" width={20} />
          
          Cancel
        </button>
        <button
          disabled={isSubmitting}
          className="w-full p-2 disabled:bg-red-700-opacity-50 rounded-lg text-white font-semibold bg-teal-800 hover:bg-teal-900 
                            hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center "
          type="submit"
        >
          <Icon icon="formkit:submit" width={20} />
          Submit
        </button>

      </div>

      <div className="w-full flex items-center justify-center">
        <button className="text-sm text-teal-800 italic">
          Don't have an account?{" "}
          <a
            className="text-sm text-teal-800 italic underline hover:scale-102 transition duration-300"
            href="/register"
          >
            Register
          </a>
        </button>
      </div>
    </form>
    </div>
        
       
      </div >
    </section >

    
  );
}
