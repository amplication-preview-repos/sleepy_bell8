import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { ChapterTitle } from "../chapter/ChapterTitle";

export const StoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceArrayInput source="chapters" reference="Chapter">
          <SelectArrayInput
            optionText={ChapterTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <SelectInput
          source="genre"
          label="genre"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="isComplete" source="isComplete" />
        <NumberInput step={1} label="numberOfPages" source="numberOfPages" />
        <TextInput label="overview" multiline source="overview" />
        <NumberInput step={1} label="ratings" source="ratings" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
