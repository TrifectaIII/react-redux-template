import * as React from 'react';
import {connect} from 'react-redux';

import './App.css';

//import component
import PlaceholderComponent from './components/PlaceholderComponent';

class App extends React.Component {

    // constructor (props) {
    //     super (props);
    // }
  
    render = () =>  {
        return (
        <div>
            <h1>React-Redux Template</h1>
            <PlaceholderComponent/>
        </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
