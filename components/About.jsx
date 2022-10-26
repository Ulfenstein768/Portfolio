import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f59e0b]">
            About
          </p>
          <h2 className="py-4">Who am I</h2>
          <p className="py-2">A fresh out the box web developer & designer</p>
          <p className="py-2">
            Hi, I am Úlfur and I am from Iceland. I recently graduated at the
            Reykjavík Aca­demy of Web Develop­ment and I can now proudly call
            myself a web developer.
          </p>
          <p className="py-2">
            I am somewhat acquainted to web develop­ment, interface design and
            programming of websites and other web based app­lications and
            solutions.
          </p>
          <Link href="/#projects">
            <p className="py-2 underline cursor-pointer">
              Check out some of my latest Projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center py-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/portrait.png"
            alt="portait"
            width="250"
            height="375"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
