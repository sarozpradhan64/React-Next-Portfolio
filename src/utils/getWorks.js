export default async function getWorks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/works`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch works");
  return res.json();
}
