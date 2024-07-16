import FrontendLayout from "@/components/layouts/FrontendLayout";
import WorkFilter from "./_partials/WorkFilter";
import workData from "@/data/workData";

export default async function Page() {
  
  const works = workData

  return (
    <FrontendLayout title="Works">
      <WorkFilter works={works} />
    </FrontendLayout>
  );
}
