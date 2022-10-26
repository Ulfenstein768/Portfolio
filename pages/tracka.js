import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";

const Page = ({ page }) => {
  return (
    <div className="w-full">
      <SliceZone slices={page.data.slices} components={components}></SliceZone>
    </div>
  );
};
export default Page;

export const getStaticProps = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("shinywaffle", "project-tracka");

  return {
    props: {
      page,
    },
  };
};
