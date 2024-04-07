import Link from "next/link";
import Links from "./links/Links";

const Navbar = async () => {
  return (
    <div className="sticky absolute z-20 top-0 h-[70px] flex items-center justify-between mx-0 border-b border-2 bg-white px-10">
      <Link href="/" className="font-bold text-2xl">
        Logo
      </Link>

      <Links />
    </div>
  );
};

export default Navbar;
