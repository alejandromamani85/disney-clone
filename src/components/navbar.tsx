import Link from "next/link";
import Image from "next/image";
import logo from "../../public/disney-logo.png";

type AccountProps = {
  username: string;
  avatar: { url: string };
};

const Navbar = ({ account }: { account: AccountProps }) => {
  return (
    <div className="flex justify-between items-center px-8 h-20">
      <div className="w-20">
        <Link href="/">
          <a>
            <Image src={logo} alt="Disney Logo" />
          </a>
        </Link>
      </div>
      <div className="flex content-center items-center">
        <span className="pr-4">Welcome {account.username} </span>
        <img className="w-12 h-12 rounded-full" src={account.avatar.url} />
      </div>
    </div>
  );
};

export default Navbar;
