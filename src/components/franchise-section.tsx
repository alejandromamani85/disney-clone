import disneyLogo from "../../public/disney-button.png";
import natgeoLogo from "../../public/natgeo-button.png";
import starwarsLogo from "../../public/starwars-button.png";
import pixarLogo from "../../public/pixar-button.png";
import marvelLogo from "../../public/marvel-button.png";
import BrandCard from "./brand-card";

export const FranchiseSection = () => (
  <div className="grid grid-cols-5 gap-x-4">
    <a href="#disney">
      <BrandCard src={disneyLogo} />
    </a>
    <a href="#pixar">
      <BrandCard src={pixarLogo} />
    </a>
    <a href="#marvel">
      <BrandCard src={marvelLogo} />
    </a>
    <a href="#starwars">
      <BrandCard src={starwarsLogo} />
    </a>
    <a href="#natgeo">
      <BrandCard src={natgeoLogo} />
    </a>
  </div>
);
