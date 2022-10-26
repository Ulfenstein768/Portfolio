import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

const TrackaBackgroundandTitle = ({ slice }) => (
  <>
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      {slice?.items?.map((item, i) => (
        <Image
          src={item.backgroundimage.url}
          alt={item.backgroundimage.alt}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
      ))}

      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
        {slice?.items?.map((item, i) => (
          <PrismicRichText field={item.projecttitle} />
        ))}

        {slice?.items?.map((item, i) => (
          <PrismicRichText field={item.techstack} />
        ))}
      </div>
    </div>
  </>
);

export default TrackaBackgroundandTitle;
