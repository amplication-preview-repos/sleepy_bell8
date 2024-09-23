import { ChapterCreateNestedManyWithoutStoriesInput } from "./ChapterCreateNestedManyWithoutStoriesInput";

export type StoryCreateInput = {
  author?: string | null;
  chapters?: ChapterCreateNestedManyWithoutStoriesInput;
  content?: string | null;
  genre?: "Option1" | null;
  isComplete?: boolean | null;
  numberOfPages?: number | null;
  overview?: string | null;
  ratings?: number | null;
  title?: string | null;
};
