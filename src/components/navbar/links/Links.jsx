"use client";
import { useState, useContext } from "react";
import NavLink from "./navLink/NavLink";
import { AuthContext } from "@/context/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { LoginNavButton, LogoutNavButton } from "./navButton/NavButton";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Plants",
    path: "/plants",
  },
  {
    title: "Accessories",
    path: "/accessories",
  },
  {
    title: "About",
    path: "/about",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //const { currentUser, updateUser } = useContext(AuthContext);
  const currentUser = false;

  return (
    <div className="">
      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {currentUser ? <LogoutNavButton /> : <LoginNavButton />}
      </div>
      <div onClick={() => setOpen((prev) => !prev)}>
        {open ? (
          <XMarkIcon className="h-12 w-12 md:hidden block cursor-pointer p-2" />
        ) : (
          <Bars3Icon className="h-12 w-12 md:hidden block cursor-pointer p-2" />
        )}
      </div>
      {open && (
        <div
          className="md:hidden absolute top-[70px] right-0 w-1/2 h-[calc(100vh-70px)] 
        bg-gray-200 flex flex-col items-center justify-center gap-10 "
        >
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
