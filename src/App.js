import React from 'react';
import Hello from './Hello.js'
import './App.css';

const App = ({name}) => {
  return <div>
            <h2>Assignment # 03</h2>
            <h3>Completed by {name}<hr /></h3>
            <p>This paragraph is written in App.js <br /> 
            It's a coustom component of index.js which we call <strong>tag</strong> in html language<br />
            I have used <i>function into an arrow method</i> to write a function
            Updated File!!
            <hr />
            </p>
            <Hello></Hello>
          </div>
}

export default App;
