import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialsIconsData = [
  { icon: <FaGithub />, path: "https://github.com/developer-abdulali" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/abdulali12" },
  { icon: <FaFacebook />, path: "https://linkedin.com/abdulalisoomro2k23" },
  { icon: <FaTwitter />, path: "/" },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialsIconsData?.map((item, i) => {
        return (
          <Link key={i} href={item.path} target="_blank" className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
