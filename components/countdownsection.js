import Image from "next/image";

function CountDownSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-full min-h-[600px]"
      style={{ backgroundImage: "url(/imgs/banner_2.jpg)" }}
    >
      <div className="w-full h-[10vh] absolute top-0 bg-[#FDFDFD]/90 flex items-center justify-around md:hidden">
        <a
          className="text-[#ffffff] m-0 font-semibold flex justify-center items-center rounded-[80px] bg-[#3DC383] py-[14px] px-[30px] w-[35vw]"
          style={{ fontSize: "1.8rem" }}
          href="#"
        >
          <Image src="/imgs/price.svg" alt="" width={30} height={40} />
          <span className="ml-[10px]">Spočítat cenu</span>
        </a>
        <a
          className="text-[#ffffff] m-0 font-semibold flex justify-center items-center rounded-[80px] bg-[#FF8F62] py-[14px] px-[30px] w-[35vw]"
          style={{ fontSize: "1.8rem" }}
          href="#"
        >
          <span className="ml-[10px]">Objednat online</span>
        </a>
      </div>
    </div>
  );
}

export default CountDownSection;
