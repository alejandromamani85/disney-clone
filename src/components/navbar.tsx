import Link from "next/link";
import Image from "next/image";
import logo from "../../public/disney-logo.png";

type AccountProps = {
  username: string;
  avatar: { url: string };
};

const Navbar = ({ account }: { account: AccountProps }) => {
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <a href="/">
          <Image src={logo} alt="Disney Logo" width={90} height={50} />
        </a>
      </div>
      <div className="account-info">
        <p>Welcome {account.username}</p>
        <img className="avatar" src={account.avatar.url} />
      </div>
    </div>
  );
};

export default Navbar;
