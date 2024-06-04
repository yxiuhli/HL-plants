"use client";

import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <Typography variant="h4" className="font-[cursive]">Register</Typography>
      <input className="p-2" type="text" placeholder="username" name="username" />
      <input className="p-2" type="email" placeholder="email" name="email" />
      <input className="p-2" type="password" placeholder="password" name="password" />
      <input
      className="p-2"
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <Button type="submit" color="lg" variant="contained" className="p-2">Register</Button>
      {state?.error}
      <Link href="/login">
        Have an account? <b className="text-blue-700">Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
