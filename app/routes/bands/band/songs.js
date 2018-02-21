import Route from '@ember/routing/route';

import { capitalize as capitalizeWords } from 'rarwe/helpers/capitalize';

export default Route.extend({
  actions: {
    createSong () {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');

      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });

      song.save().then(function () {
        controller.set('title', '');
      });
    },

    didTransition () {
      var band = this.modelFor('bands.band');
      var name = capitalizeWords(band.get('name'));
      document.title = `${name} songs - Rock & Roll`;
    }
  },

  resetController (controller) {
    controller.set('songCreationStarted', false);
  }
});
