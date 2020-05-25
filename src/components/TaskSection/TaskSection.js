import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskSection.less";

function TaskSection({
  title,
  taskType,
  onEditClick,
  onAddClick,
  onDeleteClick,
  data,
  count,
}) {
  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      setTasks(data);
    },
    [count]
  );
  return (
    <Col key={taskType} className="task-section" sm={6}>
      <header className="task-section__header">
        <h4>
          {title} {" "}
          <span onClick={e => onAddClick(e, taskType, title)}>
            <PlusCircleFill color="green" size={20} />
          </span>
        </h4>
      </header>
      <Row>
        {tasks.length > 0 ? (
          tasks.map(({ content, id }) => {
            return (
              <Col key={id} md="auto">
                <TaskCard
                  onEdit={() => onEditClick(taskType, content, id, title)}
                  content={content}
                  onDelete={() => onDeleteClick(taskType, id)}
                />
              </Col>
            );
          })
        ) : (
          ""
        )}
      </Row>
    </Col>
  );
}

export default TaskSection;
