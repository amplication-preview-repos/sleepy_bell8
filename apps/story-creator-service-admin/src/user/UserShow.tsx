import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="facebook" source="facebook" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="instagram" source="instagram" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="linkedin" source="linkedin" />
        <TextField label="photo" source="photo" />
        <TextField label="Roles" source="roles" />
        <TextField label="tiktok" source="tiktok" />
        <TextField label="twitter" source="twitter" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
