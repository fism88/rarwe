import { computed } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  description: '',
  name: '',

  init () {
    this._super(...arguments);
    if (!this.get('songs')) {
      this.set('songs', []);
    }
  },

  slug: computed('name', function() {
    return this.get('name').dasherize();
  }),
});
