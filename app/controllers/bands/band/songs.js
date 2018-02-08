import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  songCreationStarted: false,
  title: '',

  actions: {
    enableSongCreation () {
      this.set('songCreationStarted', true);
    },
  },

  isAddButtonDisabled: computed('title', function () {
    return isEmpty(this.get('title'));
  }),

  canCreateSong: computed('songCreationStarted', 'model.songs.[]', function () {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),
});
