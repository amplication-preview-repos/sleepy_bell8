import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STORY_TITLE_FIELD } from "./StoryTitle";

export const StoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <BooleanField label="isComplete" source="isComplete" />
        <TextField label="numberOfPages" source="numberOfPages" />
        <TextField label="overview" source="overview" />
        <TextField label="ratings" source="ratings" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Chapter"
          target="storyId"
          label="Chapters"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="overview" source="overview" />
            <ReferenceField label="story" source="story.id" reference="Story">
              <TextField source={STORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
