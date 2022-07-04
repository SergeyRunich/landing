import Image from "next/image";

const end = new Date("07/10/2022 00:00 AM");

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
        <div class="bg-[#f8f8f8] md:rounded-[40px] rounded-[30px] box-border w-[90px] h-[90px] md:w-[233px] md:h-[233px] flex flex-col justify-center items-center mx-[24px]"><p class="value text-[46px] md:text-[120px] font-bold leading-[10px] md:leading-[100px] my-[24px]">${days}</p><p class="title text-[12px] md:text-[24px] leading-[12px] md:leading-[24px] font-bold">Days</p></div>
        <div class="bg-[#f8f8f8] md:rounded-[40px] rounded-[30px] box-border w-[90px] h-[90px] md:w-[233px] md:h-[233px] flex flex-col justify-center items-center mx-[24px]"><p class="value text-[46px] md:text-[120px] font-bold leading-[10px] md:leading-[100px] my-[24px]">${hours}</p><p class="title text-[12px] md:text-[24px] leading-[12px] md:leading-[24px] font-bold">Hours</p></div>
        <div class="bg-[#f8f8f8] md:rounded-[40px] rounded-[30px] box-border w-[90px] h-[90px] md:w-[233px] md:h-[233px] flex flex-col justify-center items-center mx-[24px]"><p class="value text-[46px] md:text-[120px] font-bold leading-[10px] md:leading-[100px] my-[24px]">${minutes}</p><p class="title text-[12px] md:text-[24px] leading-[12px] md:leading-[24px] font-bold">Minutes</p></div>
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
          className="text-[#ffffff] box-border m-0 font-semibold flex items-center justify-center rounded-[40px] bg-[#3DC383] py-3 px-5 leading-[20px] h-11 w-[40vw]"
          style={{ fontSize: "16px" }}
          href="#"
        >
          <Image src="/imgs/price.svg" alt="" width={15} height={19} />
          <span className="ml-2">Spočítat cenu</span>
        </a>
        <a
          className="text-[#ffffff] box-border m-0 font-semibold flex justify-center items-center rounded-[40px] bg-[#FF8F62] py-3 px-5 h-11 leading-[20px] w-[40vw]"
          style={{ fontSize: "16px" }}
          href="#"
        >
          <span className="">Objednat online</span>
        </a>
      </div>

      <div className="relative flex justify-center items-center flex-col w-full">
        <div className="relative flex items-center justify-center mt-[180px] md:mt-24 md:hidden">
          <p
            className="font-bold text-center text-[#353643]"
            style={{
              fontSize: "30px",
              fontFamily: '"Source Serif Pro", serif',
            }}
          >
            Make a pre-order with a
            <br />
            <span
              style={{ border: "2.4px dashed #D5DBE1", fontSize: "50px" }}
              className="inline-flex items-baseline rounded-[50px] px-6 py-3 bg-[#ffffff] text-[#5FCE9B] mx-6"
            >
              30<span style={{ fontSize: "30px" }}>%</span>
            </span>
            <br />
            discount
          </p>
        </div>
        <div className="relative items-center justify-center mt-44 md:mt-24 hidden md:flex">
          <p
            className="font-bold text-center text-[#353643]"
            style={{
              fontSize: "30px",
              fontFamily: '"Source Serif Pro", serif',
            }}
          >
            Make a pre-order with a
            <span
              style={{ border: "2.4px dashed #D5DBE1", fontSize: "50px" }}
              className="inline-flex items-baseline justify-center rounded-[50px] font-bold box-border h-[112px] w-[167px] pt-[14px] pb-3 bg-[#ffffff] text-[#5FCE9B] mx-6"
            >
              30<span style={{ fontSize: "30px" }}>%</span>
            </span>
            discount
          </p>
        </div>

        <div className="container flex justify-center items-center w-full">
          <div
            className="w-full flex justify-center items-center mt-16 pb-28"
            id="countdown"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CountDownSection;
