import Logo from "./logo";
import Image from "next/image";

function MainSection() {
  const Header = () => {
    return (
      <div className="w-full h-[75px] absolute top-0 bg-[#FDFDFD]/80 flex px-[24px] items-center justify-between">
        <a className="relative flex h-[30px] w-[92px]" href="#">
          <Logo />
        </a>
        <div className="relative flex">
          <a
            className="relative flex h-[24px] w-[24px] cursor-pointer ml-[20px]"
            href="#"
          >
            <Image
              src="/imgs/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            className="relative flex h-[24px] w-[24px] cursor-pointer ml-[20px]"
            href="#"
          >
            <Image
              src="/imgs/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    );
  };

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
        </div>
      </div>
    </>
  );
}

export default MainSection;
