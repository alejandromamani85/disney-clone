import Link from "next/link";
import Image from "next/image";
import logo from "../../public/disney-logo.png";
import { IconHome } from "./icons";

type NavbarProps = {
  account: {
    username: string;
    avatar: { url: string };
  };
};

type ButtonNavbarProps = {
  children: React.ReactNode;
};

const ButtonNavbar = ({ children }: ButtonNavbarProps) => (
  <div className="text-sm font-semibold mx-4">{children}</div>
);

const Navbar = ({ account }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center px-6 h-20 w-full bg-black">
      <div className="w-20">
        <Link href="/">
          <a>
            <Image src={logo} alt="Disney Logo" />
          </a>
        </Link>
      </div>
      <div className="w-full flex px-10">
        <ButtonNavbar>HOME</ButtonNavbar>
        <ButtonNavbar>SEARCH</ButtonNavbar>
        <ButtonNavbar>WATCHLIST</ButtonNavbar>
        <ButtonNavbar>ORIGINALS</ButtonNavbar>
        <ButtonNavbar>MOVIES</ButtonNavbar>
        <ButtonNavbar>SERIES</ButtonNavbar>
      </div>
      <div className="flex shrink-0 content-center items-center">
        <span className="pr-4 uppercase">{account.username} </span>
        <img className="w-12 h-12 rounded-full" src={account.avatar.url} />
      </div>
    </nav>
  );
};

export default Navbar;
