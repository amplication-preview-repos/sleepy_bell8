import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StoryList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Stories"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
