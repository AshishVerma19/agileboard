import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { incrementCount, decrementCount } from "../actions/Action";
import { boardData } from "../common/constants/agileBoard.constants";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Header from "../components/Header/Header";
import CenterModal from "../components/modal/CenterModal";
import TaskCard from "../components/TaskCard/TaskCard";
import "./AgileBoard.less";

export const AgileBoard = props => {
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");

  const onAddClick = title => {
    setmodalTitle(title);
    setModalShow(true);
  };

  return (
    <ErrorBoundary>
      <Header />
      <Container className="aglie-board" fluid>
        <Row>
          {boardData.map(({ title }) => {
            return (
              <Col key={title} className="aglie-board__cards" sm={6}>
                <h3>
                  {title} {" "}
                  <span onClick={() => onAddClick(title)}>
                    <PlusCircleFill color="green" size={20} />
                  </span>
                </h3>
                <TaskCard onEdit={() => onAddClick(title)} />
              </Col>
            );
          })}

          <CenterModal
            title={modalTitle}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Row>
      </Container>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  count: state.main.count,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementCount,
      decrementCount,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AgileBoard);
