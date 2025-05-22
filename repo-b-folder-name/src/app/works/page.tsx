import FrontendLayout from "@/components/layouts/FrontendLayout";
import WorkFilter from "./_partials/WorkFilter";
import workData from "@/data/workData";
import { Work } from "@/types/work";
import { Metadata } from "next";
import metas from "@/data/metaData";

export const metadata: Metadata = {
  title: `Works | ${metas.user.name}`,
  description: "Check out some of the projects I've worked on, showcasing my skills and experience.",
};


export default async function Page() {
  const works: Work[] = workData;

  return (
    <FrontendLayout title="Works">
      <WorkFilter works={works} />
    </FrontendLayout>
  );
}
