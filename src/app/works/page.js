import SrzLayout from "@/components/SrzLayout";
import WorkFilter from "./_partials/WorkFilter";

async function getWorks() {
  const res = await fetch("http://localhost:3000/api/works", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch works");
  return res.json();
}

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
