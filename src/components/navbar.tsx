import Link from "next/link";
import {
  DisneyIcon,
  HomeIcon,
  MoviesIcon,
  PlusIcon,
  SearchIcon,
  SeriesIcon,
  StarIcon,
} from "./icons";
import { ReactNode } from "react";

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
  <div className="group text-sm font-semibold p-4 flex items-center">
    {children}
  </div>
);

const LinkUnderlined = ({ children }: { children: ReactNode }) => (
  <span className="relative before:link-underline group-hover:before:link-underline-hover leading-9 rounded-sm">
    {children}
  </span>
);

const Navbar = ({ account }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-stretch px-9 h-20 w-full bg-black">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <DisneyIcon className="w-20" />
          </a>
        </Link>
      </div>
      <div className="w-full flex px-10">
        <ButtonNavbar>
          <HomeIcon className="w-5 h-5 mr-4" />
          <LinkUnderlined>HOME</LinkUnderlined>
        </ButtonNavbar>
        <ButtonNavbar>
          <SearchIcon className="w-5 h-5 mr-4" />
          <LinkUnderlined>SEARCH</LinkUnderlined>
        </ButtonNavbar>
        <ButtonNavbar>
          <PlusIcon className="w-5 h-5 mr-4" />
          <LinkUnderlined>WATCHLIST</LinkUnderlined>
        </ButtonNavbar>
        <ButtonNavbar>
          <StarIcon className="w-5 h-5 mr-4" />
          <LinkUnderlined>ORIGINALS</LinkUnderlined>
        </ButtonNavbar>
        <ButtonNavbar>
          <MoviesIcon className="w-5 h-5 mr-4" />
          <LinkUnderlined>MOVIES</LinkUnderlined>
        </ButtonNavbar>
        <ButtonNavbar>
          <SeriesIcon className="w-5 h-5 mr-4" />
          <LinkUnderlined>SERIES</LinkUnderlined>
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
