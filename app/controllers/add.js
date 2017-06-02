import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Add a photo to the stored collection
     * @method add
     * @param photo The photo to add
     */
    addPhoto(photo) {
      this.get('store').push({data: {
        id: photo.id,
        type: "photo",
        attributes: {
          title: photo.title,
          url: photo.url,
          thumbnailUrl: photo.url
        }
      }});
    }
  }
});
