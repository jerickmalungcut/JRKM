import { aboutIcons } from "@/data/index";
import Image from "next/image";

const About = () => {
  return (
    <section className="min-h-screen w-full" id="about">
      <div className="container flex justify-between items-center h-full w-full">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-white">About page</h1>
        </div>

        <div className="flex-1 flex flex-wrap gap-4">
          {aboutIcons.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 text-white text-base font-semibold py-1 px-4 rounded-full border border-white/30 transition-all hover:bg-blue-800"
            >
              <Image
                src={item.img}
                alt={item.title}
                className={item.imgClass}
                width={23}
                height={23}
              />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
