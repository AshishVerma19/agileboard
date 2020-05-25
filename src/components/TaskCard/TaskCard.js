import React from "react";
import { Card } from "react-bootstrap";
import { Pencil, XCircleFill } from "react-bootstrap-icons";
import "./TaskCard.less";

export default function TaskCard({ onEdit, onDelete, content }) {
  return (
    <Card bg="Light" text="dark" className="task-card">
      <Card.Body>
        <Card.Text>
          {content}
          <span className="float-right" onClick={() => onDelete()}>
            <XCircleFill color="red" size={15} />
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <span onClick={() => onEdit()}>
          <Pencil color="green" size={15} />
        </span>
      </Card.Footer>
    </Card>
  );
}
