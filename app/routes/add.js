import Ember from 'ember';

export default Ember.Route.extend({
  photoFetchService: Ember.inject.service('photo-fetch'),

  model(params) { // The only parameter is album_id, an integer ID for an album
    return this.get('photoFetchService').fetchPhotos(params.album_id);
  }
});
