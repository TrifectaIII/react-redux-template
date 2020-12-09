import * as React from 'react';
import {connect} from 'react-redux';

import './PlaceholderComponent.css';

//import redux action
import {placeholderAction} from '../redux/actions';

class Component extends React.Component {

    // constructor (props) {
    //     super (props);
    // }

    render = () => {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.placeholderAction}>Click me!</button>
                <h2>{this.props.counter}</h2>
            </div>
          );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.placeholderReducer.counter,
    }
}

const mapDispatchToProps = {
   placeholderAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
