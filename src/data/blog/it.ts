import type { BlogPost } from './types';
import { itPostsPart1 } from './it-part1';
import { itPostsPart2 } from './it-part2';

export const itPosts: BlogPost[] = [...itPostsPart1, ...itPostsPart2];
