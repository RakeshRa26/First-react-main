
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputComponent,
  MultipleChoice,
  SelectComponent,
} from "../ui/form/Input";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button/Button";

const RegisterDTO = z
  .object({
    fullName: z
      .string()
      .min(2, "Fullname must have at least 2 characters")
      .max(50, "Fullname cannot have more than 50 characters"),

    email: z
      .string()
      .email("Invalid email format")
      .min(1, "Email is required"),

    password: z
      .string()
      .min(8, "Password must have at least 8 characters")
      .max(32, "Password cannot have more than 32 characters"),

    confirmPassword: z
      .string()
      .min(8, "Confirm password must have at least 8 characters")
      .max(32, "Confirm password cannot have more than 32 characters"),

    role: z.string().min(1, "Role is required"),

    gender: z.string().min(1, "Gender is required"),

    address: z.string().optional(),

    image: z
      .instanceof(FileList)
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterDataType = z.infer<typeof RegisterDTO>;

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDataType>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      role: "",
      address: "",
    },

    resolver: zodResolver(RegisterDTO),
  });

  const registerUser = (data: RegisterDataType) => {
    console.log(data);
  };

  return (
    <section className="w-full overflow-y-scroll">
      <form
        onSubmit={handleSubmit(registerUser)}
        className="w-full max-w-4xl mx-auto flex flex-col gap-4 px-2 sm:px-4"
      >
        {/* Full Name */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="fullName"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold wrap-break-word"
          >
            Full Name:
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <InputComponent
              type="text"
              name="fullName"
              placeholder="Enter your fullname..."
              control={control}
              errMsg={errors.fullName?.message}
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="email"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold wrap-break-word"
          >
            Email (Username):
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <InputComponent
              control={control}
              type="email"
              name="email"
              placeholder="Enter your email..."
              errMsg={errors.email?.message}
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="password"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold"
          >
            Password:
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <InputComponent
              control={control}
              type="password"
              name="password"
              placeholder="Enter your password..."
              errMsg={errors.password?.message}
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="confirmPassword"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold wrap-break-word"
          >
            Re-Type Password:
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <InputComponent
              control={control}
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password..."
              errMsg={errors.confirmPassword?.message}
            />
          </div>
        </div>

        {/* Role */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="role"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold wrap-break-word"
          >
            User Type (Role):
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <SelectComponent
              name="role"
              control={control}
              errMsg={errors.role?.message}
              options={[
                {
                  label: "Buyer",
                  value: "customer",
                },
                {
                  label: "Seller",
                  value: "seller",
                },
              ]}
            />
          </div>
        </div>

        {/* Gender */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="gender"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold"
          >
            Gender:
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <MultipleChoice
              control={control}
              name="gender"
              errMsg={errors.gender?.message}
              options={[
                {
                  label: "Male",
                  value: "male",
                },
                {
                  label: "Female",
                  value: "female",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ]}
            />
          </div>
        </div>

        {/* Address */}
        <div className="w-full flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
          <label
            htmlFor="address"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold"
          >
            Address:
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <textarea
              id="address"
              {...register("address")}
              placeholder="Enter your address..."
              rows={4}
              className="
                w-full
                min-w-0
                border border-gray-300
                bg-gray-50
                p-3
                rounded-lg
                shadow-sm
                resize-none
                outline-none
                focus:ring-2
                focus:ring-teal-500
              "
            />

            {errors.address?.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="image"
            className="w-full md:w-1/3 text-base sm:text-lg font-semibold"
          >
            Image:
          </label>

          <div className="w-full md:w-2/3 min-w-0">
            <input
              id="image"
              type="file"
              accept="image/*"
              {...register("image")}
              className="
                w-full
                min-w-0
                border border-gray-300
                bg-gray-50
                p-2
                rounded-lg
                shadow-sm
                text-sm
              "
            />

            {errors.image?.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.image.message}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
          <Button type="reset" disabled={isSubmitting}>
            <Icon icon="fa7-solid:undo" width={18} />
            Reset
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            <Icon icon="fa7-solid:paper-plane" width={18} />
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </section>
  );
}

