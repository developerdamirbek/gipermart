import React from "react";
import { useForm } from "react-hook-form";
import { saveState } from "../../../lib/storage";
import { request } from "../../../config/request";

export const Register = ({ closeModal }) => {
    const { register, reset, handleSubmit } = useForm();
    const submit = (data) => {
        request.post("/register", data).then((res) => {
            if (res.data) {
                saveState("user", res.data);
                closeModal();
            }
        });
    };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col mb-3">
        <input
          {...register("name")}
          placeholder="Name"
          className="border max-sm:text-[16px] text-black text-[20px] bg-transparent rounded-md border-blue-400 p-3 outline-none"
          type="text"
        />
      </div>
      <div className="flex flex-col mb-3">
        <input
          {...register("email")}
          className="border max-sm:text-[16px] text-black text-[20px] bg-transparent rounded-md border-blue-400 p-3 outline-none"
          placeholder="Email"
          type="email"
        />
      </div>
      <div className="flex flex-col mb-3">
        <input
          {...register("password")}
          className="border max-sm:text-[16px] text-black text-[20px] bg-transparent rounded-md border-blue-400 p-3 outline-none"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        className="p-4 text-white text-[22px] max-sm:text-[18px] max-sm:py-3 rounded-lg w-[100%] mt-8 bg-[#299efe] mb-5"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
