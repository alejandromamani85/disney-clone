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
  <div className="group flex h-full items-center p-3 text-sm font-semibold lg:p-4">
    {children}
  </div>
);

const TextUnderlined = ({ children }: { children: ReactNode }) => (
  <span className="lg:before:link-underline lg:group-hover:before:link-underline-hover hidden lg:relative lg:block lg:rounded-sm lg:leading-9">
    {children}
  </span>
);

const IconUnderlined = ({ children }: { children: ReactNode }) => (
  <>
    <span className="before:link-underline group-hover:before:link-underline-hover relative flex items-center rounded-sm lg:hidden">
      {children}
    </span>
    <div className="hidden lg:mr-4 lg:block">{children}</div>
  </>
);

const Navbar = ({ account }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 w-full">
      <nav className="flex h-[4.5rem] w-full items-stretch justify-between bg-black px-4 lg:h-20 lg:px-9">
        <div className="mr-6 flex items-center">
          <Link href="/">
            <a>
              <DisneyIcon className="w-16 md:w-20" />
            </a>
          </Link>
        </div>
        <div className="flex w-full px-0 md:px-4 lg:px-10">
          <Link href="/">
            <a>
              <ButtonNavbar>
                <IconUnderlined>
                  <HomeIcon className="my-2 h-6 w-6 lg:my-0 lg:h-5 lg:w-5" />
                </IconUnderlined>
                <TextUnderlined>HOME</TextUnderlined>
              </ButtonNavbar>
            </a>
          </Link>
          <Link href="/">
            <a>
              <ButtonNavbar>
                <IconUnderlined>
                  <SearchIcon className="my-2 h-6 w-6 lg:my-0 lg:h-5 lg:w-5" />
                </IconUnderlined>
                <TextUnderlined>SEARCH</TextUnderlined>
              </ButtonNavbar>
            </a>
          </Link>
          <Link href="/">
            <a>
              <ButtonNavbar>
                <IconUnderlined>
                  <PlusIcon className="my-2 h-6 w-6 lg:my-0 lg:h-5 lg:w-5" />
                </IconUnderlined>
                <TextUnderlined>WATCHLIST</TextUnderlined>
              </ButtonNavbar>
            </a>
          </Link>
          <div className="lg:hidden">
            <ButtonNavbar>
              <MoreIcon className="my-2 h-6 w-6 lg:my-0 lg:h-5 lg:w-5" />
              <TextUnderlined>WATCHLIST</TextUnderlined>
            </ButtonNavbar>
          </div>
          <div className="hidden lg:flex">
            <Link href="/">
              <a>
                <ButtonNavbar>
                  <IconUnderlined>
                    <StarIcon className="my-2 h-6 w-6 lg:my-0 lg:h-5 lg:w-5" />
                  </IconUnderlined>
                  <TextUnderlined>ORIGINALS</TextUnderlined>
                </ButtonNavbar>
              </a>
            </Link>
            <Link href="/">
              <a>
                <ButtonNavbar>
                  <IconUnderlined>
                    <MoviesIcon className="my-2 h-6 w-6 lg:my-0 lg:h-5 lg:w-5" />
                  </IconUnderlined>
                  <TextUnderlined>MOVIES</TextUnderlined>
                </ButtonNavbar>
              </a>
            </Link>
            <Link href="/">
              <a>
                <ButtonNavbar>
                  <IconUnderlined>
                    <SeriesIcon className="my-2 h-6 w-6 lg:my-0 lg:h-5 lg:w-5" />
                  </IconUnderlined>
                  <TextUnderlined>SERIES</TextUnderlined>
                </ButtonNavbar>
              </a>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 px-4 py-3 md:p-4 lg:px-9">
          <div className="flex items-center">
            <span className="hidden pr-4 uppercase xl:block">
              {account.username}{" "}
            </span>
            <img className="h-12 w-12 rounded-full" src={account.avatar.url} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
