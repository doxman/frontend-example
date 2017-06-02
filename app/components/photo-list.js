import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['photo-list'],

  /**
   * Array of photos passed from the parent route's model
   * Each item in the array has the following properties:
   *        "albumId": @type {Number}
   *        "id": @type {Number}
   *        "title": @type {String}
   *        "url": @type {String}
   *        "thumbnailUrl": @type {String}
   * @type {Array<Object>}
   * @property photos
   */
  photos: [],

  /**
   * True if we want to show the "Add" button
   * @type {Boolean}
   * @property showAddButton
   */
  showAddButton: false,

  /**
   * I would have liked to pass things to this component, but due to
   * weirdness with #each I can't really deal with individual photos
   * on route-side. So we're just doing conditional rendering instead :-(
   */
  actions: {
    /**
     * Function for the Add button, to add a photo to the collection
     * @method add
     * @param photo The photo we want to add
     */
    add(photo) {
      this.sendAction('addPhoto', photo); // Call the corresponding route action
    }
  }
});
