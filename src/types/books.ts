
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
  // New properties for Dictionary
  language?: string;
  dictionaryType?: string;
  // New properties for Biography
  biographyType?: string;
  era?: string;
  // New properties for Story Books
  genre?: string;
  // New properties for Vocational Books
  trade?: string;
  level?: string;
  // New properties for Competitive Books
  examType?: string;
  // New properties for D.El.Ed Books
  year?: string;
}
