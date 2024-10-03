import { Note } from "#site/content";

export function sortPostsByDate(posts: Array<Note>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
