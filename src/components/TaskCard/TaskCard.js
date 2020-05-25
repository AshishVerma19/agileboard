import React from "react";
import { Card } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

export default function TaskCard({ onEdit }) {
  return (
    <Card bg="Light" text="dark" style={{ width: "200px", height: "150px" }}>
      <Card.Body>
        <Card.Text>Random text</Card.Text>
      </Card.Body>
      <Card.Footer>
        <span onClick={() => onEdit()}>
          <Pencil color="green" size={15} />
        </span>
      </Card.Footer>
    </Card>
  );
}
