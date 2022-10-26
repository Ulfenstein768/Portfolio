import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";

const PFraeOverview = ({ slice }) => (
  <section className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
    <div className="col-span-4">
      {slice?.items?.map(
        (item, i /* import { PrismicRichText } from '@prismicio/react' */) => (
          <PrismicRichText field={item.projectind} />
        )
      )}
      {slice?.items?.map(
        (item, i /* import { PrismicRichText } from '@prismicio/react' */) => (
          <PrismicRichText field={item.overview} />
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
      <Link href="https://www.figma.com/proto/cBAzOTyemRP3hK4afAy4HD/FR%C3%86?node-id=93%3A3117&scaling=min-zoom&page-id=20%3A300&starting-point-node-id=93%3A3117&show-proto-sidebar=1">
        <button className="px-8 py-2 mt-4 mr-8">Demo</button>
      </Link>
      <Link href="https://github.com/thorbergurharaldsson/FraeApp">
        <button className="px-8 py-2 mt-4">Code</button>
      </Link>
      <Link href="/#projects">
        <p className="underline cursor-pointer py-10">Back</p>
      </Link>
    </div>
  </section>
);

export default PFraeOverview;
