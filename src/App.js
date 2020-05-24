import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.less';
import Header from './components/Header/Header';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { incrementCount, decrementCount } from './actions/Action';


class App extends React.Component {

  render() {

    console.log(this.props);
    return (
      < Fragment >
        <ErrorBoundary>
          <Header></Header>
          <div onClick={() => this.props.incrementCount()}>
            <h1>Hello world</h1>
            {this.props.count}
          </div>
        </ErrorBoundary>
      </Fragment >
    );
  }

}

const mapStateToProps = state => ({
  count: state.main.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementCount,
      decrementCount
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
