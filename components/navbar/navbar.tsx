"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import {useRouter} from "next/router"
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { useState } from "react";
const Navbar = () => {
  const router = useRouter()
  const isActiveLink =(link:any)=>{
    return router.asPath === link ? "active-link":'';
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="sticky top-0 w-full shadow-xl bg-white py-5 px-6 xs:px-2 md:px-6 lg:px-[70px] xl:px-[130px] 2xl:px-[210px]">
      <div className="flex justify-between items-center h-full w-full px-4">
        <Link href="/" className="cursor-pointer">
          <span className="text-xl hover:text-cyan-500 duration-300">
            ABDUL ALI
          </span>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/" className={isActiveLink("/")}>
              <li className="ml-10 hover:text-cyan-500 duration-300 text-xl">
                Home
              </li>
            </Link>
            <Link href="/Services" className={isActiveLink("/Services")}>
              <li className="ml-10 hover:text-cyan-500 duration-300 text-xl">
                Services
              </li>
            </Link>
            <Link href="/About" className={isActiveLink("/About")}>
              <li className="ml-10 hover:text-cyan-500 duration-300 text-xl">
                About
              </li>
            </Link>
            <Link href="/Contact" className={isActiveLink("/Contact")}>
              <li className="ml-10 hover:text-cyan-500 duration-300 text-xl">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden sm:hidden cursor-pointer pl-24 hover:text-cyan-500 duration-300"
        >
          <AiOutlineMenu size={25} className="active:shadow-inner" />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
        }
      >
        <div
          onClick={handleNav}
          className="absolute top-2 right-2 hover:text-cyan-300 duration-300 cursor-pointer"
        >
          <AiOutlineClose size={25} className="active:shadow-inner border" />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer text-[19px] hover:text-cyan-500 duration-300"
                >
                  Home
                </li>
              </Link>
              <Link href="/Services">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer text-[19px] hover:text-cyan-500 duration-300"
                >
                  Services
                </li>
              </Link>
              <Link href="/About">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer text-[19px] hover:text-cyan-500 duration-300"
                >
                  About
                </li>
              </Link>
              <Link href="/Contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer text-[19px] hover:text-cyan-500 duration-300"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <p className="mt-10">Lets Connect</p>
        <div className="flex flex-row justify-between pt-10 items-center">
          <Link target="_blank" href="https://github.com/developer-abdulali">
            <BsGithub
              size={25}
              className="cursor-pointer hover:text-cyan-500 duration-300"
            />
          </Link>
          <Link target="_blank" href="https://twitter.com/ab_ali2k23">
            <ImTwitter
              size={25}
              className="cursor-pointer hover:text-cyan-500 duration-300"
            />
          </Link>
          <Link target="_blank"
            href="https://www.linkedin.com/in/abdul-ali-31a1bb22b/"
          >
            <BsLinkedin
              size={25}
              className="cursor-pointer hover:text-cyan-500 duration-300"
            />
          </Link>
          <Link target="_blank" href="https://facebook.com/abdulalisoomro2k23">
            <GrFacebook
              size={25}
              className="cursor-pointer hover:text-cyan-500 duration-300"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;