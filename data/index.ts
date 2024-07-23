export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    name: "Experience",
    link: "#experience",
  },
  {
    id: 5,
    name: "Testimonial",
    link: "#testimonial",
  },
];

export const techStackWeb = [
  "HTML 5",
  "CSS 3",
  "Javascipt ES6",
  "Bootstrap",
  "SASS",
  "TailwindCSS",
  "jQuery",
  "ReactJS",
  "NextJS",
  "Wordpress",
  "Shopify",
  "Github",
];

export const techStackGraphic = [
  "Figma Design",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
];

export const words = [
  "Web Developer",
  "UI/UX Designer",
  "Tech Support",
  "Graphic Designer",
];

export const workExperience = [
  {
    id: 1,
    position: "Freelance Web Developer, Graphic and Web Designer",
    company: "OLJ Ph / Upwork / Fiverr",
    location: "Work From Home, Philippines",
    year: "2020-2024",
    description:
      "Collaborate with fellow developers to develop new approaches for creating more-expressive websites for the company.\nCreating a suitable color scheme or incorporating the client’s color scheme into the design.\n Creating mock-ups of the site for the client’s approval. \nFixing any functionality issues, including the removal of dead links. \nUpdating and maintaining the site. \n Lay out content on web pages and test on different browsers and ensure people with different 	computers can access a website.",
    img: "/images/upwork.png",
  },
  {
    id: 2,
    position: "Graphic Designer/Artist",
    company: "TBR Incorporated",
    location: "Balibago Angeles City Pampanga, Philippines",
    year: "2018-2020",
    description:
      "Create and design various materials for digital and print. \nEnsure projects are completed in a timely manner with a quality product.\nWork with a wide range of media and graphic design software.\nEstablish creative direction for the company within brand guidelines.\nImplement feedback and changes whenever possible. \nShoot photos and videos for company needs and requirements",
    img: "/images/tbr.png",
  },
  {
    id: 3,
    position: "IT Support Engineer (Level 2)",
    company: "Texas Instruments Clark",
    location: "Clark Freeport Zone Pampanga, Philippines",
    year: "2015-2018",
    description:
      "Provide Level 2 PC support service requested via email, phone call or ticketing system. \nMaintenance of PC's and Laptop's inside TI Clark Philippines. \nAnnual Desktop and Laptop preventive maintenance which includes cleaning of internal and external parts, components, applying software patches as approved by Texas Instrument. \nHardware and Software troubleshooting and problem isolation. \nInstallation or upgrade of operating systems and/or applications as approved by Texas Instruments. This applies to new and existing PCs. \nDeployment of Laptops, Desktops, Thin clients, Printers and Peripherals. \nResearch various problems to provide appropriate response to end users. \nNetwork troubleshooting incase network support is not around.",
    img: "/images/ti.png",
  },
  {
    id: 4,
    position: "Return Merchandise Authority Staff",
    company: "Enigma Technologies Inc.",
    location: "Marisol Angeles City Pampanga, Philippines",
    year: "2013-2015",
    description:
      "Coordinate the availability of parts for shipping and communicate with both internal departments and external customer on the status of RMA units. \nExamine and troubleshoot the returned items to verify conformance to specifications. \nWork with Warehouse department on storage of returned particles according to identifying information. \nCount, sort and verify all incoming returned products to verify receipt of items on requisitions or invoices.",
    img: "/images/enigma.png",
  },
  {
    id: 5,
    position: "IT Technical Support (On the Job Trainee)",
    company: "Stream Global Services.",
    location: "Clark Freeport Zone Pampanga, Philippines",
    year: "2013",
    description:
      "Oversee and support trouble ticket activity and work orders as required. \nPerforms IT Desktop Support job responsibilities. \nRemotes the desktop computer of call center agents. \nIn charge in cable grooming and desktop maintenance.",
    img: "/images/stream.png",
  },
];

