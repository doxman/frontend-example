import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('edit');
  this.route('add', { path: '/add/:album_id' });
  this.route('detail');
});

export default Router;
