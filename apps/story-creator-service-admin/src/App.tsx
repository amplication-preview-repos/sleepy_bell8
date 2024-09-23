import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReaderList } from "./reader/ReaderList";
import { ReaderCreate } from "./reader/ReaderCreate";
import { ReaderEdit } from "./reader/ReaderEdit";
import { ReaderShow } from "./reader/ReaderShow";
import { StoryList } from "./story/StoryList";
import { StoryCreate } from "./story/StoryCreate";
import { StoryEdit } from "./story/StoryEdit";
import { StoryShow } from "./story/StoryShow";
import { ChapterList } from "./chapter/ChapterList";
import { ChapterCreate } from "./chapter/ChapterCreate";
import { ChapterEdit } from "./chapter/ChapterEdit";
import { ChapterShow } from "./chapter/ChapterShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"StoryCreatorService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Reader"
          list={ReaderList}
          edit={ReaderEdit}
          create={ReaderCreate}
          show={ReaderShow}
        />
        <Resource
          name="Story"
          list={StoryList}
          edit={StoryEdit}
          create={StoryCreate}
          show={StoryShow}
        />
        <Resource
          name="Chapter"
          list={ChapterList}
          edit={ChapterEdit}
          create={ChapterCreate}
          show={ChapterShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
