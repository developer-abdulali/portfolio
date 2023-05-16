import React from "react";
import Link from "next/link";
import {BsGithub} from "react-icons/bs"
import {ImTwitter} from "react-icons/im"
import {BsLinkedin} from "react-icons/bs"
import {GrFacebook} from "react-icons/gr"
export default function followLinks() {
  return(
    <>
    <div className="flex justify-center items-center gap-5 pb-6">
        <div className="hover:text-blue-800">
            <Link target="_blank" href="https://github.com/developer-abdulali">
               <BsGithub className="text-4xl" />
            </Link>
        </div>
        <div className="hover:text-blue-800">
            <Link target="_blank" href="https://twitter.com/ab_ali2k23">
                <ImTwitter className="text-4xl" />
            </Link>
        </div>
        <div className="hover:text-blue-800">
            <Link target="_blank" href="https://www.linkedin.com/in/abdul-ali-31a1bb22b/">
                <BsLinkedin className="text-4xl" />
            </Link>
        </div>
        <div className="hover:text-blue-800">
            <Link target="_blank" href="https://www.facebook.com/abdulalisoomro2k23">
                <GrFacebook className="text-4xl" />
            </Link>
        </div>
    </div>
    </>
  )
}
