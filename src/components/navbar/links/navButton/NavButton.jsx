import Link from "next/link";
import {Button } from "@mui/material"


export const LoginNavButton = () => {
  return (
    <Link href="/login">
      <Button
        variant="outlined"
        color="black"
        className="hidden md:block p-2 min-w-24 rounded-xl"
      >
        Login
      </Button>
    </Link>
  );
};

export const LogoutNavButton = () => {

  return (
      <Button
        variant="outlined"
        color="black"
        className="hidden md:block p-2 cursor-pointer"
      >
        Logout
      </Button>
  );
};
