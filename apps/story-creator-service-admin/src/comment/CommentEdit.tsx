import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ChapterTitle } from "../chapter/ChapterTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput source="chapter.id" reference="Chapter" label="chapter">
          <SelectInput optionText={ChapterTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
