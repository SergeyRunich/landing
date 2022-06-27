import Header from "./header";
import Image from "next/image";

function MainSection() {
  return (
    <>
      <div
        className="relative bg-cover bg-left-top bg-no-repeat w-full min-h-[2000px] md:hidden"
        style={{ backgroundImage: "url(/imgs/banner_mob_1.jpg)" }}
      >
        <Header />
        <div className="relative pt-[75px] top-[20vh] w-full px-[20px] text-center">
          <h1 className="font-bold text-[#353643]" style={{ fontSize: "4rem" }}>
            NutritionPro-Box
          </h1>
          <p
            className="font-normal text-[#1A1E20] mt-[28px] mb-[55px]"
            style={{ fontSize: "2rem" }}
          >
            Vom Küchenchef zubereitete und Ihnen gelieferte gesunde Mahlzeiten
          </p>
          <span
            className="font-bold text-[#7A889F] uppercase flex justify-center items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <Image src="/imgs/fresh.svg" alt="" width={35} height={36} />
            <span className="ml-[8px]">Immer frisch, nicht gefroren</span>
          </span>
        </div>
        <div className="absolute w-[363px] h-[363px] text-[#ffffff] rounded-[300px] bottom-[480px] left-[47px] bg-[#3DC383] flex flex-col justify-center items-center">
          <span
            className="font-normal flex leading-[1.2]"
            style={{ fontSize: "2.5rem" }}
          >
            ab
          </span>
          <span
            className="font-bold flex leading-[1.2]"
            style={{ fontSize: "6.5rem" }}
          >
            5,4€
          </span>
          <span
            className="font-normal flex leading-[1.2]"
            style={{ fontSize: "2.5rem" }}
          >
            je Portion
          </span>
        </div>
      </div>
      <div
        className="relative bg-cover bg-right bg-no-repeat w-full h-[1012px] hidden md:block"
        style={{ backgroundImage: "url(/imgs/banner_desk_1.jpg)" }}
      >
        <Header />
        <div className="absolute  bottom-[20vh] left-[5vw] text-left">
          <h1
            className="font-bold text-[#353643]"
            style={{ fontSize: "6.5rem" }}
          >
            NutritionPro-Box
          </h1>
          <p
            className="font-normal text-[#1A1E20] mt-[30px] mb-[60px]"
            style={{ fontSize: "2.8rem" }}
          >
            Vom Küchenchef zubereitete und Ihnen gelieferte
            <br />
            gesunde Mahlzeiten
          </p>
          <span
            className="font-bold text-[#7A889F] uppercase inline-flex items-center rounded-[80px] bg-[#F8F8F8]/70 py-[3px] pl-[3px] pr-[24px]"
            style={{ fontSize: "1.7rem" }}
          >
            <Image src="/imgs/fresh.svg" alt="" width={63} height={63} />
            <span className="ml-[10px]">Immer frisch, nicht gefroren</span>
          </span>
          <a
            className="text-[#ffffff] font-semibold flex justify-center items-center rounded-[80px] bg-[#FF8F62] py-[10px] px-[60px] w-[400px] mt-[40px]"
            style={{ fontSize: "1.8rem" }}
            href="#"
          >
            <Image src="/imgs/price.svg" alt="" width={30} height={40} />
            <span className="ml-[10px]">Chci to zkusit první</span>
          </a>
        </div>
        <div className="absolute w-[320px] h-[320px] text-[#ffffff] rounded-[300px] bottom-[254px] right-[315px] bg-[#3DC383] flex flex-col justify-center items-center">
          <span
            className="font-normal flex leading-[1.2]"
            style={{ fontSize: "2.5rem" }}
          >
            ab
          </span>
          <span
            className="font-bold flex leading-[1.2]"
            style={{ fontSize: "6.5rem" }}
          >
            5,4€
          </span>
          <span
            className="font-normal flex leading-[1.2]"
            style={{ fontSize: "2.5rem" }}
          >
            je Portion
          </span>
        </div>
      </div>
    </>
  );
}

export default MainSection;
