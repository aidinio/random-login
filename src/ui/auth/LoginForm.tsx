"use client";

import Input from "@/components/Input";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./auth.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector, useAppStore } from "@/store/hooks";
import { login, logout } from "@/store/slices/user";
import { FormFields, formSchema } from "@/types/form";
import { IUser } from "@/types/api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { selectIsLoggedIn } from "@/store/selectors";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    isLoading,
    onSubmit,
  } = useLoginForm();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      redirect("/dashboard");
    }
  },[isLoggedIn])
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("phone")} error={errors.phone?.message}>
        <PhoneIcon />
      </Input>
      <button
        disabled={Boolean(errors.phone) || isSubmitting || isLoading}
        className="button"
      >
        Login
      </button>
    </form>
  );
}

async function fetchData() {
  const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
  if (!response.ok) {
    throw new Error(`Failed response with status: ${response.status}`);
  }
  return (await response.json()).results[0] as IUser;
}
 
function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({ resolver: zodResolver(formSchema) });
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState<string | null>(null);
  const { isLoading } = useQuery({
    queryKey: ["user", number],
    queryFn: async () => {
      const data = await fetchData();
      dispatch(login(data));
      return data;
    },
    enabled: isSubmitSuccessful,
  });
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setNumber(data.phone);
  };
  return {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    isLoading,
    onSubmit,
  };
}
