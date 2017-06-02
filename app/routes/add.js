import Ember from 'ember';

export default Ember.Route.extend({
  model(params) { // The only parameter is album_id, an integer ID for an album
    return Ember.$.ajax({
      // Hit an API for photo data
      url: 'https://jsonplaceholder.typicode.com/photos?albumId=' + params.album_id,
      method: 'GET'
    }).then((data) => {
      this.get('store').pushPayload({photo: data});
    });
  }
});
