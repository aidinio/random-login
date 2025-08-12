"use client";

import Input from "@/components/Input";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./auth.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  phone: z.string().startsWith("09", "Phone should start with 09").length(11, "Phone should have 11 digits2"),
});

type FormFields = z.infer<typeof formSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({resolver: zodResolver(formSchema)});
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("phone")} error={errors.phone?.message}>
        <PhoneIcon />
      </Input>
      <button disabled={isSubmitting} className="button">
        Login
      </button>
    </form>
  );
}
