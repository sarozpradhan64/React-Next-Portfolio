export default async function getSkills() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/skills`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch skills");
    return await res.json();
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error; 
  }
}
