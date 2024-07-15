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
      "Collaborate with fellow developers to develop new approaches for creating more-expressive websites for the company.\nCreating a suitable color scheme or incorporating the client’s color scheme into the design.\n Creating mock-ups of the site for the client’s approval. \nFixing any functionality issues, including the removal of dead links. \nUpdating and maintaining the site.",
    img: "/images/upwork.png",
  },
  {
    id: 2,
    position: "Graphic Designer/Artist",
    company: "TBR Incorporated",
    location: "Balibago Angeles City Pampanga, Philippines",
    year: "2018-2020",
    description:
      "Create and design various materials for digital and print. \nEnsure projects are completed in a timely manner with a quality product.\nWork with a wide range of media and graphic design software.\nEstablish creative direction for the company within brand guidelines.\nImplement feedback and changes whenever possible.",
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
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Web Development",
    title: "Project 1",
    img: "/images/webdev1.jpg",
    link: "#demo",
  },
  {
    id: 2,
    category: "Web Development",
    title: "Project 2",
    img: "/images/webdev2.jpg",
    link: "#demo",
  },
  {
    id: 3,
    category: "Web Development",
    title: "Project 2",
    img: "/images/webdev3.jpg",
    link: "#demo",
  },
  {
    id: 4,
    category: "Web Development",
    title: "Project 2",
    img: "/images/webdev4.jpg",
    link: "#demo",
  },
  {
    id: 5,
    category: "Web Design",
    title: "Project 2",
    img: "/images/webdesign1.jpg",
    link: "#demo",
  },
  {
    id: 6,
    category: "Web Design",
    title: "Project 2",
    img: "/images/webdesign2.jpg",
    link: "#demo",
  },
  {
    id: 7,
    category: "Web Design",
    title: "Project 2",
    img: "/images/webdesign3.jpg",
    link: "#demo",
  },
  {
    id: 8,
    category: "Web Design",
    title: "Project 2",
    img: "/images/webdesign4.jpg",
    link: "#demo",
  },
  {
    id: 9,
    category: "Web Design",
    title: "Project 2",
    img: "/images/webdesign5.jpg",
    link: "#demo",
  },
  {
    id: 10,
    category: "Graphic Design",
    title: "Project 2",
    img: "/images/graphic1.jpg",
    link: "#demo",
  },
  {
    id: 11,
    category: "Graphic Design",
    title: "Project 2",
    img: "/images/graphic2.jpg",
    link: "#demo",
  },
  {
    id: 12,
    category: "Graphic Design",
    title: "Project 2",
    img: "/images/graphic3.jpg",
    link: "#demo",
  },
  {
    id: 13,
    category: "Graphic Design",
    title: "Project 2",
    img: "/images/graphic4.jpg",
    link: "#demo",
  },
];
