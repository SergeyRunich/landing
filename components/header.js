import Image from "next/image";
import Logo from "./logo";

function Header() {
  return (
    <div className="w-full h-[10vh] absolute top-0 bg-[#FDFDFD]/80 flex items-center justify-between">
      <a className="relative flex h-[30px] w-[92px] left-[4vw]" href="#">
        <Logo />
      </a>
      <div className="relative flex right-[4vw]">
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
}

export default Header;
