"use client";

import IconCloud from "../ui/InteractiveIcon";

const slugs = [
  "typescript",
  "javascript",
  "adobephotoshop",
  "adobepremierepro",
  "react",
  "adobexd",
  "adobe",
  "html5",
  "css3",
  "adobeaftereffects",
  "adobeillustrator",
  "bootstrap",
  "figma",
  "npm",
  "cpanel",
  "shopify",
  "wordpress",
  "git",
  "github",
  "visualstudiocode",
  "sass",
  "canva",
];

export function TechStack() {
  return (
    <div className="relative flex h-full w-full max-w-[44rem] items-center justify-center overflow-hidden  bg-background md:px-20 md:pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
