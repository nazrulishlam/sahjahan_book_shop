
import { kgNurseryBooks } from './kg-nursery';
import { primaryBooks } from './primary';
import { secondaryBooks } from './secondary';
import { higherSecondaryBooks } from './higher-secondary';
import { collegeBooks } from './college';
import { vocationalBooks } from './vocational';
import { delEdBooks } from './deled';
import { bEdBooks } from './bed';
import { biographyBooks } from './biography';
import { storyBooks } from './story';
import { dictionaryBooks } from './dictionary';
import { Book } from '@/types/books';

export const books: Book[] = [
  ...kgNurseryBooks,
  ...primaryBooks,
  ...secondaryBooks,
  ...higherSecondaryBooks,
  ...collegeBooks,
  ...vocationalBooks,
  ...delEdBooks,
  ...bEdBooks,
  ...biographyBooks,
  ...storyBooks,
  ...dictionaryBooks
];

export {
  kgNurseryBooks,
  primaryBooks,
  secondaryBooks,
  higherSecondaryBooks,
  collegeBooks,
  vocationalBooks,
  delEdBooks,
  bEdBooks,
  biographyBooks,
  storyBooks,
  dictionaryBooks
};
