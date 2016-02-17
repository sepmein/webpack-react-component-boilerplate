/**
 * Created by Spencer on 16/1/13.
 */
'use strict';
import React from 'react';
var Hello = React.createClass({
    componentDidMount: function(){
        this.props.show();
    },
    render: function(){
       return (
           <h1>{this.props.content}</h1>
       );
   } 
});

import {connect} from 'react-redux';
const mapStateToProps = (state) => {
    return {content: state.content};
};

const mapDispatchToProps = (dispatch) => {
    return {
        show: function () {
            dispatch({type: 'FOO'});
        }
    }
};

let App = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default App;