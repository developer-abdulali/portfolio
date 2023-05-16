import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownCircle } from "react-icons/bs";
export default function heroSection() {
  return (
    <section className="flex flex-col justify-between items-center mt-10 sm:flex-row sm:mx-10 mxl:mx-10 lg:justify-around lg:px-10">
      <div>
        <h1 className="font-semibold text-2xl mt-10 text-center sm:text-3xl sm:text-left mxl:text-4xl">Hi, I am ABDUL ALI</h1>
        <br />
        <span className="text-[20px] font-medium text-center flex text-[#6b7280be] xs:text-base xs:font-medium sm:text-[20px] mxl:text-[23px] xs:text-center sm:text-left mxl:text-4xl">
          A Frontend Developer & Design Enthusiast
        </span>
        <Link target="_blank" href="https://github.com/developer-abdulali">
          <button className="flex py-2 px-2 gap-2 mx-auto mt-5 shadow-md text-white font-medium bg-blue-500 rounded-md duration-300 hover:bg-blue-600 sm:mx-0 mxl:py-3 mxl:px-4">
            <BsArrowDownCircle className="mt-1" />
            Download Resume
          </button>
        </Link>
      </div>
      <div>
        <Image
          className="sm:w-[350px] md:w-[500px] lg:w-[600px]"
          src="/images/developerImg.svg"
          alt="Developer Image"
          width={700}
          height={100}
        />
      </div>
    </section>
  );
}
