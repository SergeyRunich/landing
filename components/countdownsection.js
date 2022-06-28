import Image from "next/image";

const end = new Date("07/01/2022 00:00 AM");

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
let timer;

function showRemaining() {
  const now = new Date();
  const distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "EXPIRED!";

    return;
  }
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);

  if (typeof document !== "undefined") {
    document.getElementById("countdown").innerHTML = `
      <div className="flex items-center flex-row w-full">
        <div className="flex flex-row justify-center text-center items-center"><p>${days}</p><p>Days</p></div>
        <div className="flex flex-row justify-center text-center items-center"><p>${hours}</p><p>Hours</p></div>
        <div className="flex flex-row justify-center text-center items-center"><p>${minutes}</p><p>Minutes</p></div>
      </div>
    `;
  }
}

timer = setInterval(showRemaining, 1000);

function CountDownSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-full min-h-[600px]"
      style={{ backgroundImage: "url(/imgs/banner_2.jpg)" }}
    >
      <div className="w-full h-20 absolute top-0 bg-[#FDFDFD]/90 flex items-center justify-around md:hidden">
        <a
          className="text-[#ffffff] box-border m-0 font-semibold flex items-center justify-center rounded-[40px] bg-[#3DC383] py-3 px-5 h-[45px] leading-[20px] w-[40vw]"
          style={{ fontSize: "1rem" }}
          href="#"
        >
          <Image src="/imgs/price.svg" alt="" width={30} height={40} />
          <span className="ml-[10px]">Spočítat cenu</span>
        </a>
        <a
          className="text-[#ffffff] box-border m-0 font-semibold flex justify-center items-center rounded-[40px] bg-[#FF8F62] py-3 px-5 h-[45px] leading-[20px] w-[40vw]"
          style={{ fontSize: "1rem" }}
          href="#"
        >
          <span className="">Objednat online</span>
        </a>
      </div>

      <div className="relative flex justify-center items-center flex-col w-full">
        <div className="relative flex items-center justify-center mt-[180px] md:mt-[100px] md:hidden">
          <p
            className="font-bold text-center text-[#353643]"
            style={{
              fontSize: "2.5rem",
              fontFamily: '"Source Serif Pro", serif',
            }}
          >
            Make a pre-order with a
            <br />
            <span
              style={{ border: "2.4px dashed #D5DBE1", fontSize: "4rem" }}
              className="inline-flex items-baseline rounded-[50px] px-[25px] py-[12px] bg-[#ffffff] text-[#5FCE9B] mx-[24px]"
            >
              30<span style={{ fontSize: "3rem" }}>%</span>
            </span>
            <br />
            discount
          </p>
        </div>
        <div className="relative items-center justify-center mt-[180px] md:mt-[100px] hidden md:flex">
          <p
            className="font-bold text-center text-[#353643]"
            style={{
              fontSize: "2.5rem",
              fontFamily: '"Source Serif Pro", serif',
            }}
          >
            Make a pre-order with a
            <span
              style={{ border: "2.4px dashed #D5DBE1", fontSize: "4rem" }}
              className="inline-flex items-baseline rounded-[50px] px-[25px] py-[12px] bg-[#ffffff] text-[#5FCE9B] mx-[24px]"
            >
              30<span style={{ fontSize: "3rem" }}>%</span>
            </span>
            discount
          </p>
        </div>

        <div className="container flex justify-center items-center w-full">
          <div className="w-full flex justify-between" id="countdown"></div>
        </div>
      </div>
    </div>
  );
}

export default CountDownSection;
