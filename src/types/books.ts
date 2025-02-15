
export interface Book {
  id: string;
  title: string;
  author: string;
  class?: string;
  subject?: string;
  category: string;
  price: number;
  coverImage: string;
  description: string;
  ageGroup?: string;
  stream?: string;
  board?: string;
  course?: string;
  semester?: string;
}
