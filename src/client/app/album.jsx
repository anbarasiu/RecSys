/*
* Component to communicate with the Pinterest API and display the images
*/

import React from 'react'
import {render} from 'react-dom';

import AlbumItem from './albumItem.jsx';

class Album extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.album = [
      {id : 1, desc : 'Bali'},
      {id : 2, desc : 'Simla'},
      {id : 3, desc : 'Milan'},
      {id : 4, desc : 'Rome'},
      {id : 5, desc : 'Naples'},
      {id : 6, desc : 'Havelock'},
      {id : 7, desc : 'Bali'},
      {id : 8, desc : 'Bali'}
    ];
  }

  render(){
  var items = this.album.map(function(curr, i){
    return <div class = "album-item"><AlbumItem> </AlbumItem></div>
  });
    return (
      <section id = "album">
        {items}
      </section>
    );
  }
}

export default Album;
