"use client";

import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <Typography variant="h4" className="font-[cursive]">Login</Typography>
      <input className="p-2" type="text" placeholder="username" name="username" />
      <input className="p-2" type="password" placeholder="password" name="password" />
      <Button type="submit" color="lg" variant="contained" className="p-2">Login</Button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b className="text-blue-700">Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
