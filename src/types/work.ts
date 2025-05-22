// work data model
export interface Work {
  title: string;
  slug: string;
  type: string;
  year: number;
  href: string | null;
  source: string | null;
  image: string;
  description: string;
  role: string;
  stack: string;
  is_featured: boolean;
}
