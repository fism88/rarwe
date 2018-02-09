import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  band: DS.belongsTo('band'),
  rating: DS.attr('number')
});
