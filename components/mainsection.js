import Header from "./header";
import Image from "next/image";

function MainSection() {
  return (
    <>
      <div
        className="relative bg-cover bg-left-top bg-no-repeat w-full h-[1000px] md:hidden"
        style={{ backgroundImage: "url(/imgs/banner_mob_1.jpg)" }}
      >
        <Header />
        <div className="relative pt-20 top-[15vh] w-full px-5 text-center">
          <h1
            className="font-bold text-[#353643]"
            style={{
              fontSize: "3rem",
              fontFamily: '"Source Serif Pro", serif',
            }}
          >
            NutritionPro-Box
          </h1>
          <p
            className="font-normal text-[#1A1E20] mt-7 mb-12"
            style={{
              fontSize: "1.4rem",
            }}
          >
            Vom Küchenchef zubereitete und Ihnen gelieferte gesunde Mahlzeiten
          </p>
          <span
            className="font-bold text-[#7A889F] uppercase flex justify-center items-center"
            style={{ fontSize: "1rem" }}
          >
            <Image src="/imgs/fresh.svg" alt="" width={35} height={36} />
            <span className="ml-2">Immer frisch, nicht gefroren</span>
          </span>
        </div>
      </div>
      <div
        className="relative bg-cover bg-right bg-no-repeat h-[100vh] hidden md:block"
        style={{ backgroundImage: "url(/imgs/banner_desk_1.jpg)" }}
      >
        <Header />
        <div className="absolute  top-[30vh] left-[5vw] text-left">
          <h1
            className="font-bold text-[#353643]"
            style={{
              fontSize: "3.5rem",
              fontFamily: '"Source Serif Pro", serif',
            }}
          >
            NutritionPro-Box
          </h1>
          <p
            className="font-normal text-[#1A1E20] mt-6 mb-10"
            style={{ fontSize: "1.6rem" }}
          >
            Vom Küchenchef zubereitete und Ihnen gelieferte
            <br />
            gesunde Mahlzeiten
          </p>
          <span
            className="font-bold text-[#7A889F] uppercase inline-flex items-center rounded-[80px] bg-[#F8F8F8]/70 py-1 pl-1 pr-6"
            style={{ fontSize: "1rem" }}
          >
            <Image src="/imgs/fresh.svg" alt="" width={45} height={45} />
            <span className="ml-3">Immer frisch, nicht gefroren</span>
          </span>
          <a
            className="text-[#ffffff] font-semibold flex justify-center items-center rounded-[80px] bg-[#FF8F62] py-1 px-10 w-64 mt-10"
            style={{ fontSize: "0.8rem" }}
            href="#"
          >
            <Image src="/imgs/price.svg" alt="" width={15} height={30} />
            <span className="ml-2">Chci to zkusit první</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default MainSection;
