import SrzLayout from "@/components/SrzLayout";
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
    <SrzLayout title="Works">
      <WorkFilter works={works} />
    </SrzLayout>
  );
}
