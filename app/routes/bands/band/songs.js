import Route from '@ember/routing/route';
import Song from 'rarwe/models/song';

export default Route.extend({
  actions: {
    createSong () {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var title = controller.get('title');

      var song = Song.create({ title: title, band: band});
      band.get('songs').pushObject(song);
      controller.set('title', '');
    },
  },

  resetController: function (controller) {
    controller.set('songCreationStarted', false);
  }
});
