import React from 'react';
import ReactDOM from 'react-dom';
import Task from './components/Task';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Task />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
