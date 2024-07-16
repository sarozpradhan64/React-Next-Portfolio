// export default async function getWorks() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/works`, {
//       next: { revalidate: 3600 },
//     });
//     if (!res.ok) throw new Error("Failed to fetch works");
//     return await res.json();
//   } catch (error) {
//     console.error('Error fetching works:', error);
//     throw error; 
//   }
// }
