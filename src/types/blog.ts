export interface PostCategory {
  id: number;
  title: string;
  slug: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  thumbnail: string | null;
  post_category_id: number;
  thumbnail_path: string | null;
  detail: string;
  post_category: PostCategory;
}
