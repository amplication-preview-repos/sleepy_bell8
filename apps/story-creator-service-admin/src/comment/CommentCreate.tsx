import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ChapterTitle } from "../chapter/ChapterTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput source="chapter.id" reference="Chapter" label="chapter">
          <SelectInput optionText={ChapterTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
