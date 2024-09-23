import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="facebook" source="facebook" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="instagram" source="instagram" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="linkedin" source="linkedin" />
        <PasswordInput label="Password" source="password" />
        <div />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="tiktok" source="tiktok" />
        <TextInput label="twitter" source="twitter" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
