import { Book } from '../types/books';

export const books: Book[] = [
  // KG Nursery Books
  {
    id: '5',
    title: 'My First ABC Book',
    author: 'Learning Press',
    class: 'KG',
    subject: 'English',
    category: 'Basic Learning',
    ageGroup: '3-4 years',
    price: 199,
    coverImage: '/images/books/kg-nursery/my-first-abc.jpg',
    description: 'A colorful and engaging ABC book designed specifically for kindergarten students, featuring large letters, fun illustrations, and simple words to help children learn the alphabet.'
  },
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
  },

  // Vocational Books
  {
    id: 'v1',
    title: 'ITI Electrician Trade Theory',
    author: 'Technical Board',
    category: 'Vocational Books',
    price: 399,
    coverImage: 'https://images.unsplash.com/photo-1473221326025-9183b464bb7e',
    description: 'Complete guide for ITI Electrician trade students'
  },
  {
    id: 'v2',
    title: 'Hotel Management Fundamentals',
    author: 'Hospitality Institute',
    category: 'Vocational Books',
    price: 499,
    coverImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    description: 'Essential guide for hotel management students'
  },

  // D.El.Ed Books
  {
    id: 'd1',
    title: 'Child Psychology and Development',
    author: 'Dr. Sharma & Associates',
    category: 'D.El.Ed Books',
    subject: 'Child Psychology',
    price: 450,
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    description: 'Comprehensive guide for D.El.Ed students on child psychology'
  },
  {
    id: 'd2',
    title: 'Teaching Methodology',
    author: 'Education Board',
    category: 'D.El.Ed Books',
    subject: 'Teaching Methods',
    price: 399,
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    description: 'Essential teaching methods for primary education'
  },

  // B.Ed Books
  {
    id: 'b1',
    title: 'Educational Psychology',
    author: 'Dr. Patel Institute',
    category: 'B.Ed Books',
    subject: 'Psychology',
    price: 599,
    coverImage: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7',
    description: 'Complete guide to educational psychology for B.Ed students'
  },
  {
    id: 'b2',
    title: 'Contemporary India and Education',
    author: 'Education Council',
    category: 'B.Ed Books',
    subject: 'Education System',
    price: 499,
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d',
    description: 'Modern perspective on Indian education system'
  },

  // Competitive Books
  {
    id: 'c1',
    title: 'Complete Guide to UPSC',
    author: 'IAS Academy',
    category: 'Competitive Books',
    subject: 'Civil Services',
    price: 999,
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    description: 'Comprehensive study material for UPSC preparation'
  },
  {
    id: 'c2',
    title: 'SSC Mathematics',
    author: 'Competition Series',
    category: 'Competitive Books',
    subject: 'Mathematics',
    price: 599,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    description: 'Complete mathematics guide for SSC examinations'
  },

  // Biography
  {
    id: 'bio1',
    title: 'Wings of Fire',
    author: 'A.P.J. Abdul Kalam',
    category: 'Biography',
    price: 299,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4b417f',
    description: 'Autobiography of Dr. A.P.J. Abdul Kalam'
  },
  {
    id: 'bio2',
    title: 'The Story of My Experiments with Truth',
    author: 'Mahatma Gandhi',
    category: 'Biography',
    price: 349,
    coverImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    description: 'Autobiography of Mahatma Gandhi'
  },

  // Story Books
  {
    id: 's1',
    title: 'Tales from Indian Mythology',
    author: 'Devdutt Pattanaik',
    category: 'Story Books',
    price: 299,
    coverImage: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1',
    description: 'Collection of fascinating Indian mythological stories'
  },
  {
    id: 's2',
    title: 'Panchatantra Stories',
    author: 'Classic Publications',
    category: 'Story Books',
    price: 199,
    coverImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    description: 'Moral stories from Panchatantra'
  },

  // Dictionary
  {
    id: 'dict1',
    title: 'Oxford Advanced Learner\'s Dictionary',
    author: 'Oxford Press',
    category: 'Dictionary',
    price: 799,
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    description: 'Comprehensive English language dictionary'
  },
  {
    id: 'dict2',
    title: 'Hindi-English Dictionary',
    author: 'Rajpal & Sons',
    category: 'Dictionary',
    price: 449,
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d',
    description: 'Complete Hindi to English dictionary'
  }
];
