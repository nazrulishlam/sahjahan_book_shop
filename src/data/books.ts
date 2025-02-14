
import { Book } from '../types/books';

export const books: Book[] = [
  // Secondary Books
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
  // Primary Books
  {
    id: '4',
    title: 'English Reader - Class V',
    author: 'Oxford Publications',
    class: 'V',
    subject: 'English',
    category: 'Text Books',
    price: 299,
    coverImage: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1',
    description: 'Primary level English textbook'
  },
  // KG Nursery Books
  {
    id: '5',
    title: 'My First ABC Book',
    author: 'Learning Press',
    class: 'KG',
    subject: 'English',
    category: 'Text Books',
    price: 199,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: 'Colorful ABC book for kindergarten students'
  },
  // Higher Secondary Books
  {
    id: '6',
    title: 'Physics Vol. I - Class XII',
    author: 'H.C. Verma',
    class: 'XII',
    subject: 'Physics',
    category: 'Text Books',
    price: 599,
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    description: 'Complete physics textbook for class 12 students'
  },
  // College Books
  {
    id: '7',
    title: 'Introduction to Computer Science',
    author: 'MIT Press',
    class: 'UG',
    subject: 'Computer Science',
    category: 'Text Books',
    price: 899,
    coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    description: 'Comprehensive guide to computer science fundamentals'
  }
];
