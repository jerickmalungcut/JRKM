import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="absolute left-2 lg:left-4 bottom-0 container w-5 z-50 hidden sm:block">
      <div className="flex flex-col gap-6 text-center">
        <a
          href="https://www.linkedin.com/in/jerick-robert-malungcut-43654b139/"
          target="_blank"
          className="transition-all hover:opacity-70"
        >
          <FaGithub color="#6495ED" size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/jerick-robert-malungcut-43654b139/"
          target="_blank"
          className="transition-all hover:opacity-70"
        >
          <FaLinkedinIn color="#6495ED" size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/jerick-robert-malungcut-43654b139/"
          target="_blank"
          className="transition-all hover:opacity-70"
        >
          <FaFacebookF color="#6495ED" size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/jerick-robert-malungcut-43654b139/"
          target="_blank"
          className="transition-all hover:opacity-70"
        >
          <FaInstagram color="#6495ED" size={22} />
        </a>
        <div className="bg-[#6495ED] h-[50vh] lg:h-32 w-[2px] ml-2" />
      </div>
    </div>
  );
};
export default SocialIcons;
