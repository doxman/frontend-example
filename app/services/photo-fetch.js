import Ember from 'ember';

export default Ember.Service.extend({
  /**
   * Cached array for last set of photos retrieved from server
   * @property photoCache
   * @type {Array<Object>}
   */
  photoCache: [],

  /**
   * ID of the last album we fetched. Convenient way to check cache hit/miss.
   * @property lastAlbumId
   * @type {Number}
   */
  lastAlbumId: null,

  /**
   * Fetches a photo album from the server (or from the cache, if we have it)
   * @method fetchPhotos
   * @return {Promise<Array>}
   */
  fetchPhotos(albumId) {
    if (albumId == this.get('lastAlbumId')) { // We have it in cache
      return this.get('photoCache');
    }
    // If it's not in cache, make the server call
    return Ember.$.ajax({
      // Hit an API for photo data
      url: 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId,
      method: 'GET'
    })
    .then((photos) => {
      this.set('photoCache', photos);
      this.set('lastAlbumId', albumId);
      return photos;
    });
  }
});
