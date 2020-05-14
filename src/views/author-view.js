import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "./index.scss";
import { AuthorContextProvider } from "../context/author-context";
import AuthorDetails from "../Component/author-details";
import AuthorForm from "../Component/author-form";
import HeaderNav from "../Component/HeaderNav";

export default function Authors() {
  return (
    <AuthorContextProvider>
      <HeaderNav />
      <Segment basic className="main-view">
        <AuthorDetails />
        <AuthorForm />
      </Segment>
    </AuthorContextProvider>
  );
}
