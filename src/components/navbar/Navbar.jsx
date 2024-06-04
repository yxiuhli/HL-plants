import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";
import { LoginNavButton, LogoutNavButton } from "./links/navButton/NavButton";
import { handleLogout } from "@/lib/action";
import NavLink from "./links/navLink/NavLink";
import CartButton from "../cartItem/cartButton/CartButton";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="sticky absolute z-20 top-0 h-[70px] flex items-center justify-between border-solid border-0 border-b border-blue-900/10 bg-[#fffbf6] px-10 font-[Avantgarde]">
      <div className="flex items-center gap-1">
        <img src="/favicon.ico" className="w-7 mb-1" alt="" />
        <Link href="/" className="font-bold text-2xl font-serif text-teal-800">
          HL-Plants
        </Link>
      </div>

      <Links />
      <div className="flex  items-center">
      {session?.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
        <CartButton />
        {session?.user ? (
          <>
            
            <form action={handleLogout}>
              <LogoutNavButton className="w-20">Logout</LogoutNavButton>
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
