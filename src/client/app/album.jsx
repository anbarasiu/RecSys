/*
* Component to communicate with the Pinterest API and display the images
* References : http://stackoverflow.com/questions/27731857/get-domain-name-for-pinterest-api
*
*/

import React from 'react'
import {render} from 'react-dom';
import $ from 'superagent';

import CONSTANTS from './constants.jsx';
import AlbumItem from './albumItem.jsx';
import Engine from './engine/engine.js';

var Album = React.createClass ({

  getInitialState(){
    return {
      data : [],
      album : []
    };
  },

  componentDidMount(){
    let params = {
      join : 'via_pinner, board, pinner',
      page_size : 100,
      query : 'travel',
      access_token : CONSTANTS.ACCESS_TOKEN
    };
    let request = $.get('https://api.pinterest.com/v3/search/pins/', params)
                    .end((error, response) => {
                    if(response && response.status === 200){
                      let responseText = JSON.parse(response.text);
                      this.setState({data : responseText.data});
                      this.setState({album : responseText.data});

                      let engine = new Engine(this.state.data);
                      console.log('Results acquired!', this.state.album);
                    }
                    else
                      console.log('Sadly, an error :(', error);
                    });
  },

  render(){
    var items = this.state.album.map(function(curr, i){
      return <AlbumItem item={curr}> </AlbumItem>
    }).sort(function(a,b){
        return b.props.item.repin_count - a.props.item.repin_count;
      });

    return (
      <section id = "album">
        {items}
      </section>
    );
  }
});

export default Album;
