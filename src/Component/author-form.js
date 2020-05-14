import React, { useState, useContext } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";

import { AuthorContext } from "../context/author-context";

export default function AuthorForm() {
  const authorName = useFormInput("");
  const bookName = useFormInput("");
  const email = useFormInput("");

  const [state, dispatch] = useContext(AuthorContext);

  const onSubmit = () => {
    debugger;
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        id: _.uniqueId(10),
        authorName: authorName.value,
        bookName: bookName.value,
        email: email.value,
      },
    });
    // Reset Form
    authorName.onReset();
    bookName.onReset();
    email.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="Enter Author Name" {...authorName} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Book Name" {...bookName} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Email" {...email} type="email" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Author
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    debugger;
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
}
