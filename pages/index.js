import Landing from "../views/Containers/Landing";
import React from 'react';
import {connect} from "react-redux";
import {decrementCounter, incrementCounter} from "../redux-sagas/actions/exampleActions";

class index extends React.Component {
    static getInitialProps({store}){}
    render() {
        return <Landing />
    }
}

const mapStateToProps = state => ({
    //counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);