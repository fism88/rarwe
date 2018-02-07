import EmberObject, { computed } from '@ember/object';
import Route from '@ember/routing/route';

var Band = EmberObject.extend({
  name: '',
  language: '',

  slug: computed('name', function() {
    return this.get('name').dasherize();
  }),

  site: computed('slug', 'language', function () {
    return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
  })
});

var Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
});

export default Route.extend({
  model: function () {
    var blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    var yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    var pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    var daughter = Song.create({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5
    });

    var ledZeppelin = Band.create({
      name: 'Led Zeppelin',
      songs: [blackDog]
    });

    var pearlJam = Band.create({
      name: 'Pearl Jam',
      songs: [yellowLedbetter, daughter]
    });

    var fooFighters = Band.create({
      name: 'Foo Fighters',
      songs: [pretender]
    });

    return [ledZeppelin, pearlJam, fooFighters];
  }
});
