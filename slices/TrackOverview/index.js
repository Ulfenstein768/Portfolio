import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { useRouter } from "next/router";

const TrackOverview = ({ slice }) => (
  <section className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-10">
    <div className="col-span-4">
      {slice?.items?.map(
        (item, i /* import { PrismicRichText } from '@prismicio/react' */) => (
          <PrismicRichText field={item.projectind} />
        )
      )}

      {slice?.items?.map(
        (item, i /* import { PrismicRichText } from '@prismicio/react' */) => (
          <PrismicRichText field={item.overvie} />
        )
      )}

      <div className="py-2">
        {slice?.items?.map(
          (
            item,
            i /* import { PrismicRichText } from '@prismicio/react' */
          ) => (
            <PrismicRichText field={item.projectinfo} />
          )
        )}
      </div>
      <Link href="https://tracka-6p2necg9i-sendiradid-interns.vercel.app/">
        <button className="px-8 py-2 mt-4 mr-8">Demo</button>
      </Link>
      <Link href="https://github.com/andriandresson/tracka">
        <button className="px-8 py-2 mt-4">Code</button>
      </Link>
      <Link href="/#projects">
        <p className="underline cursor-pointer py-10">Back</p>
      </Link>
    </div>
  </section>
);

export default TrackOverview;
