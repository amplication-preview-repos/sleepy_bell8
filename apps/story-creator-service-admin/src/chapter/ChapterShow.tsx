import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHAPTER_TITLE_FIELD } from "./ChapterTitle";
import { STORY_TITLE_FIELD } from "../story/StoryTitle";

export const ChapterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="overview" source="overview" />
        <ReferenceField label="story" source="story.id" reference="Story">
          <TextField source={STORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="chapterId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="author" source="author" />
            <ReferenceField
              label="chapter"
              source="chapter.id"
              reference="Chapter"
            >
              <TextField source={CHAPTER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
