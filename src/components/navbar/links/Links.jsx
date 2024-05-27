"use client";
import { useState, useContext } from "react";
import NavLink from "./navLink/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { LoginNavButton, LogoutNavButton } from "./navButton/NavButton";
import { handleLogout } from "@/lib/action";

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

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const currentUser = false;

  return (
    <div className="">
      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button>Logout</button>
            </form>
          </>
        ) : (
          <LoginNavButton />
        )}
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
        bg-orange-100 flex flex-col items-center justify-center gap-10 "
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
