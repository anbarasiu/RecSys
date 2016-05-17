import React from 'react';

var AlbumItem = React.createClass({
  getInitialState(){
    return {
      item : this.props.item
    };
  },

  render(){
  var item = this.state.item;
  console.log(item.repin_count);
    return (
    <div className = "card">
      <h3> {item.title} </h3>
      <a href = {item.link}>
        <img src = {item.image_medium_url} width = {item.image_medium_size_pixels.width} height = {item.image_medium_size_pixels.height} />
      </a>
      <div>{item.description}</div>
    </div>
    )
  }
});

export default AlbumItem;
