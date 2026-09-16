
import { InputComponent } from "../ui/form/Input"
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { FormLabel } from "../ui/form/Label";
import { useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useAuth } from "../../Library/hook/useAuth"

import { LoginDTO, type CredentialsType } from "../../Library/types/AuthContract";

export const LoginForm = () => {

  const { control, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginDTO)
  })

  const navigate = useNavigate();

  const {login} = useAuth()
 
  const submitHandle = async (data: CredentialsType) => {

    // API Server

    try {
      const response = await login(data);
      
      toast.success("Login Success!", {
        description: `welcome to user panel, ${response?.firstName}! Access to the service from sidebar.`
      });
      navigate('/user-dashboard')

    } catch (exception) {

      toast.error("Login Failed!!",{
        description: exception.data.message
      })


    }



  };
  console.log(errors)


  return (
    <form onSubmit={handleSubmit(submitHandle)} className="flex flex-col w-full gap-5">

      <div className="w-full flex items-center">
        <FormLabel htmlFor="username">Username: </FormLabel>
        <div className="w-2/3">
          <InputComponent control={control} type="text" name="username" placeholder="Enter Your username..." errMsg={errors?.username?.message} />
        </div>
      </div>

      <div className="w-full flex items-center">
        <FormLabel htmlFor="password">Password: </FormLabel>
        <div className="w-2/3">
          <InputComponent control={control} type="password" name="password" placeholder="Enter Your Passwrod..." errMsg={errors?.password?.message} />
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
          className="disabled:cursor-not-allowed disabled:bg-red-900/50 w-full p-2 rounded-lg text-white font-semibold bg-red-800 hover:bg-red-900 
                            hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center"
          type="reset"
        >
          <Icon icon={"fa7-solid:undo"} width={20} />
          Cancel
        </button>
        <button
          disabled={isSubmitting}
          className="disabled:cursor-not-allowed disabled:bg-teal-900/50 w-full p-2 rounded-lg text-white font-semibold bg-teal-800 hover:bg-teal-900 
                            hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center"
          type="submit"
        >
          <Icon icon={"fa7-solid:paper-plane"} width={20} />
          Submit
        </button>
      </div>
    </form>
  );
}