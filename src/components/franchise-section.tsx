import Link from "next/link";
import Image from "next/image";
import disneyLogo from "../../public/disney-button.png";
import natgeoLogo from "../../public/natgeo-button.png";
import starwarsLogo from "../../public/starwars-button.png";
import pixarLogo from "../../public/pixar-button.png";
import marvelLogo from "../../public/marvel-button.png";

export const FranchiseSection = () => (
  <div className="video-feed">
    <Link href="#disney">
      <div className="franchise">
        <Image src={disneyLogo} />
      </div>
    </Link>
    <Link href="#pixar">
      <div className="franchise">
        <Image src={pixarLogo} />
      </div>
    </Link>
    <Link href="#marvel">
      <div className="franchise">
        <Image src={marvelLogo} />
      </div>
    </Link>
    <Link href="#starwars">
      <div className="franchise">
        <Image src={starwarsLogo} />
      </div>
    </Link>
    <Link href="#natgeo">
      <div className="franchise">
        <Image src={natgeoLogo} />
      </div>
    </Link>
  </div>
);
