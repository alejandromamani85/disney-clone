import disneyLogo from "../../public/disney-button.png";
import natgeoLogo from "../../public/natgeo-button.png";
import starwarsLogo from "../../public/starwars-button.png";
import pixarLogo from "../../public/pixar-button.png";
import marvelLogo from "../../public/marvel-button.png";
import BrandCard from "./brand-card";

export const FranchiseSection = () => (
  <>
    <div className="hidden sm:grid sm:grid-cols-5 sm:gap-6">
      <BrandCard src={disneyLogo} href="#disney" hoverVideo="https://vod-bgc-oc-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4"/>
      <BrandCard src={pixarLogo} href="#pixar" hoverVideo="https://vod-bgc-oc-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4"/>
      <BrandCard src={marvelLogo} href="#marvel" hoverVideo="https://vod-bgc-oc-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4"/>
      <BrandCard src={starwarsLogo} href="#starwars" hoverVideo="https://vod-bgc-oc-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4"/>
      <BrandCard src={natgeoLogo} href="#natgeo" hoverVideo="https://vod-bgc-oc-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217923-national-geographic.mp4"/>
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
