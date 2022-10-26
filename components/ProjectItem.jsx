import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ backgroundImg, projectUrl }) => {
  return (
    <Link href={projectUrl}>
      <div className="relative flex items-center justify-center h-auto w-full rounded-xl py-2 group hover:bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] ease-in duration-75">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p className="text-center p-4 bg-[#212121] text-[#EEF1EF] shadow-xl rounded-lg uppercase cursor-pointer">
            More info
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
