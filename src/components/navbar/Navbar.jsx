import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="sticky absolute z-20 top-0 h-[70px] flex items-center justify-between border-solid border-0 border-b border-blue-900/10 bg-[#fffbf6] px-10 font-[Avantgarde]">
      <Link href="/" className="font-bold text-2xl">
        <img src="/Logo-HL.png" alt="Logo" className="w-16" />
      </Link>
      <Links session={session}/>
    </div>
  );
};

export default Navbar;
