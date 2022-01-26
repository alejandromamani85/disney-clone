import Link from "next/link";
import {
  DisneyIcon,
  HomeIcon,
  MoreIcon,
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
  <div className="group text-sm font-semibold p-3 flex items-center h-full lg:p-4">
    {children}
  </div>
);

const TextUnderlined = ({ children }: { children: ReactNode }) => (
  <span className="hidden lg:block lg:relative lg:before:link-underline lg:group-hover:before:link-underline-hover lg:leading-9 lg:rounded-sm">
    {children}
  </span>
);

const IconUnderlined = ({ children }: { children: ReactNode }) => (
  <>
    <span className="relative before:link-underline group-hover:before:link-underline-hover rounded-sm lg:hidden flex items-center">
      {children}
    </span>
    <div className="hidden lg:block lg:mr-4">{children}</div>
  </>
);

const Navbar = ({ account }: NavbarProps) => {
  return (
    <header className="w-full sticky top-0 z-10">
      <nav className="flex justify-between items-stretch px-4 h-[4.5rem] w-full bg-black lg:h-20 lg:px-9">
        <div className="flex items-center mr-6">
          <Link href="/">
            <a>
              <DisneyIcon className="w-16 md:w-20" />
            </a>
          </Link>
        </div>
        <div className="w-full flex px-0 md:px-4 lg:px-10">
          <Link href="/">
            <a>
              <ButtonNavbar>
                <IconUnderlined>
                  <HomeIcon className="w-6 h-6 my-2 lg:w-5 lg:h-5 lg:my-0" />
                </IconUnderlined>
                <TextUnderlined>HOME</TextUnderlined>
              </ButtonNavbar>
            </a>
          </Link>
          <Link href="/">
            <a>
              <ButtonNavbar>
                <IconUnderlined>
                  <SearchIcon className="w-6 h-6 my-2 lg:w-5 lg:h-5 lg:my-0" />
                </IconUnderlined>
                <TextUnderlined>SEARCH</TextUnderlined>
              </ButtonNavbar>
            </a>
          </Link>
          <Link href="/">
            <a>
              <ButtonNavbar>
                <IconUnderlined>
                  <PlusIcon className="w-6 h-6 my-2 lg:w-5 lg:h-5 lg:my-0" />
                </IconUnderlined>
                <TextUnderlined>WATCHLIST</TextUnderlined>
              </ButtonNavbar>
            </a>
          </Link>
          <div className="lg:hidden">
            <ButtonNavbar>
              <MoreIcon className="w-6 h-6 my-2 lg:w-5 lg:h-5 lg:my-0" />
              <TextUnderlined>WATCHLIST</TextUnderlined>
            </ButtonNavbar>
          </div>
          <div className="hidden lg:flex">
            <Link href="/">
              <a>
                <ButtonNavbar>
                  <IconUnderlined>
                    <StarIcon className="w-6 h-6 my-2 lg:w-5 lg:h-5 lg:my-0" />
                  </IconUnderlined>
                  <TextUnderlined>ORIGINALS</TextUnderlined>
                </ButtonNavbar>
              </a>
            </Link>
            <Link href="/">
              <a>
                <ButtonNavbar>
                  <IconUnderlined>
                    <MoviesIcon className="w-6 h-6 my-2 lg:w-5 lg:h-5 lg:my-0" />
                  </IconUnderlined>
                  <TextUnderlined>MOVIES</TextUnderlined>
                </ButtonNavbar>
              </a>
            </Link>
            <Link href="/">
              <a>
                <ButtonNavbar>
                  <IconUnderlined>
                    <SeriesIcon className="w-6 h-6 my-2 lg:w-5 lg:h-5 lg:my-0" />
                  </IconUnderlined>
                  <TextUnderlined>SERIES</TextUnderlined>
                </ButtonNavbar>
              </a>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 px-4 py-3 md:p-4 lg:px-9">
          <div className="flex items-center">
            <span className="hidden xl:block pr-4 uppercase">
              {account.username}{" "}
            </span>
            <img className="w-12 h-12 rounded-full" src={account.avatar.url} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
