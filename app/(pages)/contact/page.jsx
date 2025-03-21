"use client";
import { useEffect, useState } from "react";
import { servicesData } from "@/app/constant/data";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", desc: "(+92) 305 28 79926" },
  { icon: <FaEnvelope />, title: "Email", desc: "ab.ali.soomro@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", desc: "Pakistan" },
];

const ContactPage = () => {
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    document.title = "Abdul Ali - Contact With Me";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">
                {`I'd love to hear from you! Reach out with any questions or
                project ideas using the form below.`}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  aria-label="Firstname"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  aria-label="Lastname"
                />
                <Input type="email" placeholder="Email" aria-label="Email" />
                <Input type="text" placeholder="Phone" aria-label="Phone" />
              </div>

              {/* input select */}
              <Select
                onValueChange={(value) => setSelectedService(value)}
                value={selectedService}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service">
                    {selectedService
                      ? servicesData.find(
                          (service) => service.title === selectedService
                        )?.title
                      : "Select a service"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    {servicesData.map((service, i) => (
                      <SelectItem key={i} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type message here.."
              />

              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, i) => {
                return (
                  <li key={i} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
