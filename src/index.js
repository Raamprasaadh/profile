import React from 'react';
import {render} from 'react-dom';
import profile from "./profile"


class App extends React.Component{
  render(){
    return(< profile />);
  }
}

render(<App />,document.getElementById('root'));