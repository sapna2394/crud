import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />,document.getElementById('root'));

// import React from "react";
// import ReactDOM from "react-dom";

// const rootElement = document.getElementById("root");

// let counter = 0;

// const handleClick = () => {
//   counter++;
//   console.log("counter", counter);
// };

// const content = (
//   <div>
//     <button onClick={handleClick}>Increment counter</button>
//     <div>Counter value is {counter}</div>
//   </div>
// );

// ReactDOM.render(content, rootElement);


var Awesome = React.createClass({
    getInitialState:function() {
      return {
        txt : ["1","2","3","4","5"],
        isTrue : true
      }
    },
  
    handleClick:function() {
      this.setState({
        isTrue : !this.state.isTrue
      })
    },
  
    render:function() {
      var changeStyle = {
        display: this.state.isTrue ? "block" : "none"
      };
  
      var message = this.state.txt.map(function(oneMessage) {
        return  <SubChild change={changeStyle} txt={oneMessage}/>
      });
  
      return (
        <div>
          <button onClick={this.handleClick} >Click Me</button>
          {message}
        </div>
        )
    }
  })
  
  var SubChild = React.createClass({
    render:function() {
      return (
        <div style={this.props.change}>
          <h3>{this.props.txt}</h3>
        </div>
        )
    }
  })
  
  React.render(<Awesome />, document.body)


