import { ReactNode, useEffect, useState } from "react";
import { AccountProps } from "../model/types";
import account from "../pages/api/account";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [account, setAccount] = useState<AccountProps>({
    username: "",
    avatar: {
      url: "",
    },
  });
  useEffect(() => {
    fetch("/api/account", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then<{ account: AccountProps }>((data) => data.json())
      .then(({ account }) => setAccount(account));
  }, []);
  return (
    <div className="bg-gray-900 text-white">
      <Navbar account={account} />
      {children}
    </div>
  );
};
export default Layout;
