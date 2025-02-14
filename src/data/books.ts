
import { Book } from '../types/books';

export const books: Book[] = [
  {
    id: '1',
    title: 'Mathematics for Class X',
    author: 'R.D. Sharma',
    class: 'X',
    subject: 'Mathematics',
    category: 'Text Books',
    price: 450,
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    description: 'Comprehensive mathematics textbook for class 10 students'
  },
  {
    id: '2',
    title: 'Science - Class IX',
    author: 'NCERT',
    class: 'IX',
    subject: 'Science',
    category: 'Text Books',
    price: 375,
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    description: 'Complete science textbook for class 9 students'
  },
  {
    id: '3',
    title: 'English Grammar Guide',
    author: 'Wren & Martin',
    class: 'VIII',
    subject: 'English',
    category: 'Sahayika',
    price: 299,
    coverImage: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1',
    description: 'Comprehensive English grammar guide for secondary students'
  },
  // Add more dummy books as needed
];
