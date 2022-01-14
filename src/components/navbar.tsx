import Link from "next/link";
import Image from "next/image";
import logo from "../../public/disney-logo.png";
import {
  HomeIcon,
  MoviesIcon,
  PlusIcon,
  SearchIcon,
  SeriesIcon,
  StarIcon,
} from "./icons";

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
  <div className="text-sm font-semibold mx-4 flex items-center">{children}</div>
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
        <ButtonNavbar>
          <HomeIcon className="w-5 h-5 mr-4" />
          HOME
        </ButtonNavbar>
        <ButtonNavbar>
          <SearchIcon className="w-5 h-5 mr-4" />
          SEARCH
        </ButtonNavbar>
        <ButtonNavbar>
          <PlusIcon className="w-5 h-5 mr-4" />
          WATCHLIST
        </ButtonNavbar>
        <ButtonNavbar>
          <StarIcon className="w-5 h-5 mr-4" />
          ORIGINALS
        </ButtonNavbar>
        <ButtonNavbar>
          <MoviesIcon className="w-5 h-5 mr-4" />
          MOVIES
        </ButtonNavbar>
        <ButtonNavbar>
          <SeriesIcon className="w-5 h-5 mr-4" />
          SERIES
        </ButtonNavbar>
      </div>
      <div className="flex shrink-0 content-center items-center">
        <span className="pr-4 uppercase">{account.username} </span>
        <img className="w-12 h-12 rounded-full" src={account.avatar.url} />
      </div>
    </nav>
  );
};

export default Navbar;
