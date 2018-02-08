import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateRating (params) {
      var song = params.item,
        rating = params.rating;

      song.set('rating', rating);
    }
  }
});
