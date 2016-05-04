import React from 'react';
import {render} from 'react-dom';

import Album from './album.jsx';

class App extends React.Component{
  render(){
    return (
      <article>
        <h2>Planning moi' Travel</h2>
        <Album />
      </article>
    )
  }
}

render(<App />, document.getElementById('app'));
