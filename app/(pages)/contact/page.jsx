"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", desc: "(+92) 305 28 79926" },
  { icon: <FaEnvelope />, title: "Email", desc: "ab.ali.soomro@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", desc: "Pakistan" },
];

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Phone" />
              </div>

              {/* input select */}
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
