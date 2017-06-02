import Ember from 'ember';

export default Ember.Controller.extend({
  /**
   * Static array of integers [1,...,10]
   * @type {Array<Number>}
   * @property albumIds
   */
  albumIds: [1,2,3,4,5,6,7,8,9,10],

  /**
   * Tracks the album ID chosen from the selector on this page.
   * Values are integers from 1-10
   * @type {Number}
   * @property selectedAlbum
   */
  selectedAlbum: 1,
});
