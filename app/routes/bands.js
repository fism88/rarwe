import EmberObject from '@ember/object';
import Route from '@ember/routing/route';

var Band = EmberObject.extend({
  name: ''
});

export default Route.extend({
  model: function () {
    var ledZeppelin = Band.create({
      name: 'Led Zeppelin'
    });

    var pearlJam = Band.create({
      name: 'Pearl Jam'
    });

    var fooFighters = Band.create({
      name: 'Foo Fighters'
    });

    return [ledZeppelin, pearlJam, fooFighters];
  }
});
