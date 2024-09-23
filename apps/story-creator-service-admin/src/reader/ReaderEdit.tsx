import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReaderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ratingsGiven" source="ratingsGiven" />
      </SimpleForm>
    </Edit>
  );
};
