import disneyLogo from "../../public/disney-button.png";
import natgeoLogo from "../../public/natgeo-button.png";
import starwarsLogo from "../../public/starwars-button.png";
import pixarLogo from "../../public/pixar-button.png";
import marvelLogo from "../../public/marvel-button.png";
import BrandCard from "./brand-card";

export const FranchiseSection = () => (
  <>
    <div className="hidden sm:grid sm:grid-cols-5 sm:gap-6">
      <BrandCard src={disneyLogo} href="#disney" />
      <BrandCard src={pixarLogo} href="#pixar" />
      <BrandCard src={marvelLogo} href="#marvel" />
      <BrandCard src={starwarsLogo} href="#starwars" />
      <BrandCard src={natgeoLogo} href="#natgeo" />
    </div>
    <div className="grid grid-cols-6 gap-4 sm:hidden">
      <BrandCard src={disneyLogo} href="#disney" className="col-span-2" />
      <BrandCard src={pixarLogo} href="#pixar" className="col-span-2" />
      <BrandCard src={marvelLogo} href="#marvel" className="col-span-2" />
      <BrandCard src={starwarsLogo} href="#starwars" className="col-span-2 col-start-2" />
      <BrandCard src={natgeoLogo} href="#natgeo" className="col-span-2 col-start-4" />
    </div>
  </>
);
