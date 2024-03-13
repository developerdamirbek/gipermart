// Login.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { saveState } from "../../../lib/storage";
import { request } from "../../../config/request";
import { toast } from "react-toastify";

export const Login = ({ close }) => {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    try {
      const response = await request.post("/users", data);
      if (response.data) {
        saveState("user", response.data);
        close();
      }
    } catch (error) {
      toast.error("Something went wrong!")
    } finally {
      toast.success("You're logged in successfully!")
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col mb-3">
        <input
          {...register("email")}
          className="border bg-transparent text-black rounded-md max-sm:text-[16px] border-blue-400 p-3 text-[20px] outline-none"
          placeholder="Email"
          type="email"
        />
      </div>
      <div className="flex flex-col mb-3">
        <input
          {...register("password")}
          className="border bg-transparent text-black max-sm:text-[16px] rounded-md border-[#299efe] text-[20px] p-3 outline-none"
          type="password"
          placeholder="Password"
        />
      </div>
      <button className="text-[16px] max-sm:text-[13px] text-[#45a2ff]">Forgot Password</button>
      <button
        className="p-4 text-white text-[22px] max-sm:text-[18px] max-sm:py-3 rounded-lg w-[100%] mt-8 bg-[#299efe] mb-4"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};
