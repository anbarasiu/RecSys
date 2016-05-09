/*
* Component to communicate with the Pinterest API and display the images
* References : http://stackoverflow.com/questions/27731857/get-domain-name-for-pinterest-api
* TODO: Git Ignore to Access Token file
*/

import React from 'react'
import {render} from 'react-dom';
import $ from 'superagent';

import AlbumItem from './albumItem.jsx';

var Album = React.createClass ({

  getInitialState(){
    return {
      album : [],
      accessToken : ''
    };
  },

  componentDidMount(){
    let params = {
      join : 'via_pinner, board, pinner',
      page_size : 50,
      query : 'travel',
      access_token : this.state.accessToken
    };
    let request = $.get('https://api.pinterest.com/v3/search/pins/', params)
                    .end((error, response) => {
                    if(response && response.status === 200){
                      let responseText = JSON.parse(response.text);
                      this.setState({album : responseText.terms});
                      console.log('Results acquired!', this.state.album);
                    }
                    else
                      console.log('Sadly, an error :(', error);
                    });
  },

  render(){
  var items = this.state.album.map(function(curr, i){
    return <AlbumItem item={curr}> </AlbumItem>
  });
    return (
      <section id = "album">
        {items}
      </section>
    );
  }
});

export default Album;