export interface Project {
  id: number;
  category: string;
  title: string;
  img: string;
  link: string;
  tech: string;
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Web Development",
    title: "Crypt Land",
    tech: "Tailwind CSS, NextJS, Typescript, Vercel",
    img: "/images/webdev1.jpg",
    link: "#404",
  },
  {
    id: 2,
    category: "Web Development",
    title: "Ada",
    tech: "Tailwind CSS, NextJS, Typescript",
    img: "/images/webdev2.jpg",
    link: "#404",
  },
  {
    id: 3,
    category: "Web Development",
    title: "Stract",
    tech: "Wordpress, Tailwind",
    img: "/images/webdev3.jpg",
    link: "#404",
  },
  {
    id: 4,
    category: "Web Development",
    title: "Flowbase",
    tech: "NextJS, Tailwindcss, Webflow",
    img: "/images/webdev4.jpg",
    link: "#404",
  },
  {
    id: 5,
    category: "Web Development",
    title: "ClarityU",
    tech: "ReactJS, Javascript, Tailwind",
    img: "/images/webdev5.jpg",
    link: "#404",
  },
  {
    id: 6,
    category: "Web Design",
    title: "Clarity",
    tech: "Figma Design, Photoshop",
    img: "/images/webdev6.jpg",
    link: "#404",
  },
  {
    id: 7,
    category: "Web Design",
    title: "FieldGuide",
    tech: "Figma Design, Photoshop",
    img: "/images/webdev7.jpg",
    link: "#404",
  },
  {
    id: 8,
    category: "Web Design",
    title: "Cobait",
    tech: "Adobe XD, Photoshop",
    img: "/images/webdev8.jpg",
    link: "#404",
  },
  {
    id: 9,
    category: "Web Design",
    title: "Raycast",
    tech: "Figma Design, Photoshop, Gemini ",
    img: "/images/webdev9.jpg",
    link: "#404",
  },
  {
    id: 10,
    category: "Web Design",
    title: "Vesto",
    tech: "Figma Design, Photoshop",
    img: "/images/webdev10.jpg",
    link: "#404",
  },
  {
    id: 11,
    category: "Graphic Design",
    title: "Loddi Banner",
    tech: "Photoshop, Illustrator",
    img: "/images/graphic1.jpg",
    link: "#404",
  },
  {
    id: 12,
    category: "Graphic Design",
    title: "SzethTV Logo",
    tech: "Photoshop, Illustrator",
    img: "/images/graphic2.jpg",
    link: "#404",
  },
];

export const testimonies = [
  {
    name: "Rachelle Rivera",
    position: "Marketing Manager at Rachmor Online Solutions",
    comment:
      "Jerick's graphic design skills are unparalleled. His keen eye for detail and innovative approach to design have significantly enhanced our brand's visual identity. His web design projects are equally impressive, showcasing a perfect blend of creativity and functionality. We couldn't be happier with the results and highly recommend Jerick for any graphic and web design needs.",
  },
  {
    name: "Jessica Williams",
    position: "UI/UX Designer at PixelWave Designs",
    comment:
      "Working with Jerick has been an absolute pleasure. His expertise in graphic design brought our ideas to life with stunning visuals that exceeded our expectations. Additionally, his web design work is top-notch, providing us with a user-friendly and visually appealing website. Jerick's professionalism and dedication to excellence make him an invaluable asset to any project.",
  },
  {
    name: "Emily Davis",
    position: "Content Strategist at BlueSky Creatives",
    comment:
      "His ability to understand our vision and translate it into beautiful, functional designs is truly remarkable. The websites he creates are not only aesthetically pleasing but also highly responsive and user-friendly. Jerick's work has significantly boosted our online presence, and we highly recommend his services to anyone looking for exceptional design work.",
  },
  {
    name: "David Smith",
    position: "Front-end Developer at DigitalEcho Studios",
    comment:
      "Jerick's graphic design and web design services have been transformative for our business. His attention to detail and creative vision brought our brand to life in a way we never imagined. The website he designed is not only visually stunning but also user-friendly, making it easier for our customers to navigate and shop. Jerick's professionalism and dedication to delivering top-quality work make him an invaluable partner for any business looking to enhance their online presence.",
  },
  {
    name: "Sarah Wilson",
    position: "Brand Strategist at BrightWave Media",
    comment:
      "Working with Jerick has been a fantastic experience. His expertise in graphic design and web design is truly exceptional. He took our outdated website and transformed it into a modern, engaging platform that has significantly increased our user engagement. Jerick's ability to understand our vision and translate it into a cohesive, aesthetically pleasing design exceeded our expectations. We highly recommend his services to anyone in need of a skilled and reliable designer.",
  },
  {
    name: "James Anderson",
    position: "Senior Developer at CreativeSpark Studio",
    comment:
      "From the initial consultation to the final product, he was attentive, creative, and responsive to our needs. The website he developed for us is not only beautiful but also optimized for performance and accessibility, reflecting our brand perfectly. Jerick's designs have helped us attract more clients and establish a stronger online presence. We couldn't be happier with the results and look forward to collaborating with him on future projects.",
  },
];
