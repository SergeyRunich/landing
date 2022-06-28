import Image from "next/image";
import Logo from "./logo";

function Header() {
  return (
    <div className="w-full h-[5vh] absolute top-0 bg-[#FDFDFD]/80 flex items-center justify-between">
      <a className="relative flex h-7 w-24 left-[4vw]" href="#">
        <Logo />
      </a>
      <div className="relative flex right-[4vw]">
        <a className="relative flex h-6 w-6 cursor-pointer ml-5]" href="#">
          <Image
            src="/imgs/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
        <a className="relative flex h-6 w-6 cursor-pointer ml-5" href="#">
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
