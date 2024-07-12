import FrontendLayout from "@/components/Layouts/FrontendLayout";
import WorkFilter from "./_partials/WorkFilter";
import getWorks from "@/utils/getWorks";

export default async function Page() {
  let works;
  try {
    works = await getWorks();
  } catch (error) {
    console.error("Error fetching works:", error);
  }

  return (
    <FrontendLayout title="Works">
      <WorkFilter works={works} />
    </FrontendLayout>
  );
}
