import React, { useState, useEffect } from "react";
import { Container, Row, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addTask, editTask, deleteTask } from "../actions/Action";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Header from "../components/Header/Header";
import CenterModal from "../components/modal/CenterModal";
import TaskSection from "../components/TaskSection/TaskSection";
import "./AgileBoard.less";

export const AgileBoard = props => {
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [titleList, setTitleList] = useState([]);
  const [taskContent, setTaskContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [selectedTaskType, setSelectedTaskType] = useState("");

  const onTaskEnter = event => {
    event.preventDefault();
    setTaskContent(event.target.value);
  };

  const onAddClick = (event, taskType, title) => {
    event.preventDefault();
    setSelectedTaskType(taskType);
    setmodalTitle(title);
    setModalShow(true);
  };

  const onEditClick = (taskType, content, id, title) => {
    setEditId(id);
    setTaskContent(content);
    setSelectedTaskType(taskType);
    setmodalTitle(title);
    setModalShow(true);
  };

  const onDeleteClick = (taskType, id) => {
    props.deleteTask({
      taskType,
      id,
    });
  };

  useEffect(() => {
    const sectionTitles = Object.keys(props.main);
    setTitleList(sectionTitles);
    return () => {};
  }, []);

  const onSaveClick = taskType => {
    if (typeof taskType === "string") {
      if (editId) {
        props.editTask({
          taskType: selectedTaskType,
          content: taskContent,
          id: editId,
        });
      } else {
        props.addTask({ taskType: selectedTaskType, content: taskContent });
      }

      setEditId(null);
      setTaskContent("");
      setSelectedTaskType("");

      setModalShow(false);
    }
  };

  return (
    <ErrorBoundary>
      <Header />
      <Container className="aglie-board" fluid>
        <Row>
          {titleList.map(taskType => {
            return (
              <TaskSection
                onAddClick={onAddClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                title={props.main[taskType].title}
                count={props.main[taskType].count}
                data={props.main[taskType].data}
                taskType={taskType}
                key={taskType}
              />
            );
          })}

          <CenterModal
            title={modalTitle}
            show={modalShow}
            onHide={() => setModalShow(false)}
            onExit={(taskType, content, id) =>
              onSaveClick(taskType, content, id)}
          >
            <Form>
              <Form.Group>
                <Form.Label>Task description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={taskContent}
                  onChange={onTaskEnter}
                  placeholder="Enter Task"
                />
              </Form.Group>
            </Form>
          </CenterModal>
        </Row>
      </Container>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  main: state.main,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask,
      editTask,
      deleteTask,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AgileBoard);
