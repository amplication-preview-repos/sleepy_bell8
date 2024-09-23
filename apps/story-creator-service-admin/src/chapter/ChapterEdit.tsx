import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { StoryTitle } from "../story/StoryTitle";

export const ChapterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="comments" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <TextInput label="overview" multiline source="overview" />
        <ReferenceInput source="story.id" reference="Story" label="story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
