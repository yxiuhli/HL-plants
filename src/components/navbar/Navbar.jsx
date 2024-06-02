import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";
import { LoginNavButton, LogoutNavButton } from "./links/navButton/NavButton";
import { handleLogout } from "@/lib/action";
import NavLink from "./links/navLink/NavLink";
import CartButton from "../cartButton/CartButton";


const Navbar = async () => {
  const session = await auth();
  return (
    <div className="sticky absolute z-20 top-0 h-[70px] flex items-center justify-between border-solid border-0 border-b border-blue-900/10 bg-[#fffbf6] px-10 font-[Avantgarde]">
      <Link href="/" className="font-bold text-2xl font-serif text-teal-800">
        HL-Plants
      </Link>
      <Links />
      <div className="flex items-center">

        <CartButton/>
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="w-16">Logout</button>
            </form>
          </>
        ) : (
          <LoginNavButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
