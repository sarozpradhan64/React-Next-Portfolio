export default async function getSkills() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/skills`);
    if (!res.ok) throw new Error("Failed to fetch works");
    return res.json();
  }
  