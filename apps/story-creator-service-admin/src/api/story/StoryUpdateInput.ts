import { ChapterUpdateManyWithoutStoriesInput } from "./ChapterUpdateManyWithoutStoriesInput";

export type StoryUpdateInput = {
  author?: string | null;
  chapters?: ChapterUpdateManyWithoutStoriesInput;
  content?: string | null;
  genre?: "Option1" | null;
  isComplete?: boolean | null;
  numberOfPages?: number | null;
  overview?: string | null;
  ratings?: number | null;
  title?: string | null;
};
