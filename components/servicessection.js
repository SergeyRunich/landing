import Image from "next/image";
function ServicesSection() {
  return (
    <div className="flex justify-center flex-col items-center py-24">
      <h1
        style={{ fontSize: "2.5rem", fontFamily: '"Source Serif Pro", serif' }}
        className="flex justify-center items-center font-bold w-full mb-4 text-[#353643]"
      >
        Jak to
        <span className="underline underline-offset-2 ml-2 decoration-lime-700">
          funguje
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row lg:px-16 justify-between items-center w-full px-2">
        <div className="flex flex-col w-64 h-64 py-4 rounded-[80px] bg-[#F8F8F8] items-center justify-center my-3">
          <Image src="/imgs/icon1.svg" alt="" width={90} height={90} />
          <p
            className="w-full text-center font-semibold text-[#353643]"
            style={{ fontSize: "1rem" }}
          >
            Nastavíme tvůj denní
            <br />
            příjem podle tvých cílů
          </p>
          <span
            style={{ fontSize: "1.1rem" }}
            className="flex w-[31px] h-[31] my-4 rounded-[80px] bg-white justify-center text-[#3DC383] font-semibold"
          >
            1
          </span>
        </div>

        <div className="flex flex-col w-64 h-64 py-4 rounded-[80px] bg-[#F8F8F8] items-center justify-center my-3">
          <Image src="/imgs/icon2.svg" alt="" width={90} height={90} />
          <p
            className="w-full text-center font-semibold text-[#353643]"
            style={{ fontSize: "1rem" }}
          >
            Speciální algoritmus sestaví jídelníček na míru
          </p>
          <span
            style={{ fontSize: "1.1rem" }}
            className="flex w-[31px] h-[31] my-4 rounded-[80px] bg-white justify-center text-[#3DC383] font-semibold"
          >
            2
          </span>
        </div>

        <div className="flex flex-col w-64 h-64 py-4 rounded-[80px] bg-[#F8F8F8] items-center justify-center my-3">
          <Image src="/imgs/icon3.svg" alt="" width={90} height={90} />
          <p
            className="w-full text-center font-semibold text-[#353643]"
            style={{ fontSize: "1rem" }}
          >
            Jídlo
            <br />
            uvaříme
          </p>
          <span
            style={{ fontSize: "1.1rem" }}
            className="flex w-[31px] h-[31] my-4 rounded-[80px] bg-white justify-center text-[#3DC383] font-semibold"
          >
            3
          </span>
        </div>

        <div className="flex flex-col w-64 h-64 py-4 rounded-[80px] bg-[#F8F8F8] items-center justify-center my-3">
          <Image src="/imgs/icon4.svg" alt="" width={90} height={90} />
          <p
            className="w-full text-center font-semibold text-[#353643]"
            style={{ fontSize: "1rem" }}
          >
            Dovezeme po celé
            <br />
            Praze zdarma
          </p>
          <span
            style={{ fontSize: "1.1rem" }}
            className="flex w-[31px] h-[31] my-4 rounded-[80px] bg-white justify-center text-[#3DC383] font-semibold"
          >
            4
          </span>
        </div>

        <div className="flex flex-col w-64 h-64 py-4 rounded-[80px] bg-[#F8F8F8] items-center justify-center my-3">
          <Image src="/imgs/icon5.svg" alt="" width={90} height={90} />
          <p
            className="w-full text-center font-semibold text-[#353643]"
            style={{ fontSize: "1rem" }}
          >
            Následně dohlédneme na
            <br />
            to, abys svého cíle dosáhl
          </p>
          <span
            style={{ fontSize: "1.1rem" }}
            className="flex w-[31px] h-[31] my-4 rounded-[80px] bg-white justify-center text-[#3DC383] font-semibold"
          >
            5
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
