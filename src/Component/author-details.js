import React, { useState, useContext } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { AuthorContext } from "../context/author-context";

export default function AuthorDetails() {
  const [state, dispatch] = useContext(AuthorContext);

  const [selectedId, setSelectedId] = useState();

  const delAuthor = (id) => {
    debugger;
    dispatch({
      type: "DEL_AUTHOR",
      payload: id,
    });
  };

  const onRemoveAuthor = () => {
    debugger;
    delAuthor(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = state.authors.map((author) => (
    <Table.Row
      key={author.id}
      onClick={() => setSelectedId(author.id)}
      active={author.id === selectedId}
    >
      <Table.Cell>{author.id}</Table.Cell>
      <Table.Cell>{author.authorName}</Table.Cell>
      <Table.Cell>{author.bookName}</Table.Cell>
      <Table.Cell>{author.email}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Author Name</Table.HeaderCell>
            <Table.HeaderCell>Book Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                onClick={onRemoveAuthor}
              >
                <Icon name="trash" /> Remove Author
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}
