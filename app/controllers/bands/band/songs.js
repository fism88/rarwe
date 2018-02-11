import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  actions: {
    enableSongCreation () {
      this.set('songCreationStarted', true);
    },

    updateRating (params) {
      var song = params.item,
          rating = params.rating;

      if (song.get('rating') === rating) {
        rating = 0;
      }

      song.set('rating', rating);
      return song.save();
    }
  },

  canCreateSong: computed('songCreationStarted', 'model.songs.[]', function () {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),

  isAddButtonDisabled: computed('title', function () {
    return isEmpty(this.get('title'));
  }),

  matchingSongs: computed('model.songs.@ech.title', 'searchTerm', function () {
    var searchTerm = this.get('searchTerm').toLowerCase();

    return this.get('model.songs').filter(function (song) {
      return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),

  queryParams: {
    sortBy: 'sort',
    searchTerm: 's',
  },

  searchTerm: '',

  songCreationStarted: false,

  sortBy: 'ratingDesc',

  sortProperties: computed('sortBy', function () {
    var options = {
      'ratingDesc': 'rating:desc,title:asc',
      'ratingAsc': 'rating:asc,title:asc',
      'titleDesc': 'title:desc',
      'titleAsc': 'title:asc'
    };

    return options[this.get('sortBy')].split(',');
  }),

  sortedSongs: sort('matchingSongs', 'sortProperties'),

  title: '',

});
