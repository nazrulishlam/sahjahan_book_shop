
// export interface Book {
//   id: string;
//   title: string;
//   author: string;
//   class?: string;
//   subject?: string;
//   category: string;
//   price: number;
//   originalPrice?: number;
//   coverImage: string;
//   description: string;
//   ageGroup?: string;
//   stream?: string;
//   board?: string;
//   course?: string;
//   semester?: string;
//   // Dictionary properties
//   language?: string;
//   dictionaryType?: string;
//   // Biography properties
//   biographyType?: string;
//   era?: string;
//   // Story Books properties
//   genre?: string;
//   // Vocational Books properties
//   trade?: string;
//   level?: string;
//   // Competitive Books properties
//   examType?: string;
//   // D.El.Ed Books properties
//   year?: string;
// }

















export interface Book {
  id: string;
  title: string;
  author: string;
  class?: string;
  subject?: string;
  category: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  description: string;
  ageGroup?: string;
  stream?: string;
  board?: string;
  course?: string;
  semester?: string;
  // Dictionary properties
  language?: string;
  dictionaryType?: string;
  // Biography properties
  biographyType?: string;
  era?: string;
  // Story Books properties
  genre?: string;
  // Vocational Books properties
  trade?: string;
  level?: string;
  // Competitive Books properties
  examType?: string;
  // D.El.Ed Books properties
  year?: string;
  // Engineering Books properties
  branch?: string;
}