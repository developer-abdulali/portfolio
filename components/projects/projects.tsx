import React from "react";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-between items-center md:flex-row my-10 sm:flex-row sm:flex-wrap lg:px-[200px] lg:flex-row lg:justify-between xss:mx-3 md:flex-wrap">
        <div className="rounded-lg shadow-lg cursor-pointer hover:shadow-2xl xss:px-3 w-580:w-full sm:w-[300px] sm:h-[500px] sm:mx-auto border sm:mt-4">
          <Image
            className="w-580:w-full mt-4"
            src="/images/DigitalCal.png"
            alt="Digital Calculator"
            width={300}
            height={100}
          />
          <p className="text-center text-4xl font-normal mt-1 xss:text-3xl w-580:text-5xl sm:text-[33px] sm:mt-3">
            Digital Calculator
          </p>
          <br />
          <p className="text-center text-3xl xss:text-2xl w-580:text-4xl sm:text-3xl xss:pb-5 text-red-400">
            Web Application
          </p>
        </div>
        <div className="rounded-lg shadow-lg cursor-pointer hover:shadow-2xl mt-5 xss:px-3 w-580:w-full sm:w-[300px] sm:h-[500px] sm:mx-auto border">
          <Image
            className="w-580:w-full sm:h-[365px] mt-4"
            src="/images/charCounter.png"
            alt="Charactors Counter App"
            width={300}
            height={100}
          />
          <p className="text-center text-4xl font-normal mt-1 xss:text-3xl w-580:text-5xl sm:text-3xl sm:mt-4">
            Charactors Counter
          </p>
          <br />
          <p className="text-center text-3xl xss:text-2xl w-580:text-3xl xss:pb-5 text-red-400">
            Web Application
          </p>
        </div>
        <div className="rounded-lg shadow-lg cursor-pointer hover:shadow-2xl sm:my-5 my-5 border xss:px-3 w-580:w-full sm:w-[300px] sm:mx-auto sm:h-auto md:h-auto lg:w-[300px] lg:h-[500px]">
          <Image
            className="w-580:w-full sm:h-[230px] lg:mt-4 mt-4"
            src="/images/fb-page.png"
            alt="Facebook Login Page"
            width={300}
            height={100}
          />
          <p className="text-center text-4xl font-normal mt-1 xss:text-3xl w-580:text-5xl sm:text-[29px] sm:mt-3 lg:mt-36">
            Facebook Login Page
          </p>
          <br />
          <p className="text-center text-3xl xss:text-2xl w-580:text-4xl sm:text-3xl pb-3 text-red-400">
            Web Application
          </p>
        </div>
        <div className="rounded-lg shadow-lg cursor-pointer border hover:shadow-2xl sm:my-5 my-5 xss:px-3 w-580:w-full sm:w-[300px] sm:h-auto sm:mx-auto md:mx-auto lg:mx-auto md:h-auto lg:h-[500px]">
          <Image
            className="w-580:w-full sm:h-[227px] mt-4"
            src="/images/GradingCal.png"
            alt="Grading Calculator"
            width={300}
            height={100}
          />
          <p className="text-center text-4xl font-normal mt-1 xss:text-3xl w-580:text-5xl sm:text-[31px] sm:mt-3 lg:mt-36">
            Grading Calculator
          </p>
          <br />
          <p className="text-center text-3xl xss:text-2xl w-580:text-3xl xss:pb-5 text-red-400">
            Web Application
          </p>
        </div>
      </div>
    </>
  );
}
