/*
* Component to communicate with the Pinterest API and display the images
* References : http://stackoverflow.com/questions/27731857/get-domain-name-for-pinterest-api
*              https://api.pinterest.com/v3/search/pins/?join=via_pinner,board,pinner&page_size=50&query=travel&access_token=MTQzMTU5NDozNDYwMDMzMjEyODAwNTg4OTQ6OTIyMzM3MjAzNjg1NDc3NTgwN3wxNDYyNjQ4NDk1OjI1OTIwMDAtLWE2YzgyMWQyOTQ2MjViODk5ZjI5YTE3Y2U4MTBiYjM4
* TODO: Git Ignore to Access Token file
*/

import React from 'react'
import {render} from 'react-dom';
import $ from 'superagent';

import CONSTANTS from './constants.jsx';
import AlbumItem from './albumItem.jsx';

var Album = React.createClass ({

  getInitialState(){
    return {
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
                      this.setState({album : responseText.data});
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
