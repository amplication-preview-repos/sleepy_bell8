import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
